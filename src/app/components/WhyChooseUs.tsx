import Image from 'next/image';
import React from 'react';
import Head from 'next/head';

type WhyChooseUsProps = {
    eyebrow?: string;
    title?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
};

export default function WhyChooseUs({
    eyebrow = 'Why Choose Us',
    title = 'Making The Best Impression On Your Old Age Is Our Happiness',
    description = `Everyone should strive to live the best life possible, and seniors have a unique opportunity to show others how to find happiness throughout the aging process. These seven tips are perfect for every senior who wants to live a happy life in old age.`,
    imageSrc = '/images/home/choose_us.jpg',
    imageAlt = 'Elderly Care Team Providing Services',
}: WhyChooseUsProps) {
    return (
        <>
            {/* Optional SEO for this section if used as a standalone page */}
            <Head>
                <title>Why Choose Us | Vanaprastha Care</title>
                <meta
                    name="description"
                    content="Vanaprastha Care provides top-quality, compassionate eldercare at reasonable cost. Discover why seniors and families trust us for care, support, and happiness in old age."
                />
                <meta
                    name="keywords"
                    content="elderly care, senior services, eldercare India, home care for seniors, Vanaprastha Care"
                />
                <link rel="canonical" href="https://vanaprasthcare.org/#why-choose-us" />

                {/* Open Graph / Social Meta */}
                <meta property="og:title" content="Why Choose Us | Vanaprastha Care" />
                <meta
                    property="og:description"
                    content="Discover why seniors and families trust Vanaprastha Care for compassionate, top-quality eldercare services at reasonable cost."
                />
                <meta
                    property="og:image"
                    content="https://vanaprasthcare.org/images/home/choose_us.jpg"
                />
                <meta property="og:url" content="https://vanaprasthcare.org/#why-choose-us" />
                <meta name="twitter:card" content="summary_large_image" />

                {/* Optional JSON-LD for Services */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Elderly Care",
                            "provider": {
                                "@type": "Organization",
                                "name": "Vanaprastha Care",
                                "url": "https://vanaprasthcare.org",
                                "logo": "https://vanaprasthcare.org/logo.png"
                            },
                            "description": description,
                            "areaServed": "India",
                            "image": `https://vanaprasthcare.org${imageSrc}`
                        })
                    }}
                />
            </Head>

            <section id="why-choose-us" className="bg-background mb-12 flex flex-wrap items-stretch">
                <div className="bg-primary text-primary-foreground flex flex-1 flex-col justify-center p-12">
                    <h4 className="mb-2 text-base">{eyebrow}</h4>
                    <h2 className="mb-4 text-2xl leading-tight font-bold">{title}</h2>
                    <p className="prose text-background mb-6 font-light">{description}</p>

                    <div className="mb-4 flex items-start gap-4">
                        <Image
                            src="/images/home/stick-images/money.jpg"
                            alt="Reasonable Cost Icon for Vanaprastha Care"
                            width={48}
                            height={48}
                        />
                        <div>
                            <h3 className="text-lg">Reasonable Cost</h3>
                            <p>
                                We provide eldercare services at very reasonable cost without compromising quality.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Image
                            src="/images/home/stick-images/thumbsup.jpg"
                            alt="High-Quality Services Icon for Vanaprastha Care"
                            width={48}
                            height={48}
                        />
                        <div>
                            <h3 className="text-lg">Good Quality Services</h3>
                            <p>
                                Seniors can join our centres flexibly, and we cater for ad-hoc and short-term care arrangements where needed.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                    />
                </div>
            </section>
        </>
    );
}
