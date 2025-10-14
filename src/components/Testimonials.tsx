import React from 'react';
import Image from 'next/image';

interface TestimonialsProps {
    containerClass?: string;
    innerClass?: string;
    imageSrc?: string;
    imageAlt?: string;
    overlayText?: string;
    title?: string;
    rating?: string;
    testimonial?: string;
    reviewerName?: string;
    reviewerDesignation?: string;
    reviewerImage?: string;
}

export default function Testimonials({
    containerClass = 'flex justify-center p-16',
    innerClass = 'flex max-w-4xl items-center gap-10',
    imageSrc = '/images/home/positivemission.jpg',
    imageAlt = 'Reviewer',
    overlayText = 'Positive Mission Of Helping Vulnerable Older Adults, Cooperative Team Environment. Good Combination Of Pay And Time Off',
    title = 'What They Say About Us ?',
    rating = '★★★★★',
    testimonial = `Without the help of Vanaprastha there is no way we could have gracefully navigated our way through the last couple of years. We thought we were prepared for the journey we were on, but in truth, we really had no idea of the many obstacles we were going to face.`,
    reviewerName = 'John Doe',
    reviewerDesignation = 'Designation',
    reviewerImage = '/images/home/johndoe.jpg',
}: TestimonialsProps) {
    return (
        <section className={containerClass}>
            <div className={innerClass}>
                <div className="relative flex-1">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={400}
                        height={250}
                        className="w-full rounded-lg"
                    />
                    <div className="bg-primary text-primary-foreground absolute -bottom-5 left-5 max-w-[85%] rounded-md p-4 text-sm shadow-lg">
                        {overlayText}
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-primary mb-2 font-medium">Testimonial</p>
                    <h2 className="mb-4 text-2xl">{title}</h2>
                    <div className="text-primary mb-4 text-xl">{rating}</div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {testimonial}
                    </p>
                    <div className="flex items-center gap-4">
                        <Image
                            src={reviewerImage}
                            alt={reviewerName}
                            width={80}
                            height={80}
                            className="rounded-full object-cover"
                        />
                        <div>
                            <p className="font-bold">{reviewerName}</p>
                            <p className="text-muted-foreground text-sm">
                                {reviewerDesignation}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
