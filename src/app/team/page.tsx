import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Team() {
    const members = [
        {
            src: '/images/team/team1.jpg',
            name: 'Rani Koppula',
            role: 'Doctor, Managing Director',
        },
        {
            src: '/images/team/Siri.jpg',
            name: 'Siri Vadlamudi',
            role: 'Manager',
        },
        {
            src: '/images/team/Sarthak.jpg',
            name: 'Sarthak Vadlamudi',
            role: 'Tech Lead',
        },
        {
            src: '/images/team/team2.jpg',
            name: 'Bindhu Reddy',
            role: 'Manager',
        },
        { src: '/images/team/team3.jpg', name: 'Vanaprastha', role: 'Team' },
    ];

    return (
        <div className="bg-background text-foreground">
            <section className="bg-foreground text-background py-16 text-center">
                <h1 className="text-4xl font-bold">Team</h1>
                <div className="mt-2 flex justify-center">
                    <Breadcrumbs
                        invertColors
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Team' },
                        ]}
                    />
                </div>
            </section>

            <section className="py-12 text-center">
                <p className="text-primary">Nurses & Doctors</p>
                <h2 className="mt-2 text-3xl font-bold">
                    Meet Our Lovely Nurses & Doctors
                </h2>
            </section>

            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((m) => (
                    <div
                        key={m.name}
                        className="bg-card text-card-foreground overflow-hidden rounded-2xl shadow-lg transition hover:-translate-y-2"
                    >
                        <Image
                            src={m.src}
                            alt={m.name}
                            width={240}
                            height={240}
                            className="h-[380px] w-full object-cover"
                        />
                        <div className="bg-card text-card-foreground mx-6 -mt-2 p-4 text-center">
                            <h4 className="text-primary mb-1 text-lg font-bold">
                                {m.name}
                            </h4>
                            <span className="text-muted-foreground text-sm">
                                {m.role}
                            </span>
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
}
