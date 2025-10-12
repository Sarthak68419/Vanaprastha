import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Navbar = () => {
    return (
        <nav className="bg-foreground text-background relative flex items-center px-12 py-2">
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
                    className="hover:text-primary text-base font-medium"
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="hover:text-primary text-base font-medium"
                >
                    About Us
                </Link>
                <Link
                    href="/services"
                    className="hover:text-primary text-base font-medium"
                >
                    Services
                </Link>
                <Link
                    href="/team"
                    className="hover:text-primary text-base font-medium"
                >
                    Team
                </Link>
                <Link
                    href="/gallery"
                    className="hover:text-primary text-base font-medium"
                >
                    Gallery
                </Link>
                <Link
                    href="/contact"
                    className="hover:text-primary text-base font-medium"
                >
                    Contact
                </Link>
            </div>
            <div className="ml-auto">
                <Button asChild>
                    <Link href="/contact">Contact</Link>
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
