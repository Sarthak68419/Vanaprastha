import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function Contact() {
    return (
        <div className="bg-background text-foreground">
            <section className="bg-foreground text-background py-16 text-center">
                <h1 className="text-4xl font-bold">Contact</h1>
                <p className="mt-2">
                    <span className="text-primary">Home</span> / Contact
                </p>
            </section>

            <main className="mx-auto grid max-w-6xl grid-cols-1 gap-8 p-8 md:grid-cols-2">
                <div>
                    <div className="prose prose-neutral max-w-none">
                        <h4 className="text-primary font-bold">Get In Touch</h4>
                        <h2 className="mt-2 text-3xl font-bold">
                            Come & Be a Part Of Our New Family
                        </h2>
                        <p className="mt-4">
                            Elderlycare is an umbrella term for a wide array of
                            services intended to help older people to live as
                            comfortably and independently as possible.
                        </p>
                    </div>

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
                    <form className="bg-card text-card-foreground flex flex-col gap-4 rounded-lg p-6 shadow-md">
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
                                type="text"
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
                </div>
            </main>

            <Footer />
        </div>
    );
}
