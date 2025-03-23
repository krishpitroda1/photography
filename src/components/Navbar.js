import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import img from "../assets/logo.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo cursor-pointer" href="/Home"  >
<Link to="/">
<img src={img} alt="Logo" href=" " className="logo-img cursor-pointer" />

</Link>

        </div>

      {/* Menu for Large Screens */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#people">People</a></li>
        <li><a href="#jewellery">Jewellery</a></li>
        <li><a href="#products">Product</a></li>
        <li><a href="#ContactUs">Contact</a></li>
      </ul>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
