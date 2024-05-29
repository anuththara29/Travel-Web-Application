import React from 'react';
import './ServicesInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import thailandImage from '../../Images/thailand.jpg';
import singaporeImage from '../../Images/singapore.jpg';
import malaysiaImage from '../../Images/malaysia.jpg';
import dubaiImage from '../../Images/dubai.jpg';
import indiaImage from '../../Images/india.jpg';
import vietnamImage from '../../Images/vietnam.jpg';

function Services() {
    const services = [
        {
            title: "Thailand",
            image: thailandImage,
            description: "Explore the vibrant culture, stunning beaches, and delicious cuisine of Thailand. Perfect for a tropical getaway.",
            days: "4 Nights 5 Days",
            price: "LKR 240,000",
            offer:"Air ticket | 4N 5D hotel accommodation with BB | Visa | Dream world | Buffet dinner in the cruise | City temple tour "
        },
        {
            title: "Singapore",
            image: singaporeImage,
            description: "Discover the futuristic skyline, diverse neighborhoods, and world-class attractions of Singapore.",
            days: "3 Nights 4 Days",
            price: "LKR 135,000",
            offer: "Air ticket | 3N 4D hotel with BB | Universal studios full ticket | Garden by the Bay | City tour | All transfers "
        },
        {
            title: "Malaysia",
            image: malaysiaImage,
            description: "Experience the rich cultural heritage, beautiful islands, and bustling cities of Malaysia.",
            days: "3 Nights 4 Days",
            price: "LKR 169,000",
            offer:"Air Ticket | Up & down airport transfers | 3N 4D hotel accommodation with BB | Visa | Sunway lagoon | Genting Highland | City tour | Batu caves"
        },
        {
            title: "Dubai",
            image: dubaiImage,
            description: "Enjoy the luxurious lifestyle, incredible architecture, and adventurous desert activities in Dubai.",
            days: "4 Nights 5 Days",
            price: "LKR 275,000",
            offer:"Air ticket | 4N hotel daily breakfast | Visa | Burj Khalifa 124th floor tour | City tour | All transfers |Marina Dhow cruise with dinner"
        },
        {
            title: "India",
            image: indiaImage,
            description: "Immerse yourself in the vibrant colors, historical landmarks, and diverse traditions of India.",
            days: "11 Nights 12 Days",
            price: "LKR 225,000",
            offer: "Air ticket | Visa | 11N Hotel accommodation | Budhdhagaya | Taj mahal | City tour | Nepal visit with Visa"
        },
        {
            title: "Vietnam",
            image: vietnamImage,
            description: "Discover the breathtaking landscapes, rich history, and vibrant street life of Vietnam.",
            days: "5 Nights 6 Days",
            price: "LKR 245,000",
            offer: "Air ticket | 4N hotel | 1N on cruise in Halong tours & Sightseeing | Visa invitation | All transfers "
        }
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Destinations</h2>
            <div className="row">
                {services.map((service, index) => (
                    <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
                        <div className="card flex-fill">
                            <img src={service.image} className="card-img-top" alt={service.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                                <div className="mt-auto">
                                    <p className="card-text"><strong>Stay:</strong> {service.days}</p>
                                    <p className="card-text"><strong>Price:</strong> {service.price}</p>
                                </div>
                                <p className="card-offer"><strong>{service.offer}</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
