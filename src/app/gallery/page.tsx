import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../../styles/Gallery.css";

export default function Gallery() {
  const images = [
    "/images/gallery/gallery1.jpg",
    "/images/gallery/gallery2.jpg",
    "/images/gallery/gallery3.jpeg",
    "/images/gallery/gallery4.jpeg",
    "/images/gallery/gallery5.jpg",
    "/images/gallery/gallery6.jpg",
    "/images/gallery/gallery7.jpg",
    "/images/gallery/gallery8.jpg",
  ];

  return (
    <div className="gallery-container">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <h1>Gallery</h1>
        <p>
          <span className="breadcrumb-home">Home</span> / Gallery
        </p>
      </div>

      {/* Title */}
      <section className="gallery-hero">
        <h2>Gallery</h2>
        <h3>Feel the Happiness</h3>
      </section>

      {/* Image Grid */}
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div key={idx} className="gallery-item">
            <Image src={src} alt={`Gallery ${idx + 1}`} width={600} height={400} />
          </div>
        ))}
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
