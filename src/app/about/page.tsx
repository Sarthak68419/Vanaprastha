import React from "react";
import Link from "next/link";
import "../../styles/About.css";

export default function About() {
  return (
    <div className="about-container">

      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <h1>About Us</h1>
        <p>
          <span className="breadcrumb-home">Home</span> / About Us
        </p>
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-image">
          <img src="images/home/welcome_collage.jpg" alt="Caregiver" />
        </div>
        <div className="welcome-text">
          <span className="welcome-subtitle">Welcome To Vanaprastha</span>
          <h1>Your Golden Age Is Made Till The End, Keep A Good Memory</h1>
          <p className="welcome-quote">
            <em>
              The best memories of our life can never be captured in pictures,
              they are always captured by heart.
            </em>
          </p>
          <p className="welcome-description">
            Your memory is the glue that binds your life together, everything you
            are today is because of your amazing memory.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card">500+ Happy Elders</div>
        <div className="stat-card">50+ Caregivers</div>
        <div className="stat-card">20+ Hospitals</div>
        <div className="stat-card">35+ Medical Support</div>
      </div>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="vm-left">
          <h4 className="vm-subtitle">Vision & Mission</h4>
          <h2 className="vm-title">
            WE ARE LIKE YOUR <br /> SHOULDER SUPPORT FOR <br /> YOUR ELDERS
          </h2>
          <p className="vm-text">
            We provide you all the comforts including Health at Your Doorstep
          </p>
        </div>

        <div className="vm-right">
          <div className="vm-card">
            <img src="images/about/vision.jpg" alt="vision icon" className="vm-icon" />
            <h3>Vision</h3>
            <p>
              COMFORTABLE & PEACEFUL LIFE at their home – Even at their terminal
              stage of life with our support
            </p>
          </div>

          <div className="vm-card">
            <img src="images/about/mission.jpg" alt="mission icon" className="vm-icon" />
            <h3>Mission</h3>
            <p>
              To provide the best care to every Elderly Person through a strong
              focus on service.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="why-choose-text">
          <h4 className="section-subtitle">Why Choose Us</h4>
          <h2 className="section-title">
            Making The Best Impression On Your Old Age Is Our Happiness
          </h2>
          <p className="section-description">
            Everyone should strive to live the best life possible, and seniors have a unique opportunity to show others how to find happiness throughout the aging process. These seven tips are perfect for every senior who wants to live a happy life in old age.
          </p>
          <div className="why-feature">
            <img src="images/home/stick-images/money.jpg" alt="Reasonable Cost Icon" />
            <div>
              <h3>Reasonable Cost</h3>
              <p>We provide Eldercare services at very reasonable cost.</p>
            </div>
          </div>
          <div className="why-feature">
            <img src="images/home/stick-images/thumbsup.jpg" alt="Good Quality Services Icon" />
            <div>
              <h3>Good Quality Services</h3>
              <p>
                Seniors can join our centres for just a few days a week, and we can cater for ad-hoc and short-term flexible care arrangements where needed.
              </p>
            </div>
          </div>
        </div>
        <div className="why-choose-image">
          <img src="images/home/choose_us.jpg" alt="Caregivers" />
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <p className="team-subtitle">Our Lovely Team</p>
        <h2>
          The Qualified, Licensed, And Professional Nurses & Doctors You Can Rely On
        </h2>
        <div className="team-collage">
          <img src="/images/home/team.jpg" alt="The Team" />
        </div>
        <Link href="/team" className="btn">Nurses & Doctors</Link>
      </div>

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
