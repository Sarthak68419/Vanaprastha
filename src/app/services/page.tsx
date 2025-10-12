import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function Services() {
    return (
        <div className="bg-white text-[#333]">
            <section className="bg-[#2f2f2f] py-16 text-center text-white">
                <h1 className="text-4xl font-bold">Services</h1>
                <p className="mt-2">
                    <span className="text-[#f4a825]">Home</span> / Services
                </p>
            </section>

            <main className="mx-auto max-w-6xl p-8 text-center">
                <h4 className="text-[#f4a825]">Services</h4>
                <h2 className="mt-2 text-3xl font-bold">
                    You Are In Good Hands
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-[#666]">
                    It is a great idea to have collaboration with Vanaprastha to
                    take care of your loved one (Parents) in our safe hands in
                    your absence
                </p>

                <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: '💊',
                            title: 'Medical Checkup',
                            desc: 'We will arrange like: Monthly regular health check-ups like BP, Diabetes, Thyroid etc.',
                        },
                        {
                            icon: '❤️',
                            title: 'Health Consultation',
                            desc: 'If patient requires any hospital visit, we will arrange appointments with your doctor at your convenient time, and we accompany & support as your son or daughter till back home.',
                        },
                        {
                            icon: '👩‍⚕️',
                            title: 'Care Taker',
                            desc: 'If necessary, we arrange care takers for your loved one. In case of absence, we provide suitable replacements.',
                        },
                        {
                            icon: '🏠',
                            title: 'House Services',
                            desc: 'We arrange medicines, groceries, and even celebrations of birthdays, anniversaries, and gatherings with photo & video updates.',
                        },
                        {
                            icon: '💳',
                            title: 'Payments',
                            desc: 'We will arrange monthly bill payments like water, electricity, phone, and any banking requirements.',
                        },
                        {
                            icon: '⚰️',
                            title: 'Funeral Services',
                            desc: 'If necessary, we provide end-to-end funeral services for the deceased person.',
                        },
                    ].map((s) => (
                        <div
                            key={s.title}
                            className="rounded-lg bg-white p-8 shadow-md transition hover:translate-y-[-4px]"
                        >
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4a825] text-2xl text-white">
                                {s.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">
                                {s.title}
                            </h3>
                            <p className="text-sm text-[#666]">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </main>

            <section className="p-16">
                <div className="mx-auto flex max-w-4xl items-center gap-8">
                    <div className="relative flex-1">
                        <Image
                            src="/images/home/positivemission.jpg"
                            alt="Reviewer"
                            width={400}
                            height={250}
                            className="w-full rounded-lg"
                        />
                        <div className="absolute -bottom-5 left-5 max-w-[85%] rounded-md bg-[#f5a623] p-4 text-sm text-white shadow-lg">
                            Positive Mission Of Helping Vulnerable Older Adults,
                            Cooperative Team Environment. Good Combination Of
                            Pay And Time Off
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="mb-2 font-medium text-[#f5a623]">
                            Testimonial
                        </p>
                        <h2 className="mb-4 text-2xl">
                            What They Say About Us ?
                        </h2>
                        <div className="mb-4 text-xl text-[#f5a623]">★★★★★</div>
                        <p className="mb-6 leading-relaxed text-[#666]">
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

            <Footer />
        </div>
    );
}
