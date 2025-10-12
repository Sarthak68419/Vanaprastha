import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';
import AboutSection from '../../components/AboutSection';
import { Button } from '@/components/ui/button';

export default function About() {
    return (
        <div className="bg-background text-foreground">
            <section className="bg-foreground text-background py-16 text-center">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-2">
                    <span className="text-primary">Home</span> / About Us
                </p>
            </section>

            <AboutSection
                eyebrow="Welcome To Vanaprastha"
                title="Your Golden Age Is Made Till The End, Keep A Good Memory"
                lead="The best memories of our life can never be captured in pictures, they are always captured by heart."
                body={`Your memory is the glue that binds your life together, everything you are today is because of your amazing memory.`}
                imageSrc="/images/home/welcome_collage.jpg"
                imageAlt="Caregiver"
            />

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

            <section className="vision-mission bg-primary text-primary-foreground flex flex-wrap gap-8 p-16">
                <div className="min-w-[280px] flex-1">
                    <h4 className="mb-2 text-lg font-medium">
                        Vision & Mission
                    </h4>
                    <h2 className="mb-4 text-3xl leading-tight font-bold text-balance">
                        WE ARE LIKE SHOULDER SUPPORT FOR YOUR ELDERS
                    </h2>
                    <p className="font-light">
                        We provide you all the comforts including Health at Your
                        Doorstep
                    </p>
                </div>

                <div className="flex min-w-[300px] flex-1 gap-4">
                    <div className="bg-card text-card-foreground w-56 rounded-xl p-6 text-center shadow-md">
                        <Image
                            src="/images/about/vision.jpg"
                            alt="vision icon"
                            width={80}
                            height={80}
                            className="mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold">Vision</h3>
                        <p className="text-sm text-[#444]">
                            COMFORTABLE & PEACEFUL LIFE at their home - Even at
                            their terminal stage of life with our support
                        </p>
                    </div>

                    <div className="bg-card text-card-foreground w-56 rounded-xl p-6 text-center shadow-md">
                        <Image
                            src="/images/about/mission.jpg"
                            alt="mission icon"
                            width={80}
                            height={80}
                            className="mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold">Mission</h3>
                        <p className="text-sm text-[#444]">
                            To provide the best care to every Elderly Person
                            through a strong focus on service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-background flex flex-wrap items-stretch">
                <div className="bg-primary text-primary-foreground flex flex-1 flex-col justify-center rounded-tr-[40px] rounded-br-[40px] p-12">
                    <h4 className="mb-2 text-base">Why Choose Us</h4>
                    <h2 className="mb-4 text-2xl leading-tight font-bold">
                        Making The Best Impression On Your Old Age Is Our
                        Happiness
                    </h2>
                    <p className="prose text-primary-foreground/90 mb-6 font-light">
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
                <Button
                    asChild
                    className="inline-block font-semibold hover:opacity-90"
                >
                    <Link href="/team">Nurses & Doctors</Link>
                </Button>
            </section>

            <Footer />
        </div>
    );
}
