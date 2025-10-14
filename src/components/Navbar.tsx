'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const pathname = usePathname() || '/';

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/team', label: 'Team' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact' },
    ] as const;

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname === href || pathname.startsWith(href + '/');
    };

    return (
        <nav className="bg-foreground text-background relative flex items-center px-6 py-3 md:px-12 md:py-2">
            {/* Logo Section */}
            <div className="logo">
                <Image
                    src="/images/navbar/logo.jpg"
                    alt="Vanaprastha Logo"
                    className="block h-10 w-auto object-contain md:h-12"
                    width={120}
                    height={60}
                    priority
                />
            </div>

            {/* Nav Links (centered) */}
            <div className="absolute left-1/2 flex -translate-x-1/2 transform items-center gap-4 md:gap-8">
                {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={active ? 'page' : undefined}
                            className={cn(
                                'hover:text-primary focus-visible:ring-primary/50 relative rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none md:text-base',
                                active ? 'text-primary' : 'text-background/90',
                            )}
                        >
                            <span className="relative inline-flex">
                                {item.label}
                                {active && (
                                    <span
                                        aria-hidden
                                        className="bg-primary animate-in fade-in slide-in-from-left-2 pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full rounded-full duration-300"
                                    />
                                )}
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Right CTA */}
            <div className="ml-auto">
                <Button
                    asChild
                    size="sm"
                    variant={isActive('/contact') ? 'secondary' : 'default'}
                    className={cn(
                        isActive('/contact') &&
                            'animate-in fade-in zoom-in duration-300',
                    )}
                >
                    <Link
                        href="/contact"
                        aria-current={isActive('/contact') ? 'page' : undefined}
                    >
                        Contact
                    </Link>
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
