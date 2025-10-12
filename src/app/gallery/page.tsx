import React from 'react';
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
            <section className="bg-[#2f2f2f] py-16 text-center text-white">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <p className="mt-2">
                    <span className="text-[#f4a825]">Home</span> / Gallery
                </p>
            </section>

            <section className="my-10 text-center">
                <h2 className="mb-2 text-sm text-[#d4a017]">Gallery</h2>
                <h3 className="text-2xl font-bold">Feel the Happiness</h3>
            </section>

            <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4">
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
                            className="block h-auto w-full object-contain"
                        />
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
}
