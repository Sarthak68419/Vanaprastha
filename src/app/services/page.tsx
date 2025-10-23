import React from 'react';
import Footer from '../../components/Footer';
import Testimonials from '@/components/Testimonials';
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import Breadcrumbs from '@/components/Breadcrumbs';
export default function Services() {
    return (
        <div className="bg-background text-foreground">
            <section className="bg-foreground text-background py-16 text-center">
                <h1 className="text-4xl font-bold">Services</h1>
                <div className="mt-2 flex justify-center">
                    <Breadcrumbs
                        invertColors
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Services' },
                        ]}
                    />
                </div>
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

            <Testimonials
                containerClass="p-16"
                innerClass="mx-auto flex max-w-4xl items-center gap-8"
            />

            <Footer />
        </div>
    );
}
