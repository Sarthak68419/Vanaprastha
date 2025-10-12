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
            <section className="bg-[#2f2f2f] text-white text-center py-16">
                <h1 className="text-4xl font-bold">Team</h1>
                <p className="mt-2">
                    <span className="text-[#f4a825]">Home</span> / Team
                </p>
            </section>

            <section className="text-center py-12">
                <p className="text-[#e7a548]">Nurses & Doctors</p>
                <h2 className="text-3xl font-bold mt-2">
                    Meet Our Lovely Nurses & Doctors
                </h2>
            </section>

            <section className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
                {members.map((m) => (
                    <div
                        key={m.name}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
                    >
                        <Image
                            src={m.src}
                            alt={m.name}
                            width={240}
                            height={240}
                            className="w-full h-[380px] object-cover"
                        />
                        <div className="bg-white p-4 -mt-6 mx-6 rounded-lg text-center shadow-md">
                            <h4 className="text-lg font-bold text-[#f7931e] mb-1">
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
