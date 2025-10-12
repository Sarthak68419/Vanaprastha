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
