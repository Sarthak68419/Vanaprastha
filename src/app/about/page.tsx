import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function About() {
    return (
        <div className="text-[#2f2f2f] bg-white">
            <section className="bg-[#2f2f2f] text-white text-center py-16">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-2">
                    <span className="text-[#f4a825]">Home</span> / About Us
                </p>
            </section>

            <section className="flex items-center p-6 max-w-6xl mx-auto gap-8">
                <div className="flex-1 overflow-hidden rounded-lg">
                    <Image
                        src="/images/home/welcome_collage.jpg"
                        alt="Caregiver"
                        width={800}
                        height={500}
                        className="block w-full h-[600px] object-cover object-[30%_center]"
                    />
                </div>
                <div className="flex-1 max-w-xl">
                    <span className="text-[#f9a825] text-lg font-medium">
                        Welcome To Vanaprastha
                    </span>
                    <h1 className="text-3xl font-bold text-[#333] leading-tight mt-2 mb-4">
                        Your Golden Age Is Made Till The End, Keep A Good Memory
                    </h1>
                    <p className="text-[#555] italic mb-2">
                        The best memories of our life can never be captured in
                        pictures, they are always captured by heart.
                    </p>
                    <p className="text-[#666] mb-6">
                        Your memory is the glue that binds your life together,
                        everything you are today is because of your amazing
                        memory.
                    </p>
                </div>
            </section>

            <section className="flex justify-around p-8 bg-white">
                <div className="bg-[#dedede] p-6 rounded-xl shadow-md text-center font-semibold">
                    500+ Happy Elders
                </div>
                <div className="bg-[#dedede] p-6 rounded-xl shadow-md text-center font-semibold">
                    50+ Caregivers
                </div>
                <div className="bg-[#dedede] p-6 rounded-xl shadow-md text-center font-semibold">
                    20+ Hospitals
                </div>
                <div className="bg-[#dedede] p-6 rounded-xl shadow-md text-center font-semibold">
                    35+ Medical Support
                </div>
            </section>

            <section className="vision-mission bg-[#f4b160] p-16 flex flex-wrap gap-8">
                <div className="flex-1 min-w-[280px] text-white">
                    <h4 className="text-lg font-medium mb-2">
                        Vision & Mission
                    </h4>
                    <h2 className="text-3xl font-bold leading-tight mb-4 text-balance">
                        WE ARE LIKE SHOULDER SUPPORT FOR YOUR ELDERS
                    </h2>
                    <p className="font-light">
                        We provide you all the comforts including Health at Your
                        Doorstep
                    </p>
                </div>

                <div className="flex-1 min-w-[300px] flex gap-4">
                    <div className="bg-white rounded-xl p-6 w-56 shadow-md text-center">
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

                    <div className="bg-white rounded-xl p-6 w-56 shadow-md text-center">
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
                <div className="flex-1 bg-[#e8b569] text-white p-12 rounded-tr-[40px] rounded-br-[40px] flex flex-col justify-center">
                    <h4 className="text-base mb-2">Why Choose Us</h4>
                    <h2 className="text-2xl font-bold mb-4 leading-tight">
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

                    <div className="flex items-start gap-4 mb-4">
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
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            <section className="text-center p-16 bg-[#f9f9f9]">
                <p className="text-[#e4a85f]">Our Lovely Team</p>
                <h2 className="text-2xl font-bold max-w-2xl mx-auto mt-2 mb-6">
                    The Qualified, Licensed, And Professional Nurses & Doctors
                    You Can Rely On
                </h2>
                <div className="max-w-4xl mx-auto mb-6">
                    <Image
                        src="/images/home/team.jpg"
                        alt="The Team"
                        width={900}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
                <Link
                    href="/team"
                    className="inline-block bg-[#fbb03b] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e09c2d]"
                >
                    Nurses & Doctors
                </Link>
            </section>

            <Footer />
        </div>
    );
}
