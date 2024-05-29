import React from 'react';
import NavbarOther from '../Components/Navbarother/NavbarOther';
import Footer from '../Components/Footer/Footer';
import ServicesInfo from '../Components/ServicesInfo/ServicesInfo';

function Services() {
    return (
        <div>
           <NavbarOther/>
           <div className='container'>
                <ServicesInfo/>
            </div>
           <Footer/> 
        </div>
    )
}

export default Services
