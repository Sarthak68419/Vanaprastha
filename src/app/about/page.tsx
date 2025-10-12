import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import AboutSection from '../../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TeamSection from '../components/TeamSection';

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

            <WhyChooseUs />
            <TeamSection />

            <Footer />
        </div>
    );
}
