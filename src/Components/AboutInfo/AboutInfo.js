import React from 'react';
import about from '../../Images/about.jpg';
import './AboutInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutInfo() {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={about} alt='' className='about-image'/>
                    <div className='about-box custom-color p-4 mt-4'>
                        <h3 className='text-center'>Here's what makes us the best travel agent</h3>
                        <ul className='about-list'>
                            <li className='text-center'><i className="fa-regular fa-hand-point-right"></i>The best custom design tours</li>
                            <li className='text-center'><i className="fa-regular fa-hand-point-right"></i>Experienced travel consultants</li>
                            <li className='text-center'><i className="fa-regular fa-hand-point-right"></i>The lowest price guaranteed</li>
                            <li className='text-center'><i className="fa-regular fa-hand-point-right"></i>Great customer reviews</li>
                            <li className='text-center'><i className="fa-regular fa-hand-point-right"></i>24/7 customer care</li>
                            <li className='text-center'><i className="fa-regular fa-hand-point-right"></i>Secure payment options</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6'>
                    <p className='about-text'>Welcome to Voyago, your ultimate travel companion 
                    for exploring the world’s most captivating destinations. At Voyago, we 
                    believe that travel is more than just a journey—it’s an opportunity to create 
                    unforgettable memories, discover new cultures, and find adventure in every corner 
                    of the globe. Whether you're planning a relaxing beach vacation, an exciting city break, 
                    or an off-the-beaten-path expedition, Voyago is here to guide you every step of the way.</p>
                    <div className='row'>
                        <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <div className="check-point d-flex align-items-center mb-2">
                            <i className="fa-solid fa-circle-check"></i>No hidden charges
                            </div>
                            <div className="check-point d-flex align-items-center mb-2">
                            <i className="fa-solid fa-circle-check"></i>Transparent pricing guaranteed
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <div className="check-point d-flex align-items-center mb-2">
                            <i className="fa-solid fa-circle-check"></i>Clear and upfront costs
                            </div>
                            <div className="check-point d-flex align-items-center mb-2">
                            <i className="fa-solid fa-circle-check"></i>No surprise fees or extras
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo;
