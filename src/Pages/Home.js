import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Background from '../Components/Background/Background';
import Places from '../Components/Places/Places';
import Title from '../Components/Title/Title';
import Description from '../Components/Description/Description';
import Feedback from '../Components/Feedback/Feedback';
import Footer from '../Components/Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <Background/>
      <div className='container'>
        <Description/>
        <Title title='Popular Destinations'/>
        <Places/>
        <Title title='Customer Testimonials'/>
        <Feedback/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
