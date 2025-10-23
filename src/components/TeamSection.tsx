import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type TeamSectionProps = {
    eyebrow?: string;
    title?: string;
    imageSrc?: string;
    imageAlt?: string;
    ctaHref?: string;
    ctaLabel?: string;
};

export default function TeamSection({
    eyebrow = 'Our Lovely Team',
    title = 'The Qualified, Licensed, And Professional Nurses & Doctors You Can Rely On',
    imageSrc = '/images/home/team.jpg',
    imageAlt = 'Vanaprastha Care Nurses and Doctors Team',
    ctaHref = '/team',
    ctaLabel = 'Meet Our Team',
}: TeamSectionProps) {
    return (
        <section className="bg-secondary p-16 text-center">
            <p className="text-primary">{eyebrow}</p>
            <h2 className="mx-auto mt-2 mb-6 max-w-2xl text-2xl font-bold">
                {title}
            </h2>

            <div className="mx-auto mb-6 max-w-4xl">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={900}
                    height={400}
                    className="h-auto w-full"
                />
            </div>

            <Link
                href={ctaHref}
                className="bg-primary text-primary-foreground inline-block rounded-md px-6 py-3 font-semibold hover:opacity-90"
            >
                {ctaLabel}
            </Link>

            {/*
            Optional JSON-LD structured data for SEO:
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Vanaprastha Care",
                        "url": "https://vanaprasthcare.org",
                        "logo": "https://vanaprasthcare.org/logo.png",
                        "employee": [
                            {
                                "@type": "Person",
                                "name": "Qualified Nurses & Doctors",
                                "jobTitle": "Healthcare Professionals",
                                "image": "https://vanaprasthcare.org/images/home/team.jpg"
                            }
                        ]
                    })
                }}
            />
            */}
        </section>
    );
}
