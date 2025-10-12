import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';

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
        <div className="bg-white text-[#2f2f2f]">
            <section className="bg-[#2f2f2f] py-16 text-center text-white">
                <h1 className="text-4xl font-bold">Team</h1>
                <p className="mt-2">
                    <span className="text-[#f4a825]">Home</span> / Team
                </p>
            </section>

            <section className="py-12 text-center">
                <p className="text-[#e7a548]">Nurses & Doctors</p>
                <h2 className="mt-2 text-3xl font-bold">
                    Meet Our Lovely Nurses & Doctors
                </h2>
            </section>

            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((m) => (
                    <div
                        key={m.name}
                        className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2"
                    >
                        <Image
                            src={m.src}
                            alt={m.name}
                            width={240}
                            height={240}
                            className="h-[380px] w-full object-cover"
                        />
                        <div className="mx-6 -mt-6 rounded-lg bg-white p-4 text-center shadow-md">
                            <h4 className="mb-1 text-lg font-bold text-[#f7931e]">
                                {m.name}
                            </h4>
                            <span className="text-sm text-[#555]">
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
