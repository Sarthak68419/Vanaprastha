import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#8a7865] text-white text-center py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-6">
                    <Image
                        src="/images/navbar/logo.jpg"
                        alt="Logo"
                        className="mx-auto h-12 object-contain"
                        width={120}
                        height={60}
                    />
                </div>

                <ul className="flex justify-center flex-wrap gap-8 mb-6">
                    <li>
                        <Link href="/" className="font-semibold text-lg">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="font-semibold text-lg">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className="font-semibold text-lg"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/team" className="font-semibold text-lg">
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery" className="font-semibold text-lg">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="font-semibold text-lg">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="flex justify-center gap-6 mb-6">
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

                <hr className="border-t border-white/20 my-6 w-3/4 mx-auto" />

                <p className="text-sm">
                    © 2025 Vanaprastha Care. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
