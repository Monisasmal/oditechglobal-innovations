import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/MS.png'


function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-container">
       
       <div className="logo">
          <img src={logo} alt="Oditech Logo" />
        </div>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <Link to="/admin">Admin</Link>
        </nav>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
