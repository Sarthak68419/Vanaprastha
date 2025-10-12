import React from 'react';
import Image from 'next/image';
import '../../styles/Team.css';
import Footer from '../../components/Footer';

export default function Team() {
    return (
        <div className="team-container">
            {/* Breadcrumb */}
            <div className="breadcrumb-section">
                <h1>Team</h1>
                <p>
                    <span className="breadcrumb-home">Home</span> / Team
                </p>
            </div>

            {/* Page Header */}
            <section className="team-hero">
                <p className="team-subtitle">Nurses & Doctors</p>
                <h2 className="team-title">Meet Our Lovely Nurses & Doctors</h2>
            </section>

            {/* Team Members */}
            <section className="team-list">
                <div className="team-card">
                    <Image
                        src="/images/team/team1.jpg"
                        alt="Rani Koppula"
                        width={240}
                        height={240}
                    />
                    <div className="team-info">
                        <h4>Rani Koppula</h4>
                        <span>Doctor, Managing Director</span>
                    </div>
                </div>

                <div className="team-card">
                    <Image
                        src="/images/team/Siri.jpg"
                        alt="Siri Vadlamudi"
                        width={240}
                        height={240}
                    />
                    <div className="team-info">
                        <h4>Siri Vadlamudi</h4>
                        <span>Manager</span>
                    </div>
                </div>

                <div className="team-card">
                    <Image
                        src="/images/team/Sarthak.jpg"
                        alt="Sarthak Vadlamudi"
                        width={240}
                        height={240}
                    />
                    <div className="team-info">
                        <h4>Sarthak Vadlamudi</h4>
                        <span>Tech Lead</span>
                    </div>
                </div>

                <div className="team-card">
                    <Image
                        src="/images/team/team2.jpg"
                        alt="Bindhu Reddy"
                        width={240}
                        height={240}
                    />
                    <div className="team-info">
                        <h4>Bindhu Reddy</h4>
                        <span>Manager</span>
                    </div>
                </div>

                <div className="team-card">
                    <Image
                        src="/images/team/team3.jpg"
                        alt="Vanaprastha Team"
                        width={240}
                        height={240}
                    />
                    <div className="team-info">
                        <h4>Vanaprastha</h4>
                        <span>Team</span>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
