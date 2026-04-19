import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenuFoldLine, RiMenuFold4Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">

      {/* ================= DESKTOP NAV ================= */}
      <nav className="nav desktop-nav">
        
        <div className="logo">
          <img src="logo.jpeg" alt="Logo" />
          <h3>Ogechi Promise</h3>
        </div>

        <ul className="desktop-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/catering">Catering</NavLink></li>
          <li><NavLink to="/pastries">Pastries</NavLink></li>
        </ul>

        <button className="btn">
          <Link to="/contact">Book Now</Link>
        </button>

      </nav>

      {/* ================= MOBILE NAV ================= */}
      <nav className="mobile-nav">

        <div className="mobile-top">
          <div className="logo">
            <img src="logo.jpeg" alt="Logo" />
            <h3>Ogechi Promise</h3>
          </div>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RiMenuFold4Line /> : <RiMenuFoldLine />}
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <ul>
              <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink></li>
              <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
              <li><NavLink to="/catering" onClick={() => setMenuOpen(false)}>Catering</NavLink></li>
              <li><NavLink to="/pastries" onClick={() => setMenuOpen(false)}>Pastries</NavLink></li>
            </ul>

            <button className="bttnn">
              <Link to="/contact">Book Now</Link>
            </button>
          </div>
        )}

      </nav>

    </div>
  );
};

export default Navbar;