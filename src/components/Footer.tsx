import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-foreground text-background py-10 text-center">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-6">
                    <Image
                        src="/images/navbar/logo.jpg"
                        alt="Logo"
                        className="mx-auto h-12 object-contain"
                        width={120}
                        height={60}
                    />
                </div>

                <ul className="mb-6 flex flex-wrap justify-center gap-8">
                    <li>
                        <Link href="/" className="text-lg font-semibold">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-lg font-semibold">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className="text-lg font-semibold"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/team" className="text-lg font-semibold">
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery" className="text-lg font-semibold">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-lg font-semibold">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="text-background mb-6 flex justify-center gap-6">
                    <a
                        href="#"
                        aria-label="Facebook"
                        className="rounded-full p-2 hover:opacity-90"
                    >
                        <Facebook className="h-8 w-8" />
                    </a>
                    <a
                        href="#"
                        aria-label="Twitter"
                        className="rounded-full p-2 hover:opacity-90"
                    >
                        <Twitter className="h-8 w-8" />
                    </a>
                    <a
                        href="#"
                        aria-label="YouTube"
                        className="rounded-full p-2 hover:opacity-90"
                    >
                        <Youtube className="h-8 w-8" />
                    </a>
                </div>

                <hr className="border-border/50 mx-auto my-6 w-3/4 border-t" />

                <p className="text-sm">
                    © 2025 Vanaprastha Care. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
