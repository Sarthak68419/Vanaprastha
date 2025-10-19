import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Props = {
    eyebrow?: string;
    title: string;
    lead?: string;
    body?: string;
    imageSrc: string;
    imageAlt?: string;
    ctaHref?: string;
    ctaLabel?: string;
};

export default function AboutSection({
    eyebrow = 'Welcome To Vanaprastha',
    title,
    lead,
    body,
    imageSrc,
    imageAlt = 'About image',
    ctaHref,
    ctaLabel,
}: Props) {
    return (
        <section
            className="mx-auto flex max-w-6xl items-center gap-8 p-6"
            aria-label={title} // ✅ Improves accessibility & SEO
        >
            <div className="flex-1 overflow-hidden rounded-lg">
                <Image
                    src={imageSrc}
                    alt={imageAlt} // ✅ Make this descriptive
                    width={800}
                    height={500}
                    className="block h-[600px] w-full object-cover object-[30%_center]"
                />
            </div>
            <div className="max-w-xl flex-1">
                <span className="text-primary text-lg font-medium">
                    {eyebrow}
                </span>
                <h2 className="text-foreground mt-2 mb-4 text-3xl leading-tight font-bold">
                    {title} {/* ✅ h2 is better for SEO if page already has h1 */}
                </h2>
                <div className="prose prose-neutral max-w-none">
                    {lead ? <p className="mb-2 italic">{lead}</p> : null}
                    {body ? <p className="mb-6">{body}</p> : null}
                </div>
                {ctaHref && ctaLabel ? (
                    <Button
                        asChild
                        className="inline-block font-medium hover:opacity-90"
                    >
                        <Link href={ctaHref}>{ctaLabel}</Link>
                    </Button>
                ) : null}
            </div>
        </section>
    );
}
