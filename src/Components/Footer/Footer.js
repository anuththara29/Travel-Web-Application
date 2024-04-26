import React from 'react';
import './Footer.css';
import phone from '../../Images/phone.png';
import email from '../../Images/email.png';
import location from '../../Images/address.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <h2>Quick Links</h2>

      </div>
      <div className='contact'>
        <h2>Contact Info</h2>
        <img src={location} alt='' />
        <p>
          Voyago<br/>123, Galle Road<br/>Colombo<br/>Sri Lanka
        </p>
        <img src={phone} alt='' />
        <p>+94 11 2345678</p>
        <img src={email} alt=''/>
        <p>info@voyago.com</p>
      </div>
      <div className='copyright'>
      <p>© 2024 Voyago. All rights reserved.</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
      </div>      
    </div>
  )
}

export default Footer
