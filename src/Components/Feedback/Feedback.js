import React, {useRef} from 'react';
import './Feedback.css';
import next from '../../Images/forward-btn.png';
import back from '../../Images/backward-btn.png';
import profile1 from '../../Images/profile1.jpg';
import profile2 from '../../Images/profile2.jpg';
import profile3 from '../../Images/profile3.jpg';
import profile4 from '../../Images/profile4.jpg';

function Feedback() {
  const slider = useRef();
  let tx=0;

  const slideForward=()=>{
    if(tx>-50){
        tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward=()=>{
    if(tx<0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  return (
    <div className='feedback'>
      <img src={back} alt='' className='backward-btn' onClick={slideBackward}/>
      <img src={next} alt='' className='foreward-btn' onClick={slideForward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={profile1} alt=''/>
                        <div>
                            <h3>Nadeesha Silva</h3>
                            <p>Singapore Explorer</p>
                        </div>
                    </div>
                    <p>Voyago made my trip to Singapore an absolute delight! From the futuristic skyline of Marina Bay 
                    Sands to the vibrant culture of Chinatown, every moment was unforgettable. 
                    The personalized recommendations for local cuisine and hidden gems truly enhanced my experience. 
                    Thank you, Voyago, for an incredible journey!</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={profile2} alt=''/>
                        <div>
                            <h3>Dilhani Perera</h3>
                            <p>Thai Escape</p>
                        </div>
                    </div>
                    <p>Exploring Thailand with Voyago was a dream come true! From the bustling markets of Bangkok to 
                    the tranquil beaches of Phuket, every moment was filled with excitement and wonder. 
                    Voyago's seamless logistics and insider tips allowed me to experience the best of Thai culture and hospitality. 
                    I can't wait to return!</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={profile3} alt=''/>
                        <div>
                            <h3>Chaminda Rajapaksa</h3>
                            <p>Malaysian Adventure</p>
                        </div>
                    </div>
                    <p>My family's adventure in Malaysia was made possible by Voyago's expert planning and attention to 
                    detail. From the stunning natural beauty of Langkawi to the bustling streets of Kuala Lumpur, 
                    every destination exceeded our expectations. Voyago's knowledge of family-friendly activities and 
                    local culture made our Malaysian getaway truly special.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={profile4} alt=''/>
                        <div>
                            <h3>Kavindi Fernando</h3>
                            <p>Luxurious Dubai</p>
                        </div>
                    </div>
                    <p>Voyago transformed my trip to Dubai into a luxurious escape beyond compare. From the opulent 
                    architecture of the Burj Khalifa to the desert adventures in the Arabian sands, every experience was 
                    tailored to perfection. Voyago's attention to detail and commitment to luxury made my journey to 
                    Dubai truly unforgettable.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Feedback
