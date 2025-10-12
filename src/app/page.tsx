import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Home.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <Image
          src="/images/home/hero.jpg"
          alt="Caregiver and elderly"
          className="hero-image"
          width={1200}
          height={700}
        />
        <div className="hero-content">
          <h1>Making You Feel Special Is Not Our Goal But Our Identity</h1>
          <p className="cta-text">Providing care that comes from the heart, every day.</p>
          <Link href="/contact" className="cta-button">Get Started</Link>
        </div>
        <div className="hero-floating-box">
          <div className="orange-card">
            <h4>Flexible Time Visiting</h4>
          </div>
          <div className="orange-card">
            <h4>24/7 Support</h4>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-image">
          <Image src="/images/home/welcome_collage.jpg" alt="Caregiver" width={800} height={500} />
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
          <Link href="/about" className="welcome-btn">Read More</Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card">500+ Happy Elders</div>
        <div className="stat-card">50+ Caregivers</div>
        <div className="stat-card">20+ Hospitals</div>
        <div className="stat-card">35+ Medical Support</div>
      </div>

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
            <Image src="/images/home/stick-images/money.jpg" alt="Reasonable Cost Icon" width={48} height={48} />
            <div>
              <h3>Reasonable Cost</h3>
              <p>We provide Eldercare services at very reasonable cost.</p>
            </div>
          </div>
          <div className="why-feature">
            <Image src="/images/home/stick-images/thumbsup.jpg" alt="Good Quality Services Icon" width={48} height={48} />
            <div>
              <h3>Good Quality Services</h3>
              <p>
                Seniors can join our centres for just a few days a week, and we can cater for ad-hoc and short-term flexible care arrangements where needed.
              </p>
            </div>
          </div>
        </div>
        <div className="why-choose-image">
          <Image src="/images/home/choose_us.jpg" alt="Caregivers" width={600} height={400} />
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="contact-cta">
        <h2>Contact Us Easily To Receive A Quote</h2>
        <p>
          If you&apos;re looking for more information on any of our services, have a general
          question about Elderly care, fill out the contact information below and a member of our
          staff will reach out to you. We look forward to hearing from you.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Info Box */}
        <div className="contact-info-box">
          <h3>Come & Be A Part Of Our New Family, Follow Your Dream</h3>
          <p>
            VANAPRASTHA is an umbrella term for a wide array of services intended to
            help older people live as comfortably and independently as possible.
          </p>

          <h4>Work Hours</h4>
          <div className="work-hours">
            <p>Monday - Sunday</p>
              <div className="hours-inline">
              <Image src="/images/home/clock.jpg" alt="Clock Icon" width={40} height={40} />
              <span>Open 24/7 Services on demand</span>
              <small>(Normal: 9:00 AM to 5:00 PM)</small>
            </div>
          </div>

          <div className="contact-detail">
            <div className="icon-circle">
              <Image src="/images/home/location.jpg" alt="Location Icon" width={40} height={40} />
            </div>
            <div>
              <h5>Our Location</h5>
              <p>
                KVR Hospital Premises
                3-5-118/4,16 Shutter X Road, Opposite SYR Swimming Pool, Hyderabad,
                Attapur, Rajendranagar Mandal, Telangana 500048 India
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="icon-circle">
              <Image src="/images/whatsapp.jpg" alt="Phone Icon" width={40} height={40} />
            </div>
            <div>
              <h5>Call Now</h5>
              <p>Whatsapp No: +91 9010647888</p>
              <p>Phone No: 04035837011</p>
              <p>Manager:<br />Name: Bindhu - +91 8142569565</p>
              <p>Marketing Manager:<br />Name: Srinivas Reddy - +91 7893133363</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="icon-circle">
              <Image src="/images/home/mail.jpg" alt="Email Icon" width={40} height={40} />
            </div>
            <div>
              <h5>Our Email</h5>
              <p>ranikoppula.reddy.rk@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Form Box */}
        <form className="contact-form-box">
          <div className="form-row">
            <input type="text" placeholder="First name here" />
            <input type="text" placeholder="Last name here" />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Mobile number here" />
            <input type="email" placeholder="Add email" />
          </div>
          <input type="text" placeholder="Enter Area" />
          <input type="text" placeholder="How can we help you?" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit Now</button>
        </form>
      </div>

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

      {/* Team Section */}
      <div className="team-section">
        <p className="team-subtitle">Our Lovely Team</p>
        <h2>
          The Qualified, Licensed, And Professional Nurses & Doctors You Can Rely On
        </h2>
        <div className="team-collage">
          <Image src="/images/home/team.jpg" alt="The Team" width={900} height={400} />
        </div>
        <Link href="/team" className="btn">Nurses & Doctors</Link>
      </div>

      <Footer />
    </div>
  );
}