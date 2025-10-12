import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
export default function Services() {
    return (
        <div className="bg-background text-foreground">
            <section className="bg-foreground text-background py-16 text-center">
                <h1 className="text-4xl font-bold">Services</h1>
                <p className="mt-2">
                    <span className="text-primary">Home</span> / Services
                </p>
            </section>

            <main className="mx-auto max-w-6xl p-8 text-center">
                <h4 className="text-primary">Services</h4>
                <h2 className="mt-2 text-3xl font-bold">
                    You Are In Good Hands
                </h2>
                <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
                    It is a great idea to have collaboration with Vanaprastha to
                    take care of your loved one in our safe hands in your
                    absence
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
                        <Card
                            key={s.title}
                            className="rounded-lg shadow-md transition hover:translate-y-[-4px]"
                        >
                            <CardContent className="p-8 text-center">
                                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl">
                                    {s.icon}
                                </div>
                                <CardTitle className="mb-2 text-xl font-semibold">
                                    {s.title}
                                </CardTitle>
                                <CardDescription className="text-muted-foreground prose text-sm">
                                    {s.desc}
                                </CardDescription>
                            </CardContent>
                        </Card>
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
                        <div className="bg-primary text-primary-foreground absolute -bottom-5 left-5 max-w-[85%] rounded-md p-4 text-sm shadow-lg">
                            Positive Mission Of Helping Vulnerable Older Adults,
                            Cooperative Team Environment. Good Combination Of
                            Pay And Time Off
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-primary mb-2 font-medium">
                            Testimonial
                        </p>
                        <h2 className="mb-4 text-2xl">
                            What They Say About Us ?
                        </h2>
                        <div className="text-primary mb-4 text-xl">★★★★★</div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
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
                                <p className="text-muted-foreground text-sm">
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
