'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import { BreadcrumbJsonLd } from 'next-seo';

// Public types
export interface CrumbDescriptor {
    label: string;
    href?: string; // omit on last or non-linkable crumb
}

export interface BreadcrumbsProps {
    /** Explicit list of crumbs. If omitted, derives from pathname. */
    items?: CrumbDescriptor[];
    /** Hide the root "Home" crumb */
    hideRoot?: boolean;
    /** Custom label for the home/root crumb */
    rootLabel?: string;
    /** Provide overrides for auto-derived segment labels */
    labelMap?: Record<string, string>;
    /** Include JSON-LD structured data */
    includeJsonLd?: boolean;
    /** Base URL (origin) for JSON-LD item URLs, e.g. https://example.com. If omitted, BreadcrumbJsonLd will output relative URLs. */
    baseUrl?: string;
    /** Replace default separator icon with custom element */
    separator?: React.ReactNode;
    /** Force non-primary crumb text to white (useful on dark/inverted hero backgrounds) */
    invertColors?: boolean;
    className?: string;
}

// Utilities
function segmentToLabel(segment: string) {
    return segment
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (m) => m.toUpperCase());
}

/**
 * Breadcrumbs abstraction leveraging shadcn/ui primitives.
 * Supports either explicit items or automatic derivation from the current pathname.
 */
export function Breadcrumbs({
    items,
    hideRoot,
    rootLabel = 'Home',
    labelMap,
    includeJsonLd,
    baseUrl,
    separator,
    invertColors,
    className,
}: BreadcrumbsProps) {
    const pathname = usePathname();

    const autoItems = useMemo(() => {
        if (items && items.length) return items;
        if (!pathname) return [];
        const segments = pathname.split('/').filter(Boolean); // remove leading empty
        const derived: CrumbDescriptor[] = [];
        if (!hideRoot) {
            derived.push({ label: rootLabel, href: '/' });
        }
        segments.forEach((seg, idx) => {
            const isLast = idx === segments.length - 1;
            const href = `/${segments.slice(0, idx + 1).join('/')}`;
            const mapped = labelMap?.[seg];
            const label = mapped || segmentToLabel(seg);
            derived.push({ label, href: isLast ? undefined : href });
        });
        return derived;
    }, [items, pathname, hideRoot, rootLabel, labelMap]);

    if (!autoItems.length) return null;

    return (
        <>
            <Breadcrumb className={className}>
                <BreadcrumbList>
                    {autoItems.map((c, idx) => {
                        const isLast = idx === autoItems.length - 1;
                        const isFirst = idx === 0;
                        const baseCurrentColor = invertColors
                            ? 'text-white'
                            : 'text-foreground';
                        const baseLinkColor = invertColors
                            ? 'text-white/90 hover:text-white'
                            : 'text-foreground/90 hover:text-foreground';
                        const separatorColor = invertColors
                            ? 'text-white/60'
                            : 'text-foreground/70';
                        return (
                            <React.Fragment key={`${c.label}-${idx}`}>
                                <BreadcrumbItem>
                                    {isLast || !c.href ? (
                                        <BreadcrumbPage
                                            className={
                                                isFirst
                                                    ? 'text-primary'
                                                    : baseCurrentColor
                                            }
                                        >
                                            {c.label}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink
                                            asChild
                                            className={
                                                isFirst
                                                    ? 'text-primary hover:text-primary/90'
                                                    : baseLinkColor
                                            }
                                        >
                                            <Link href={c.href}>{c.label}</Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {!isLast && (
                                    <BreadcrumbSeparator
                                        className={separatorColor}
                                    >
                                        {separator || undefined}
                                    </BreadcrumbSeparator>
                                )}
                            </React.Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
            {includeJsonLd && (
                <BreadcrumbJsonLd
                    useAppDir
                    itemListElements={autoItems.map((c) => ({
                        position: autoItems.indexOf(c) + 1,
                        name: c.label,
                        item: c.href
                            ? baseUrl
                                ? `${baseUrl.replace(/\/$/, '')}${c.href}`
                                : c.href
                            : undefined,
                    }))}
                />
            )}
        </>
    );
}

export default Breadcrumbs;
