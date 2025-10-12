import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import { Badge } from '@/components/ui/badge';

export default function Home() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="bg-accent relative text-left">
                <Image
                    src="/images/home/hero.jpg"
                    alt="Caregiver and elderly"
                    className="h-[500px] w-full object-cover brightness-[0.7]"
                    width={1200}
                    height={700}
                />
                <div className="absolute top-1/5 left-5 max-w-lg text-white">
                    <h1 className="mb-4 text-4xl font-bold">
                        Making You Feel Special Is Not Our Goal But Our Identity
                    </h1>
                    <p className="mb-4">
                        Providing care that comes from the heart, every day.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-primary text-primary-foreground inline-block rounded-md px-6 py-3 text-base font-medium"
                    >
                        Get Started
                    </Link>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary">
                            Flexible Time Visiting
                        </Badge>
                        <Badge variant="secondary">24/7 Support</Badge>
                    </div>
                </div>
            </section>

            {/* Welcome Section (refactored to AboutSection) */}
            <AboutSection
                eyebrow="Welcome To Vanaprastha"
                title="Your Golden Age Is Made Till The End, Keep A Good Memory"
                lead="The best memories of our life can never be captured in pictures, they are always captured by heart."
                body={`Your memory is the glue that binds your life together, everything you are today is because of your amazing memory.`}
                imageSrc="/images/home/welcome_collage.jpg"
                imageAlt="Caregiver"
                ctaHref="/about"
                ctaLabel="Read More"
            />

            {/* Stats Section */}
            <section className="bg-background flex justify-around p-8">
                <div className="bg-secondary rounded-xl p-6 text-center font-semibold shadow-md">
                    500+ Happy Elders
                </div>
                <div className="bg-secondary rounded-xl p-6 text-center font-semibold shadow-md">
                    50+ Caregivers
                </div>
                <div className="bg-secondary rounded-xl p-6 text-center font-semibold shadow-md">
                    20+ Hospitals
                </div>
                <div className="bg-secondary rounded-xl p-6 text-center font-semibold shadow-md">
                    35+ Medical Support
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-background flex flex-wrap items-stretch">
                <div className="bg-primary text-primary-foreground flex flex-1 flex-col justify-center rounded-tr-[40px] rounded-br-[40px] p-12">
                    <h4 className="mb-2 text-base">Why Choose Us</h4>
                    <h2 className="mb-4 text-2xl leading-tight font-bold">
                        Making The Best Impression On Your Old Age Is Our
                        Happiness
                    </h2>
                    <p className="prose text-background mb-6 font-light">
                        Everyone should strive to live the best life possible,
                        and seniors have a unique opportunity to show others how
                        to find happiness throughout the aging process. These
                        seven tips are perfect for every senior who wants to
                        live a happy life in old age.
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
                                Seniors can join our centres for just a few days
                                a week, and we can cater for ad-hoc and
                                short-term flexible care arrangements where
                                needed.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <Image
                        src="/images/home/choose_us.jpg"
                        alt="Caregivers"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                    />
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
                <h2 className="text-2xl font-bold">
                    Contact Us Easily To Receive A Quote
                </h2>
                <p className="mx-auto mt-4 max-w-3xl">
                    If you&apos;re looking for more information on any of our
                    services, have a general question about Elderly care, fill
                    out the contact information below and a member of our staff
                    will reach out to you. We look forward to hearing from you.
                </p>
            </section>

            {/* Contact / Form */}
            <section className="mx-auto -mt-16 grid max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-2">
                <div className="bg-card text-card-foreground rounded-lg p-8 shadow-lg">
                    <h3 className="text-xl font-bold">
                        Come & Be A Part Of Our New Family, Follow Your Dream
                    </h3>
                    <p className="text-muted-foreground mt-3">
                        VANAPRASTHA is an umbrella term for a wide array of
                        services intended to help older people live as
                        comfortably and independently as possible.
                    </p>

                    <h4 className="mt-6 font-bold">Work Hours</h4>
                    <div className="mt-2">
                        <p>Monday - Sunday</p>
                        <div className="mt-2 flex items-center gap-3">
                            <Image
                                src="/images/home/clock.jpg"
                                alt="Clock Icon"
                                width={40}
                                height={40}
                            />
                            <span className="font-medium">
                                Open 24/7 Services on demand
                            </span>
                            <small className="text-sm text-[#777]">
                                (Normal: 9:00 AM to 5:00 PM)
                            </small>
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                            <Image
                                src="/images/home/location.jpg"
                                alt="Location Icon"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div>
                            <h5 className="font-semibold">Our Location</h5>
                            <p className="text-muted-foreground text-sm">
                                KVR Hospital Premises 3-5-118/4,16 Shutter X
                                Road, Opposite SYR Swimming Pool, Hyderabad,
                                Attapur, Rajendranagar Mandal, Telangana 500048
                                India
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                            <Image
                                src="/images/whatsapp.jpg"
                                alt="Phone Icon"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div>
                            <h5 className="font-semibold">Call Now</h5>
                            <p className="text-sm">
                                Whatsapp No: +91 9010647888
                            </p>
                            <p className="text-sm">Phone No: 04035837011</p>
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                            <Image
                                src="/images/home/mail.jpg"
                                alt="Email Icon"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div>
                            <h5 className="font-semibold">Our Email</h5>
                            <p className="text-sm">
                                ranikoppula.reddy.rk@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <form className="bg-card text-card-foreground flex flex-col gap-4 rounded-lg p-8 shadow-lg">
                    <div className="flex gap-4">
                        <input
                            className="flex-1 rounded-md border p-3"
                            type="text"
                            placeholder="First name here"
                        />
                        <input
                            className="flex-1 rounded-md border p-3"
                            type="text"
                            placeholder="Last name here"
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            className="flex-1 rounded-md border p-3"
                            type="tel"
                            placeholder="Mobile number here"
                        />
                        <input
                            className="flex-1 rounded-md border p-3"
                            type="email"
                            placeholder="Add email"
                        />
                    </div>
                    <input
                        className="rounded-md border p-3"
                        type="text"
                        placeholder="Enter Area"
                    />
                    <input
                        className="rounded-md border p-3"
                        type="text"
                        placeholder="How can we help you?"
                    />
                    <textarea
                        className="min-h-[120px] resize-y rounded-md border p-3"
                        placeholder="Your Message"
                    ></textarea>
                    <button
                        className="bg-primary text-primary-foreground rounded-md px-4 py-3 font-bold"
                        type="submit"
                    >
                        Submit Now
                    </button>
                </form>
            </section>

            {/* Testimonials Section */}
            <section className="flex justify-center p-16">
                <div className="flex max-w-4xl items-center gap-10">
                    <div className="relative flex-1">
                        <Image
                            src="/images/home/positivemission.jpg"
                            alt="Reviewer"
                            width={400}
                            height={250}
                            className="w-full rounded-lg"
                        />
                        <div className="bg-primary text-primary-foreground absolute -bottom-5 left-5 max-w-[85%] rounded-md p-4 text-sm shadow-lg">
                            Positive Mission Of Helping Vulnerable Older Adults,
                            Cooperative Team Environment. Good Combination Of
                            Pay And Time Off
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-primary mb-2 font-medium">
                            Testimonial
                        </p>
                        <h2 className="mb-4 text-2xl">
                            What They Say About Us ?
                        </h2>
                        <div className="text-primary mb-4 text-xl">★★★★★</div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Without the help of Vanaprastha there is no way we
                            could have gracefully navigated our way through the
                            last couple of years. We thought we were prepared
                            for the journey we were on, but in truth, we really
                            had no idea of the many obstacles we were going to
                            face.
                        </p>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/home/johndoe.jpg"
                                alt="Reviewer"
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold">John Doe</p>
                                <p className="text-muted-foreground text-sm">
                                    Designation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-secondary p-16 text-center">
                <p className="text-primary">Our Lovely Team</p>
                <h2 className="mx-auto mt-2 mb-6 max-w-2xl text-2xl font-bold">
                    The Qualified, Licensed, And Professional Nurses & Doctors
                    You Can Rely On
                </h2>
                <div className="mx-auto mb-6 max-w-4xl">
                    <Image
                        src="/images/home/team.jpg"
                        alt="The Team"
                        width={900}
                        height={400}
                        className="h-auto w-full"
                    />
                </div>
                <Link
                    href="/team"
                    className="bg-primary text-primary-foreground inline-block rounded-md px-6 py-3 font-semibold hover:opacity-90"
                >
                    Nurses & Doctors
                </Link>
            </section>

            <Footer />
        </div>
    );
}
