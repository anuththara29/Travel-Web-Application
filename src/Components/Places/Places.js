import React from 'react';
import './Places.css';
import malaysia from '../../Images/malaysia.jpg';
import singapore from '../../Images/singapore.jpg';
import thailand from '../../Images/thailand.jpg';

function Places() {
  return (
    <div className='places'>
      <div className='place'>
        <img src={malaysia} alt='Malaysia'/>
        <div className='caption'>
            <p>Malaysia</p>
        </div>
      </div>
      <div className='place'>
        <img src={singapore} alt='Singapore'/>
        <div className='caption'>
            <p>Singapore</p>
        </div>
      </div>
      <div className='place'>
        <img src={thailand} alt='Thailand'/>
        <div className='caption'>
            <p>Thailand</p>
        </div>
      </div>
    </div>
  )
}

export default Places
