import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Best from '../../components/Best/Best';
import OurClients from '../Clients/OurClients';
import Approved from '../Approved/Approved';
import Courses from '../../components/Courses/Courses';
import ContactUs from '../Contact/ContactPage';
import PreLoader from '../../PreLoader/PreLoader';
import CourseCard from '../../components/CourseCard/CourseCard';

import './Home.css';
import './CoursesPage.css';

import webdev from './webdev.jpg';
import mern from './mern.avif';
import uiux from './uiux.png';
import app from './app.png';
import iot from './pics/iott.webp';
import ml from './pics/ml.jpg';

// Course data
const courses = [
  { id: 1, title: 'Web Development', category: 'webdev', description: 'Learn HTML, CSS, and JavaScript.', link: 'html-css', img: webdev, timePeriod: '3 months', price: '$200', numProjects: 5 },
  { id: 2, title: 'MERN Stack', category: 'webdev', description: 'Master MongoDB, Express, React, and Node.js.', link: 'mern', img: mern, timePeriod: '6 months', price: '$500', numProjects: 8 },
  { id: 3, title: 'UI/UX Design', category: 'design', description: 'Explore modern UI/UX principles.', link: 'ui-ux', img: uiux, timePeriod: '4 months', price: '$300', numProjects: 6 },
  { id: 4, title: 'App Development', category: 'appdev', description: 'Develop Android and iOS apps.', link: 'app-dev', img: app, timePeriod: '5 months', price: '$400', numProjects: 7 },
  { id: 5, title: 'Internet of Things (IoT)', category: 'iot', description: 'Learn to connect devices and create smart systems.', link: 'iot', img: iot, timePeriod: '4 months', price: '$350', numProjects: 5 },
  { id: 6, title: 'Machine Learning', category: 'ai', description: 'Dive into algorithms and data-driven decision making.', link: 'machine-learning', img: ml, timePeriod: '6 months', price: '$450', numProjects: 6 },
];

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className='home'>
      <PreLoader />
      <Hero />
      <About />
      <Best />
      <OurClients />

      <h1 className="home-course-head">Our Courses</h1>

      <motion.div 
        ref={ref}
        className="home-course-out"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="home-course">
          <div className="card-section home-crd">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <Link to={'/courses'} className='home-course-link'>
            Explore Courses <FaArrowRight className='home-fa'/>
          </Link>
        </div>
      </motion.div>

      <Approved />
      <Courses />
      <ContactUs />
    </div>
  );
};

export default Home;
