import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import FAQ from '../Faq/faq';

const ContactUs = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value;
    
        // Regular expression to validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if (!emailRegex.test(emailValue)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        // Send Email using EmailJS
        emailjs.sendForm(
            'service_bifrpdh',  // Replace with your Service ID
            'template_5b3c4rw', // Replace with your Template ID
            form.current,
            'QlxFzpco7bUoMyMUa'   // Replace with your Public Key
        ).then((result) => {
            alert('Message sent successfully!');
    
            // ✅ Clear form inputs after successful submission
            form.current.reset(); 
    
        }, (error) => {
            alert('Failed to send message. Please try again.');
        });
    };
    

    return (
        <div className='contact-page'>
            <div className="contact-section">
                <h1 className="contact-head">Contact Here!</h1>
                <div className="container">
                    {/* Contact Info Section */}
                    <div className="contactInfo"> 
                        <div>
                            <h2>Contact Info</h2>
                            <ul className="info">
                                <li>
                                    <span><FaMapMarkerAlt className='icon'/></span>
                                    <span>Shenoy Nagar, Chennai, Tamil Nadu, India</span>
                                </li>
                                <li>
                                    <span><FaEnvelope className='icon'/></span>
                                    <span><a href="mailto:info@atyaedu.com">info@atyaedu.com</a></span>
                                </li>
                                <li>
                                    <span><FaPhoneAlt className='icon'/></span>
                                    <span>+91 6300292491</span>
                                </li>
                            </ul>
                        </div>
                        {/* Social Media Icons Section */}
                        <ul className="sci">
                            <li><a href="https://www.facebook.com/"><FaFacebook className='icon'/></a></li>
                            <li><a href="https://www.instagram.com/atya_education"><FaInstagram className='icon'/></a></li>
                            <li><a href="https://twitter.com/atyaedu"><FaTwitter className='icon'/></a></li>
                            <li><a href="https://www.linkedin.com/company/atya-edu/"><FaLinkedin className='icon'/></a></li>
                        </ul>
                    </div>

                    {/* Contact Form Section */}
                    <div className="contactForm">
                    <form ref={form} className="formBox" onSubmit={handleSubmit}>
                            <div className="inputBox w50">
                                <input type="text" name="from_name" required />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="email" id="email" name="reply_to" required />
                                <span>Email Address</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" name="mobile" required />
                                <span>Mobile Number</span>
                            </div>
                            <div className="inputBox w100">
                                <textarea name="message" required></textarea>
                                <span>Write your message here...</span>
                            </div>
                            <div className="inputBox w100">
                                <input type="submit" value="Send" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <FAQ />
        </div>
    );
}

export default ContactUs;
