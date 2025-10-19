import React from 'react';
import Head from 'next/head'; // ✅ Added for SEO
import Image from 'next/image';
import Footer from '../../components/Footer';

type GalleryImage = {
    src: string;
    width: number;
    height: number;
    alt: string;
};

export default function Gallery() {
    const images: GalleryImage[] = [
        { src: '/images/gallery/gallery1.jpg', width: 1280, height: 722, alt: 'Residents enjoying nature walk' },
        { src: '/images/gallery/gallery2.jpg', width: 1024, height: 768, alt: 'Community space with warm lighting' },
        { src: '/images/gallery/gallery5.jpg', width: 1600, height: 1200, alt: 'Cozy lounge and reading corner' },
        { src: '/images/gallery/gallery3.jpeg', width: 4032, height: 1860, alt: 'Wide garden view with pathways' },
        { src: '/images/gallery/gallery4.jpeg', width: 4032, height: 1860, alt: 'Panoramic outdoor seating area' },
        { src: '/images/gallery/gallery6.jpg', width: 1280, height: 723, alt: 'Sunlit corridor with plants' },
        { src: '/images/gallery/gallery7.jpg', width: 1024, height: 768, alt: 'Dining area prepared for a meal' },
        { src: '/images/gallery/gallery8.jpg', width: 1024, height: 768, alt: 'Activity room with games and art' },
    ];

    return (
        <div className="bg-[var(--background)] text-[var(--foreground)]">
            {/* ✅ SEO HEAD */}
            <Head>
                <title>Gallery | Vanaprastha Care</title>
                <meta
                    name="description"
                    content="Explore the Vanaprastha Care gallery showcasing our senior living spaces, activities, and happy residents. Experience the comfort, care, and community we provide."
                />
                <meta
                    name="keywords"
                    content="vanaprastha care gallery, elderly care images, senior living photos, elderly activities, senior care facility"
                />
                <link rel="canonical" href="https://vanaprasthcare.org/gallery" />
                <link rel="icon" href="/favicon.ico" />

                {/* Open Graph / Social Meta Tags */}
                <meta property="og:title" content="Gallery | Vanaprastha Care" />
                <meta
                    property="og:description"
                    content="Take a virtual tour through Vanaprastha Care's gallery. See our comfortable living spaces, engaging activities, and caring staff."
                />
                <meta
                    property="og:image"
                    content="https://vanaprasthcare.org/images/social-banner.png"
                />
                <meta property="og:url" content="https://vanaprasthcare.org/gallery" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            {/* PAGE CONTENT */}
            <section className="bg-foreground text-primary-foreground py-16 text-center">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <p className="mt-2">
                    <span className="text-[var(--primary)]">Home</span> / Gallery
                </p>
            </section>

            <section className="my-10 text-center">
                <h2 className="mb-2 text-sm text-[var(--primary)]">Gallery</h2>
                <h3 className="text-2xl font-bold">Feel the Happiness</h3>
            </section>

            {/* Masonry-style collage */}
            <section className="mx-auto max-w-6xl p-4">
                <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
                    {images.map((img, idx) => (
                        <div
                            key={`${img.src}-${idx}`}
                            className="mb-4 break-inside-avoid overflow-hidden rounded-md bg-[var(--muted)]"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={img.width}
                                height={img.height}
                                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                                className="block h-auto w-full"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
