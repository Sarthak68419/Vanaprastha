import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src="/images/navbar/logo.jpg" alt="Vanaprastha Logo" className="logo_pic" />
      </div>

      {/* Nav Links */}
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/team" className="nav-link">Team</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
