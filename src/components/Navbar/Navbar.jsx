import React, { useState, useEffect, useRef } from 'react';
import logo from './image.png';
import './Navbar.css';
import { FaAngleDown, FaAngleUp, FaHome, FaInfoCircle, FaBook, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { SignedIn , SignedOut } from '@clerk/clerk-react';
import { UserProfile } from '@clerk/clerk-react';
import { Authenticated, Unauthenticated } from 'convex/react';
import IsAdmin from '../../IsAdmin';


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  const mobileMenuRef = useRef(null); // Reference to the mobile menu
  const mobileMenuButtonRef = useRef(null); // Reference to the mobile menu button

  // Close the mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false); // Close menu if clicked outside
      }
    };

    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleCoursesDropdown = () => {
    setCoursesOpen(!coursesOpen);
  };

  const toggleEventsDropdown = () => {
    setEventsOpen(!eventsOpen);
  }; 

  return (
    <div className='whole-nav'>
      {/* Normal Navbar */}
      <div className="nav normal-navbar">
        <div className="logo-img">
          <a href="http://atyaedu.com" >
          <img className="logo" src={logo} alt="Logo" />
          </a>
           
        </div>
        <div className="links">
      <Link to="/" className="link">Home</Link>
      <Link to="/about" className="link">About</Link>
       

      <div 
        className="dropdown"
        onMouseEnter={() => setCoursesOpen(true)} 
        onMouseLeave={() => setCoursesOpen(false)}
      >
        <li  className="link no-underline">
          Courses <FaAngleDown className="down-arw" />
        </li>
        <div className={`dropdown-menu ${coursesOpen ? 'show' : ''}`}>
          <Link to="/courses" className="dropdown-link">All Courses</Link>
          <Link to="/courses/mern" className="dropdown-link">Full-Stack</Link>
          <Link to="/courses/iot" className="dropdown-link">IOT</Link>
          <Link to="/courses/digital-marketing" className="dropdown-link">Marketing</Link>
        </div>
      </div>

      <div 
        className="dropdown"
        onMouseEnter={() => setEventsOpen(true)} 
        onMouseLeave={() => setEventsOpen(false)}
      >
        <li  className="link no-underline">
          Events <FaAngleDown className="down-arw" />
        </li>
        <div className={`dropdown-menu ${eventsOpen ? 'show' : ''}`}>
          <Link to="/events" className="dropdown-link">All Events</Link>
          <Link to="/events/Web Development Workshop" className="dropdown-link">Web Dev Workshop</Link>
          <Link to="/events/IOT Workshop" className="dropdown-link">IOT Workshop</Link>
          
        </div>
      </div>

      {/* <Link to="/contact" className="link">Contact</Link> */}
      <a href="https://forms.gle/U2RuXUmiK3ruFNLA6" target="_blank" rel="noopener noreferrer" className='link aa' >Careers</a>
      <IsAdmin>
        <Link to="/admin/dashboard" className="link">Dashboard</Link>
      </IsAdmin>
    </div>

    
        <div className="button">
        <a href="http://cal.com/atyaedu" target='_blank'><button className="apply">Reach Out</button></a>
        <SignedIn>
        <UserButton className='user-button' />
        </SignedIn>
        <SignedOut>
        <Link to="/signup"><button className="contact">SignUp</button></Link>

        </SignedOut>
        
         {/* <Authenticated>
           HE is real
         </Authenticated> */}
       
           
          
        </div>
        
        
      </div>

      {/* Mobile Navbar */}
     {/* Mobile Navbar */}
<div className="mobile-navbar">
  <div className="mobile-header">
    <div className="mobile-logo">
      <a href="http://atyaedu.com"><img className="logo" src={logo} alt="Logo" /></a>
       
    </div>
    <button
      ref={mobileMenuButtonRef}
      className="mobile-menu-toggle"
      onClick={toggleMobileMenu}
    >
      {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  </div>
  <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} ref={mobileMenuRef}>
    <Link 
      to="/" 
      className="mobile-link" 
      onClick={() => setMobileMenuOpen(false)}
    >
      <FaHome /> Home
    </Link>
    <Link 
      to="/about" 
      className="mobile-link" 
      onClick={() => setMobileMenuOpen(false)}
    >
      <FaInfoCircle /> About
    </Link>

    <div className="mobile-dropdown">
      <button className="mobile-dropdown-toggle" onClick={toggleCoursesDropdown}>
        <FaBook /> Courses {coursesOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      <div className={`mobile-dropdown-menu ${coursesOpen ? 'show' : ''}`}>
        <Link 
          to="/courses" 
          className="mobile-dropdown-link" 
          onClick={() => setMobileMenuOpen(false)}
        >
          All Courses
        </Link>
        <Link 
          to="/courses/mern" 
          className="mobile-dropdown-link" 
          onClick={() => setMobileMenuOpen(false)}
        >
          Full-Stack
        </Link>
        <Link 
          to="/courses/iot" 
          className="mobile-dropdown-link" 
          onClick={() => setMobileMenuOpen(false)}
        >
          IOT
        </Link>
      </div>
    </div>

    <div className="mobile-dropdown">
      <button className="mobile-dropdown-toggle" onClick={toggleEventsDropdown}>
        <FaCalendarAlt /> Events {eventsOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      <div className={`mobile-dropdown-menu ${eventsOpen ? 'show' : ''}`}>
        <Link 
          to="/events" 
          className="mobile-dropdown-link" 
          onClick={() => setMobileMenuOpen(false)}
        >
          All Events
        </Link>
        <Link 
          to="/events/Web Development Workshop" 
          className="mobile-dropdown-link" 
          onClick={() => setMobileMenuOpen(false)}
        >
          Web Dev Workshop
        </Link>
        <Link 
          to="/events/IOT Workshop" 
          className="mobile-dropdown-link" 
          onClick={() => setMobileMenuOpen(false)}
        >
          IOT Workshop
        </Link>
      </div>
      <IsAdmin>
        <Link to="/admin/dashboard" className="mobile-link">Dashboard</Link>
      </IsAdmin>
    </div>

    <Link 
      to="/contact" 
      className="mobile-link" 
      onClick={() => setMobileMenuOpen(false)} 
    >
      <FaPhoneAlt /> Contact
    </Link>
      <a href="http://cal.com/atyaedu" target='_blank'><button className="apply">Reach Out</button></a>
      <br></br><br></br>
      <SignedIn  >
        <div className='user-button'>
        <UserButton />
        </div>
        </SignedIn>
        <SignedOut>
        <Link to="/signup"><button className="contact">SignUp</button></Link>

        </SignedOut>
    
  </div>
</div>
        
<div className="line-back">
        <div className="line"></div>
        </div>
    </div>
  );
};

export default Navbar;
 
