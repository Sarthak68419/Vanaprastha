import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function About() {
    return (
        <div className="bg-white text-[#2f2f2f]">
            <section className="bg-[#2f2f2f] py-16 text-center text-white">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-2">
                    <span className="text-[#f4a825]">Home</span> / About Us
                </p>
            </section>

            <section className="mx-auto flex max-w-6xl items-center gap-8 p-6">
                <div className="flex-1 overflow-hidden rounded-lg">
                    <Image
                        src="/images/home/welcome_collage.jpg"
                        alt="Caregiver"
                        width={800}
                        height={500}
                        className="block h-[600px] w-full object-cover object-[30%_center]"
                    />
                </div>
                <div className="max-w-xl flex-1">
                    <span className="text-lg font-medium text-[#f9a825]">
                        Welcome To Vanaprastha
                    </span>
                    <h1 className="mt-2 mb-4 text-3xl leading-tight font-bold text-[#333]">
                        Your Golden Age Is Made Till The End, Keep A Good Memory
                    </h1>
                    <p className="mb-2 text-[#555] italic">
                        The best memories of our life can never be captured in
                        pictures, they are always captured by heart.
                    </p>
                    <p className="mb-6 text-[#666]">
                        Your memory is the glue that binds your life together,
                        everything you are today is because of your amazing
                        memory.
                    </p>
                </div>
            </section>

            <section className="flex justify-around bg-white p-8">
                <div className="rounded-xl bg-[#dedede] p-6 text-center font-semibold shadow-md">
                    500+ Happy Elders
                </div>
                <div className="rounded-xl bg-[#dedede] p-6 text-center font-semibold shadow-md">
                    50+ Caregivers
                </div>
                <div className="rounded-xl bg-[#dedede] p-6 text-center font-semibold shadow-md">
                    20+ Hospitals
                </div>
                <div className="rounded-xl bg-[#dedede] p-6 text-center font-semibold shadow-md">
                    35+ Medical Support
                </div>
            </section>

            <section className="vision-mission flex flex-wrap gap-8 bg-[#f4b160] p-16">
                <div className="min-w-[280px] flex-1 text-white">
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
                    <div className="w-56 rounded-xl bg-white p-6 text-center shadow-md">
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

                    <div className="w-56 rounded-xl bg-white p-6 text-center shadow-md">
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
            <section className="flex flex-wrap items-stretch bg-white">
                <div className="flex flex-1 flex-col justify-center rounded-tr-[40px] rounded-br-[40px] bg-[#e8b569] p-12 text-white">
                    <h4 className="mb-2 text-base">Why Choose Us</h4>
                    <h2 className="mb-4 text-2xl leading-tight font-bold">
                        Making The Best Impression On Your Old Age Is Our
                        Happiness
                    </h2>
                    <p className="mb-6">
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

            <section className="bg-[#f9f9f9] p-16 text-center">
                <p className="text-[#e4a85f]">Our Lovely Team</p>
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
                    className="inline-block rounded-md bg-[#fbb03b] px-6 py-3 font-semibold text-white hover:bg-[#e09c2d]"
                >
                    Nurses & Doctors
                </Link>
            </section>

            <Footer />
        </div>
    );
}
