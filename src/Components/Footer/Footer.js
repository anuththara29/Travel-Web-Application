import React, { useEffect } from 'react';
import './Footer.css';
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the path changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-5 col-12 ft-1'>
            <h3>VOYAGO</h3>
            <p>Discover the world with Voyago, your trusted partner in unforgettable 
            travel experiences. From stunning destinations to extraordinary adventures, 
            we guide you every step of the way.</p>
            <div className='footer-icons'>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 col-12 ft-2'>
            <h5>Quick Links</h5>
            <ul>
              <li className="nav-item">
                <Link className="text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="text-white" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="text-white" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="text-white" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='col-md-6 col-lg-4 col-12 ft-3'>
            <h5>Contact Info</h5>
            <p><i className="fa-solid fa-phone-volume"></i>+94 11 2345678</p>
            <p><i className="fa-solid fa-envelope"></i>info@voyago.com</p>
            <p><i className="fa-solid fa-location-dot"></i>123, Galle Road, Colombo, Sri Lanka</p>
          </div>       
        </div>
        <div className='row copyright'>
          <div className='col-12 text-center'>
            <p>© 2024 Voyago. All rights reserved.</p>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <a href="#" className="text-white">Terms of Service</a>
              </li>
              <li className='list-inline-item'>|</li>
              <li className='list-inline-item'>
                <a href="#" className="text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>   
    </div>
  );
}

export default Footer;
