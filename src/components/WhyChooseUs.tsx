import Image from 'next/image';
import React from 'react';

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
    imageAlt = 'Caregivers',
}: WhyChooseUsProps) {
    return (
        <section className="bg-background mb-12 flex flex-wrap items-stretch">
            <div className="bg-primary text-primary-foreground flex flex-1 flex-col justify-center p-12">
                <h4 className="mb-2 text-base">{eyebrow}</h4>
                <h2 className="mb-4 text-2xl leading-tight font-bold">
                    {title}
                </h2>
                <p className="prose text-background mb-6 font-light">
                    {description}
                </p>

                <div className="mb-4 flex items-start gap-4">
                    <Image
                        src="/images/home/stick-images/money.jpg"
                        alt="Reasonable Cost Icon"
                        width={48}
                        height={48}
                    />
                    <div>
                        <h3 className="text-lg">Reasonable Cost</h3>
                        <p>
                            We provide Eldercare services at very reasonable
                            cost.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <Image
                        src="/images/home/stick-images/thumbsup.jpg"
                        alt="Good Quality Services Icon"
                        width={48}
                        height={48}
                    />
                    <div>
                        <h3 className="text-lg">Good Quality Services</h3>
                        <p>
                            Seniors can join our centres for just a few days a
                            week, and we can cater for ad-hoc and short-term
                            flexible care arrangements where needed.
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
    );
}
