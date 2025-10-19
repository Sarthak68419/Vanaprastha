import React from 'react';
import Head from 'next/head'; // ✅ Added for SEO
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import TeamSection from './components/TeamSection';
import Testimonials from '@/components/Testimonials';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Home() {
    return (
        <div className="bg-background text-foreground">
            {/* ✅ SEO HEAD SECTION */}
            <Head>
                <title>Vanaprastha Care - Compassionate Elderly Care Services</title>
                <meta
                    name="description"
                    content="Vanaprastha Care provides elderly care at home with empathy, dignity, and comfort. Flexible visits, 24/7 support, and personalized services."
                />
                <meta
                    name="keywords"
                    content="elderly care, home care for seniors, Vanaprastha Care, caregivers, senior services, flexible elderly support"
                />
                <link rel="canonical" href="https://vanaprasthcare.org/" />

                {/* Open Graph / Social Meta Tags */}
                <meta property="og:title" content="Vanaprastha Care - Compassionate Elderly Care Services" />
                <meta
                    property="og:description"
                    content="Vanaprastha Care provides elderly care at home with empathy, dignity, and comfort. Flexible visits, 24/7 support, and personalized services."
                />
                <meta property="og:image" content="https://vanaprasthcare.org/images/social-banner.png" />
                <meta property="og:url" content="https://vanaprasthcare.org/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vanaprastha Care - Compassionate Elderly Care Services" />
                <meta
                    name="twitter:description"
                    content="Vanaprastha Care provides elderly care at home with empathy, dignity, and comfort. Flexible visits, 24/7 support, and personalized services."
                />
                <meta name="twitter:image" content="https://vanaprasthcare.org/images/social-banner.png" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Hero Section */}
            <section className="bg-accent relative text-left">
                <Image
                    src="/images/home/hero.jpg"
                    alt="Caregiver and elderly"
                    className="h-[500px] w-full object-cover brightness-[0.7]"
                    width={1200}
                    height={700}
                />
                <div className="absolute top-1/4 left-5 max-w-lg text-white">
                    <h1 className="mb-4 text-4xl font-bold">
                        Making You Feel Special Is Not Our Goal But Our Identity
                    </h1>
                    <p className="mb-4">
                        Providing care that comes from the heart, every day.
                    </p>
                    <Button
                        asChild
                        className="inline-block text-base font-medium"
                    >
                        <Link href="/contact">Get Started</Link>
                    </Button>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary">
                            Flexible Time Visiting
                        </Badge>
                        <Badge variant="secondary">24/7 Support</Badge>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
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

            <WhyChooseUs />

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
                        Come and be a part of our New Family
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
                            <MapPin className="h-6 w-6" aria-hidden />
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
                            <Phone className="h-6 w-6" aria-hidden />
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
                            <Mail className="h-6 w-6" aria-hidden />
                        </div>
                        <div>
                            <h5 className="font-semibold">Our Email</h5>
                            <p className="text-sm">
                                ranikoppula.reddy.rk@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-card text-card-foreground rounded-lg p-8 shadow-lg">
                    <ContactForm />
                </div>
            </section>

            <Testimonials />

            <TeamSection />

            <Footer />
        </div>
    );
}
