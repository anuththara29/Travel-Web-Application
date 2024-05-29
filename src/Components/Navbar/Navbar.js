import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../Images/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${sticky ? 'sticky' : ''}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <i className="fas fa-bars icon-white"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="btn custom-btn" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`side-nav ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleNavbar}>&times;</button>
        <Link className="navbar-brand side-logo" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" >Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-btn" to="/contact" onClick={toggleNavbar}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleNavbar}></div>
    </>
  );
}

export default Navbar;
