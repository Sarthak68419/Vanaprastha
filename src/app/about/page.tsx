import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../../styles/About.css";
import Footer from "../../components/Footer";

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
            <Image src="/images/about/vision.jpg" alt="vision icon" className="vm-icon" width={80} height={80} />
            <h3>Vision</h3>
            <p>
              COMFORTABLE & PEACEFUL LIFE at their home – Even at their terminal
              stage of life with our support
            </p>
          </div>

          <div className="vm-card">
            <Image src="/images/about/mission.jpg" alt="mission icon" className="vm-icon" width={80} height={80} />
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
