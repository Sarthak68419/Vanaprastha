import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#8a7865] py-10 text-center text-white">
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

                <div className="mb-6 flex justify-center gap-6">
                    <Image
                        src="/images/facebook.jpg"
                        alt="facebook"
                        width={32}
                        height={32}
                    />
                    <Image
                        src="/images/twitter.jpg"
                        alt="twitter"
                        width={32}
                        height={32}
                    />
                    <Image
                        src="/images/youtube.jpg"
                        alt="youtube"
                        width={32}
                        height={32}
                    />
                </div>

                <hr className="mx-auto my-6 w-3/4 border-t border-white/20" />

                <p className="text-sm">
                    © 2025 Vanaprastha Care. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
