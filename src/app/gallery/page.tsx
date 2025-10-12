import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function Gallery() {
    const images = [
        '/images/gallery/gallery1.jpg',
        '/images/gallery/gallery2.jpg',
        '/images/gallery/gallery3.jpeg',
        '/images/gallery/gallery4.jpeg',
        '/images/gallery/gallery5.jpg',
        '/images/gallery/gallery6.jpg',
        '/images/gallery/gallery7.jpg',
        '/images/gallery/gallery8.jpg',
    ];

    return (
        <div className="bg-white text-[#2f2f2f]">
            <section className="bg-[#2f2f2f] text-white text-center py-16">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <p className="mt-2">
                    <span className="text-[#f4a825]">Home</span> / Gallery
                </p>
            </section>

            <section className="text-center my-10">
                <h2 className="text-[#d4a017] text-sm mb-2">Gallery</h2>
                <h3 className="text-2xl font-bold">Feel the Happiness</h3>
            </section>

            <section className="max-w-6xl mx-auto p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-md bg-[#f5f5f5]"
                    >
                        <Image
                            src={src}
                            alt={`Gallery ${idx + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain block"
                        />
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
}
