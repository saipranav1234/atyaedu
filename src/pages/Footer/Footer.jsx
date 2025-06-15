import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../Footer/image.png'; // Ensure the image path is correct.

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="subscribe-section_">
                <h2>Get 15% off 1st premium <br/>class registration</h2>
                <div className="subscribe-input">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer-main">
                <div className="footer-section">
                    <img src={logo} alt="Kawruh Logo" className="footer-logoo" />
                    <h3>Atya Education</h3>
                    <p>Shenoy Nagar, Chennai, Tamil Nadu, India</p>
                    <p>+91 6300292491 ,  8885011917</p>
                    <p>info@atyaedu.com</p>
                </div>

                {/* ✅ Fixed Google Maps iframe */}
{/*                 <div className="map-container">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.8007431849924!2d79.98776367568146!3d14.438643781020133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3496846174b%3A0x1aedf8a56e16bf95!2sPort%20View%20Apartment!5e0!3m2!1sen!2sin!4v1739949683534!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        className="footer-map"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div> */}

                <div className="Linkss"> 
                    <div className="footer-links">
                        <h3>Links</h3>
                        <ul>
                            <li><Link className="footer-link" to="/">Home</Link></li>
                            <li><Link className="footer-link" to="/about">About Us</Link></li>
                            <li><Link className="footer-link" to="/courses">Courses</Link></li>
                            <li><Link className="footer-link" to="/events">Events</Link></li>
                            <li><Link className="footer-link" to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-media">
                        <h3>Media</h3>
                        <ul>
                            <a href="https://www.instagram.com/atya_education/" style={{ textDecoration: 'none' }}>
                                <li>Instagram</li>
                            </a>
                            <a href="https://www.linkedin.com/company/atya-edu/" style={{ textDecoration: 'none' }}>
                                <li>LinkedIn</li>
                            </a>
                        </ul>
                    </div>
                    <div className="footer-community">
                        <h3>Community</h3>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Help & Support</li>
                            <li>Investors</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright © 2025 ATYA Education All Rights Reserved</p>
                <ul>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Setting</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
