import React, { useState } from 'react';
import './Navbar.css';
import React from 'react';


function Navbar() {
    // State to handle the toggle menu for mobile view
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        Software Developer
      </div>

      {/* Navigation Links */}
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger Menu Icon for Mobile View */}
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>} {/* X icon for closing, ☰ for opening */}
      </button>
    </nav>
  );
}

export default Navbar;