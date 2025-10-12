import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    eyebrow?: string;
    title: string;
    lead?: string;
    body?: string;
    imageSrc: string;
    imageAlt?: string;
    ctaHref?: string;
    ctaLabel?: string;
};

export default function AboutSection({
    eyebrow = 'Welcome To Vanaprastha',
    title,
    lead,
    body,
    imageSrc,
    imageAlt = 'About image',
    ctaHref,
    ctaLabel,
}: Props) {
    return (
        <section className="flex items-center p-6 max-w-6xl mx-auto gap-8">
            <div className="flex-1 overflow-hidden rounded-lg">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={500}
                    className="block w-full h-[600px] object-cover object-[30%_center]"
                />
            </div>
            <div className="flex-1 max-w-xl">
                <span className="text-[#f9a825] text-lg font-medium">
                    {eyebrow}
                </span>
                <h1 className="text-3xl font-bold text-[#333] leading-tight mt-2 mb-4">
                    {title}
                </h1>
                {lead ? (
                    <p className="text-[#555] italic mb-2">{lead}</p>
                ) : null}
                {body ? <p className="text-[#666] mb-6">{body}</p> : null}
                {ctaHref && ctaLabel ? (
                    <Link
                        href={ctaHref}
                        className="inline-block bg-[#f9a825] text-white px-4 py-3 rounded-md font-medium hover:bg-[#f57f17]"
                    >
                        {ctaLabel}
                    </Link>
                ) : null}
            </div>
        </section>
    );
}
