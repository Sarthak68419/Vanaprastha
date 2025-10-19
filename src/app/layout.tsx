import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const DMSans = DM_Sans({
    variable: '--font-dm-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Vanaprastha - Elderly Care Services',
    description:
        'Making You Feel Special Is Not Our Goal But Our Identity. Providing care that comes from the heart, every day.',
    openGraph: {
        title: 'Vanaprastha - Elderly Care Services',
        description:
            'Providing compassionate elderly care services at home with dignity and comfort.',
        url: 'https://vanaprasthcare.org',
        siteName: 'Vanaprastha Care',
        images: [
            {
                url: 'https://vanaprasthcare.org/images/social-banner.png',
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vanaprastha - Elderly Care Services',
        description:
            'Providing compassionate elderly care services at home with dignity and comfort.',
        images: ['https://vanaprasthcare.org/images/social-banner.png'],
    },
    icons: {
        icon: '/favicon.ico', // Your Vanaprastha logo
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${DMSans.variable} antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
