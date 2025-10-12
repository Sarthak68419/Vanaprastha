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
        <section className="mx-auto flex max-w-6xl items-center gap-8 p-6">
            <div className="flex-1 overflow-hidden rounded-lg">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={500}
                    className="block h-[600px] w-full object-cover object-[30%_center]"
                />
            </div>
            <div className="max-w-xl flex-1">
                <span className="text-lg font-medium text-[#f9a825]">
                    {eyebrow}
                </span>
                <h1 className="mt-2 mb-4 text-3xl leading-tight font-bold text-[#333]">
                    {title}
                </h1>
                {lead ? (
                    <p className="mb-2 text-[#555] italic">{lead}</p>
                ) : null}
                {body ? <p className="mb-6 text-[#666]">{body}</p> : null}
                {ctaHref && ctaLabel ? (
                    <Link
                        href={ctaHref}
                        className="inline-block rounded-md bg-[#f9a825] px-4 py-3 font-medium text-white hover:bg-[#f57f17]"
                    >
                        {ctaLabel}
                    </Link>
                ) : null}
            </div>
        </section>
    );
}
