import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="navbar__item">
          <Link to={""} className="navItem__link" data-item="home">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={"/about"} className="navItem__link" data-item="about">
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={"/profile"} className="navItem__link" data-item="profile">
            Profile
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={"/contact"} className="navItem__link" data-item="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
