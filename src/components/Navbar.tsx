import Link from "next/link";
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
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About Us</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/team" className="nav-link">Team</Link>
        <Link href="/gallery" className="nav-link">Gallery</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
