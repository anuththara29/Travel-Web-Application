import React from 'react';
import './Description.css';
import description from '../../Images/description.jpg';

function Description() {
  return (
    <div className='description'>
      <div className='description-left'>
        <img src={description} alt='' className='description-image'/>
      </div>
      <div className='description-right'>
        <h3>Why Choose Us?</h3>
        <p>At Voyago, we're dedicated to transforming your travels into unforgettable experiences. 
        With a personalized approach, expert guidance, and a commitment to safety, we ensure every journey with us is seamless and extraordinary. 
        Choose Voyago for your next adventure and let us redefine the way you explore the world.</p>
      </div>
    </div>
  )
}

export default Description
