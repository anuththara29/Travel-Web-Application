import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "158a081d-97ac-43dd-b931-9b51379555ed");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Message Sent Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    

    return (
        <div className='contact'>
            <div className='left-column col-md-6'>
                <h3>Get in Touch</h3>
                <p>Reach out to us with any questions or inquiries by 
                    sending a message through our contact form.</p>
                <ul>
                    <li><i className="fa-solid fa-phone-volume"></i>+94 11 2345678</li>
                    <li><i className="fa-solid fa-envelope"></i>info@voyago.com</li>
                    <li><i className="fa-solid fa-location-dot"></i>123, Galle Road, Colombo, Sri Lanka</li>
                </ul>
            </div>
            <div className='right-column col-md-6'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile num' required/>
                    <label>Write your message here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='custom-btn-blue'>Send</button>
                </form>
                <span>{result}</span>
            </div>       
        </div>
    )
}

export default ContactInfo
