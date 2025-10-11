import React from "react";
import Link from "next/link";
import "../../styles/Team.css";

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
          <img src="images/team/team1.jpg" alt="Rani Koppula" />
          <div className="team-info">
            <h4>Rani Koppula</h4>
            <span>Doctor, Managing Director</span>
          </div>
        </div>

        <div className="team-card">
          <img src="images/team/Siri.jpg" alt="Siri Vadlamudi" />
          <div className="team-info">
            <h4>Siri Vadlamudi</h4>
            <span>Manager</span>
          </div>
        </div>

        <div className="team-card">
          <img src="images/team/Sarthak.jpg" alt="Sarthak Vadlamudi" />
          <div className="team-info">
            <h4>Sarthak Vadlamudi</h4>
            <span>Tech Lead</span>
          </div>
        </div>

        <div className="team-card">
          <img src="images/team/team2.jpg" alt="Bindhu Reddy" />
          <div className="team-info">
            <h4>Bindhu Reddy</h4>
            <span>Manager</span>
          </div>
        </div>

        <div className="team-card">
          <img src="images/team/team3.jpg" alt="Vanaprastha Team" />
          <div className="team-info">
            <h4>Vanaprastha</h4>
            <span>Team</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* Logo */}
          <img
            src="/images/navbar/logo.jpg"
            alt="Logo"
            className="footer-logo"
          />

          {/* Nav Links */}
          <ul className="footer-nav">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Social Icons */}
          <div className="footer-icons">
            <img src="/images/facebook.jpg" alt="icon" />
            <img src="/images/twitter.jpg" alt="icon" />
            <img src="/images/youtube.jpg" alt="icon" />
          </div>

          <hr />

          {/* Copyright */}
          <p className="footer-copy">
            © 2025 Vanaprastha Care. All rights reserved. 
          </p>
        </div>
      </footer>

    </div>
  );
}
