import React from 'react';
import './Places.css';
import malaysia from '../../Images/malaysia.jpg';
import singapore from '../../Images/singapore.jpg';
import thailand from '../../Images/thailand.jpg';
import { Link } from "react-router-dom";

function Places() {
  return (
    <div className='places'>
      <div className='place'>
        <img src={malaysia} alt='Malaysia'/>
        <Link className='caption' to='/services'>
            <p>Malaysia</p>
        </Link>
      </div>
      <div className='place'>
        <img src={singapore} alt='Singapore'/>
        <Link className='caption' to='/services'>
            <p>Singapore</p>
        </Link>
      </div>
      <div className='place'>
        <img src={thailand} alt='Thailand'/>
        <Link className='caption' to='/services'>
            <p>Thailand</p>
        </Link>
      </div>
    </div>
  )
}

export default Places
