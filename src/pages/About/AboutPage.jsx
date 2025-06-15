import React from 'react';
import About from '../../components/About/About';
import './AboutPage.css';
import peopleData from './peopleData';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <div className="about-us-com">
      <About />
      </div>
    </div>
  );
};

export default AboutPage;
