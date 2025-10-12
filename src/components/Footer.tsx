import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
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
        <p className="footer-copy">© 2025 Vanaprastha Care. All rights reserved.</p>
      </div>
    </footer>
  );
}
