import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function Contact() {
    return (
        <div className="text-[#2f2f2f] bg-white">
            <section className="bg-[#2f2f2f] text-white text-center py-16">
                <h1 className="text-4xl font-bold">Contact</h1>
                <p className="mt-2">
                    <span className="text-[#f4a825]">Home</span> / Contact
                </p>
            </section>

            <main className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-[#f4a825] font-bold">Get In Touch</h4>
                    <h2 className="text-3xl font-bold mt-2">
                        Come & Be a Part Of Our New Family
                    </h2>
                    <p className="text-[#666] mt-4">
                        Elderlycare is an umbrella term for a wide array of
                        services intended to help older people to live as
                        comfortably and independently as possible.
                    </p>

                    <div className="mt-6 flex items-start gap-4">
                        <Image
                            src="/images/home/clock.jpg"
                            alt="work hours"
                            width={48}
                            height={48}
                        />
                        <div>
                            <h4 className="font-semibold">Work Hours</h4>
                            <p className="text-sm">
                                Monday - Sunday
                                <br />
                                Open 24/7 Services on demand
                                <br />
                                (Normal: 9:00 AM to 5:00 PM)
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-4">
                        <Image
                            src="/images/home/location.jpg"
                            alt="location"
                            width={48}
                            height={48}
                        />
                        <div>
                            <h4 className="font-semibold">Our Location</h4>
                            <p className="text-sm">
                                KVR Hospital Premises, 3-5-118/4, 16 Shutter X
                                Road, Opposite SYR Swimming Pool, Hyderaguda,
                                Attapur, Rajendranagar Mandal, Hyderabad,
                                Telangana 500048 India
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-4">
                        <Image
                            src="/images/whatsapp.jpg"
                            alt="call"
                            width={48}
                            height={48}
                        />
                        <div>
                            <h4 className="font-semibold">Call Now</h4>
                            <p className="text-sm">
                                Whatsapp: +91 9010647888
                                <br />
                                Phone: 04035837011
                            </p>
                            <p className="text-sm">
                                Manager: Bindhu — +91 8142569565
                            </p>
                            <p className="text-sm">
                                Marketing Manager: Srinivas Reddy — +91
                                7893133363
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-4">
                        <Image
                            src="/images/home/mail.jpg"
                            alt="email"
                            width={48}
                            height={48}
                        />
                        <div>
                            <h4 className="font-semibold">Our Email</h4>
                            <p className="text-sm">
                                ranikoppula.reddy.rk@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <form className="flex flex-col gap-4 bg-white rounded-lg p-6 shadow-md">
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
                                type="text"
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
                            className="bg-[#f4a825] text-white font-bold px-4 py-3 rounded-md"
                            type="submit"
                        >
                            Submit Now
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}
