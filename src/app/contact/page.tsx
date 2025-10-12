import React from "react";
import Image from "next/image";
import "../../styles/Contact.css";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="contact-container">
      
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <h1>Contact</h1>
        <p>
          <span className="breadcrumb-home">Home</span> / Contact
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="contact-wrapper">
        {/* Left - Info */}
        <div className="contact-info">
          <h4 className="info-subtitle">Get In Touch</h4>
          <h2 className="info-title">Come & Be a Part Of Our New Family</h2>
          <p className="info-desc">
            Elderlycare is an umbrella term for a wide array of services intended to help 
            older people to live as comfortably and independently as possible.
          </p>

          <div className="info-block">
            <Image src="/images/home/clock.jpg" alt="work hours" width={48} height={48} />
            <div>
              <h4>Work Hours</h4>
              <p>
                Monday - Sunday <br />
                Open 24/7 Services on demand <br />
                (Normal: 9:00 AM to 5:00 PM)
              </p>
            </div>
          </div>

          <div className="info-block">
            <Image src="/images/home/location.jpg" alt="location" width={48} height={48} />
            <div>
              <h4>Our Location</h4>
              <p>
                KVR Hospital Premises, 3-5-118/4, 16 Shutter X Road, Opposite SYR Swimming Pool, <br />
                Hyderaguda, Attapur, Rajendranagar Mandal, <br />
                Hyderabad, Telangana 500048 India
              </p>
            </div>
          </div>

          <div className="info-block">
            <Image src="/images/whatsapp.jpg" alt="call" width={48} height={48} />
            <div>
              <h4>Call Now</h4>
              <p>Whatsapp: +91 9010647888<br />Phone: 04035837011</p>
              <p>Manager: Bindhu — +91 8142569565</p>
              <p>Marketing Manager: Srinivas Reddy — +91 7893133363</p>
            </div>
          </div>

          <div className="info-block">
            <Image src="/images/home/mail.jpg" alt="email" width={48} height={48} />
            <div>
              <h4>Our Email</h4>
              <p>ranikoppula.reddy.rk@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="contact-form-section">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First name here" />
              <input type="text" placeholder="Last name here" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Mobile number here" />
              <input type="email" placeholder="Add email" />
            </div>
            <input type="text" placeholder="Enter Area" />
            <input type="text" placeholder="How can we help you?" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit Now</button>
          </form>
        </div>
      </div>
      
      <Footer />

    </div>
  );
}
