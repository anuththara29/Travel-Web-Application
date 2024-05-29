import React from 'react';
import NavbarOther from '../Components/Navbarother/NavbarOther';
import Footer from '../Components/Footer/Footer';
import AboutInfo from '../Components/AboutInfo/AboutInfo';

function About() {
    return (
        <div>
           <NavbarOther/>
           <div className='container'>
                <AboutInfo/>
            </div>
           <Footer/> 
        </div>
    )
}

export default About
