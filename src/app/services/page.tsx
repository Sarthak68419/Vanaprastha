import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../../styles/Services.css";

export default function Services() {
  return (
    <div className="services-container">

      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <h1>Services</h1>
        <p>
          <span className="breadcrumb-home">Home</span> / Services
        </p>
      </div>

      {/* Services Section */}
      <section className="services-section">
        <h4 className="services-subtitle">Services</h4>
        <h2 className="services-title">You Are In Good Hands</h2>
        <p className="services-description">
          It is a great idea to have collaboration with Vanaprastha to take care of your loved
          one (Parents) in our safe hands in your absence
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💊</div>
            <h3>Medical Checkup</h3>
            <p>
              We will arrange like: Monthly regular health check-ups like BP, Diabetes,
              Thyroid etc.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">❤️</div>
            <h3>Health Consultation</h3>
            <p>
              If patient requires any hospital visit, we will arrange appointments with
              your doctor at your convenient time, and we accompany & support as your son
              or daughter till back home.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">👩‍⚕️</div>
            <h3>Care Taker</h3>
            <p>
              If necessary, we arrange care takers for your loved one. In case of absence,
              we provide suitable replacements.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>House Services</h3>
            <p>
              We arrange medicines, groceries, and even celebrations of birthdays,
              anniversaries, and gatherings with photo & video updates.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">💳</div>
            <h3>Payments</h3>
            <p>
              We will arrange monthly bill payments like water, electricity, phone, and
              any banking requirements.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">⚰️</div>
            <h3>Funeral Services</h3>
            <p>
              If necessary, we provide end-to-end funeral services for the deceased person.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="testimonial-card">
            <div className="testimonial-image">
            <Image src="/images/home/positivemission.jpg" alt="Reviewer" width={400} height={250} />
            <div className="testimonial-tag">
              Positive Mission Of Helping Vulnerable Older Adults, Cooperative Team
              Environment. Good Combination Of Pay And Time Off
            </div>
          </div>
          <div className="testimonial-content">
            <p className="testimonial-label">Testimonial</p>
            <h2>What They Say About Us ?</h2>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              Without the help of Vanaprastha there is no way we could have gracefully
              navigated our way through the last couple of years. We thought we were
              prepared for the journey we were on, but in truth, we really had no idea
              of the many obstacles we were going to face.
            </p>
            <div className="reviewer-info">
              <Image
                src="/images/home/johndoe.jpg"
                alt="Reviewer"
                className="reviewer-photo"
                width={80}
                height={80}
              />
              <div>
                <p className="reviewer-name">John Doe</p>
                <p className="reviewer-role">Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* Logo */}
          <Image
            src="/images/navbar/logo.jpg"
            alt="Logo"
            className="footer-logo"
            width={120}
            height={60}
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
            <Image src="/images/facebook.jpg" alt="icon" width={32} height={32} />
            <Image src="/images/twitter.jpg" alt="icon" width={32} height={32} />
            <Image src="/images/youtube.jpg" alt="icon" width={32} height={32} />
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
