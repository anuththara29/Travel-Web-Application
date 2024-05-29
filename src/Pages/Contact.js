import React from 'react';
import Footer from '../Components/Footer/Footer';
import ContactInfo from '../Components/ContactInfo/ContactInfo';
import NavbarOther from '../Components/Navbarother/NavbarOther';

function Contact() {
    return (
        <div>
            <NavbarOther/>
            <div className='container'>
                <ContactInfo/>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
