import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TeamSection from '@/components/TeamSection';
import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function About() {
    return (
        <div className="bg-background text-foreground">
            {/* SEO HEAD */}
            <Head>
                <title>About Us | Vanaprastha Care</title>
                <meta
                    name="description"
                    content="Learn about Vanaprastha Care's mission to provide compassionate and personalized elderly care at home. Our vision is to bring comfort, dignity, and peace to every senior we serve."
                />
                <meta
                    name="keywords"
                    content="about vanaprastha care, elderly care india, senior care, home health care, caregivers for elderly"
                />
                <link rel="canonical" href="https://vanaprasthcare.org/about" />
                <link rel="icon" href="/favicon.ico" /> {/* Add your favicon */}
                {/* Open Graph / Social Meta */}
                <meta
                    property="og:title"
                    content="About Us | Vanaprastha Care"
                />
                <meta
                    property="og:description"
                    content="Vanaprastha Care offers compassionate elderly care services at home, guided by empathy, dignity, and experience."
                />
                <meta
                    property="og:image"
                    content="https://vanaprasthcare.org/images/social-banner.png"
                />
                <meta
                    property="og:url"
                    content="https://vanaprasthcare.org/about"
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            {/* PAGE CONTENT */}
            <section className="bg-foreground text-background py-16 text-center">
                <h1 className="text-4xl font-bold">About Us</h1>
                <div className="mt-2 flex justify-center">
                    <Breadcrumbs
                        invertColors
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'About Us' },
                        ]}
                    />
                </div>
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
                    <Card className="w-56 text-center shadow-md">
                        <CardContent className="p-6">
                            <Image
                                src="/images/about/vision.jpg"
                                alt="Vision Icon"
                                width={80}
                                height={80}
                                className="mx-auto mb-4"
                            />
                            <CardTitle className="text-lg">Vision</CardTitle>
                            <CardDescription className="mt-2 text-sm text-[#444]">
                                COMFORTABLE & PEACEFUL LIFE at their home - Even
                                at their terminal stage of life with our support
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="w-56 text-center shadow-md">
                        <CardContent className="p-6">
                            <Image
                                src="/images/about/mission.jpg"
                                alt="Mission Icon"
                                width={80}
                                height={80}
                                className="mx-auto mb-4"
                            />
                            <CardTitle className="text-lg">Mission</CardTitle>
                            <CardDescription className="mt-2 text-sm text-[#444]">
                                To provide the best care to every Elderly Person
                                through a strong focus on service.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <WhyChooseUs />
            <TeamSection />
            <Footer />
        </div>
    );
}
