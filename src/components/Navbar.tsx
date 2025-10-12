import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="relative flex items-center bg-[#2f2f2f] px-12 py-2">
            {/* Logo Section */}
            <div className="logo">
                <Image
                    src="/images/navbar/logo.jpg"
                    alt="Vanaprastha Logo"
                    className="block h-12 object-contain"
                    width={120}
                    height={60}
                />
            </div>

            {/* Nav Links (centered) */}
            <div className="absolute left-1/2 flex -translate-x-1/2 transform gap-8">
                <Link
                    href="/"
                    className="text-base font-medium text-white hover:text-[#f4a64d]"
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="text-base font-medium text-white hover:text-[#f4a64d]"
                >
                    About Us
                </Link>
                <Link
                    href="/services"
                    className="text-base font-medium text-white hover:text-[#f4a64d]"
                >
                    Services
                </Link>
                <Link
                    href="/team"
                    className="text-base font-medium text-white hover:text-[#f4a64d]"
                >
                    Team
                </Link>
                <Link
                    href="/gallery"
                    className="text-base font-medium text-white hover:text-[#f4a64d]"
                >
                    Gallery
                </Link>
                <Link
                    href="/contact"
                    className="text-base font-medium text-white hover:text-[#f4a64d]"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
