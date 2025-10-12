import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="text-[#333] bg-white">
            {/* Hero Section */}
            <section className="relative text-left bg-[#f8e8dc]">
                <Image
                    src="/images/home/hero.jpg"
                    alt="Caregiver and elderly"
                    className="w-full h-[500px] object-cover brightness-[0.7]"
                    width={1200}
                    height={700}
                />
                <div className="absolute top-1/5 left-5 max-w-lg text-white">
                    <h1 className="text-4xl font-bold mb-4">
                        Making You Feel Special Is Not Our Goal But Our Identity
                    </h1>
                    <p className="mb-4">
                        Providing care that comes from the heart, every day.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#ff944d] px-6 py-3 rounded-md text-white text-base font-medium"
                    >
                        Get Started
                    </Link>
                </div>
                <div className="absolute top-1/3 right-5 flex flex-col gap-4">
                    <div className="bg-[#ffa64d] p-4 rounded-lg text-white w-44 shadow-md">
                        <h4 className="font-semibold">
                            Flexible Time Visiting
                        </h4>
                    </div>
                    <div className="bg-[#ffa64d] p-4 rounded-lg text-white w-44 shadow-md">
                        <h4 className="font-semibold">24/7 Support</h4>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="flex items-center p-6 max-w-6xl mx-auto gap-8">
                <div className="flex-1 max-w-1/2 overflow-hidden rounded-lg">
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
                    <Link
                        href="/about"
                        className="inline-block bg-[#f9a825] text-white px-4 py-3 rounded-md font-medium hover:bg-[#f57f17]"
                    >
                        Read More
                    </Link>
                </div>
            </section>

            {/* Stats Section */}
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

            {/* Why Choose Us Section */}
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

            {/* Contact CTA Section */}
            <section className="bg-[#e8ab5f] text-white text-center py-16 px-6">
                <h2 className="text-2xl font-bold">
                    Contact Us Easily To Receive A Quote
                </h2>
                <p className="max-w-3xl mx-auto mt-4">
                    If you're looking for more information on any of our
                    services, have a general question about Elderly care, fill
                    out the contact information below and a member of our staff
                    will reach out to you. We look forward to hearing from you.
                </p>
            </section>

            {/* Contact / Form */}
            <section className="max-w-6xl mx-auto p-6 -mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                    <h3 className="text-xl font-bold">
                        Come & Be A Part Of Our New Family, Follow Your Dream
                    </h3>
                    <p className="mt-3 text-[#555]">
                        VANAPRASTHA is an umbrella term for a wide array of
                        services intended to help older people live as
                        comfortably and independently as possible.
                    </p>

                    <h4 className="mt-6 font-bold">Work Hours</h4>
                    <div className="mt-2">
                        <p>Monday - Sunday</p>
                        <div className="flex items-center gap-3 mt-2">
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
                        <div className="bg-[#f4a841] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                            <Image
                                src="/images/home/location.jpg"
                                alt="Location Icon"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div>
                            <h5 className="font-semibold">Our Location</h5>
                            <p className="text-sm text-[#555]">
                                KVR Hospital Premises 3-5-118/4,16 Shutter X
                                Road, Opposite SYR Swimming Pool, Hyderabad,
                                Attapur, Rajendranagar Mandal, Telangana 500048
                                India
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-4">
                        <div className="bg-[#f4a841] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
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
                        <div className="bg-[#f4a841] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
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

                <form className="bg-white rounded-lg p-8 shadow-lg flex flex-col gap-4">
                    <div className="flex gap-4">
                        <input
                            className="flex-1 p-3 border rounded-md"
                            type="text"
                            placeholder="First name here"
                        />
                        <input
                            className="flex-1 p-3 border rounded-md"
                            type="text"
                            placeholder="Last name here"
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            className="flex-1 p-3 border rounded-md"
                            type="tel"
                            placeholder="Mobile number here"
                        />
                        <input
                            className="flex-1 p-3 border rounded-md"
                            type="email"
                            placeholder="Add email"
                        />
                    </div>
                    <input
                        className="p-3 border rounded-md"
                        type="text"
                        placeholder="Enter Area"
                    />
                    <input
                        className="p-3 border rounded-md"
                        type="text"
                        placeholder="How can we help you?"
                    />
                    <textarea
                        className="p-3 border rounded-md min-h-[120px] resize-y"
                        placeholder="Your Message"
                    ></textarea>
                    <button
                        className="bg-[#f4a841] text-white font-bold px-4 py-3 rounded-md"
                        type="submit"
                    >
                        Submit Now
                    </button>
                </form>
            </section>

            {/* Testimonials Section */}
            <section className="p-16 flex justify-center">
                <div className="max-w-4xl flex gap-10 items-center">
                    <div className="relative flex-1">
                        <Image
                            src="/images/home/positivemission.jpg"
                            alt="Reviewer"
                            width={400}
                            height={250}
                            className="w-full rounded-lg"
                        />
                        <div className="absolute -bottom-5 left-5 bg-[#f5a623] text-white p-4 rounded-md max-w-[85%] shadow-lg text-sm">
                            Positive Mission Of Helping Vulnerable Older Adults,
                            Cooperative Team Environment. Good Combination Of
                            Pay And Time Off
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-[#f5a623] font-medium mb-2">
                            Testimonial
                        </p>
                        <h2 className="text-2xl mb-4">
                            What They Say About Us ?
                        </h2>
                        <div className="text-[#f5a623] text-xl mb-4">★★★★★</div>
                        <p className="text-[#666] leading-relaxed mb-6">
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
                                <p className="text-sm text-[#888]">
                                    Designation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
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
