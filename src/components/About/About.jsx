import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image from './image.png';
import './About.css';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref} 
      className='about'
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className='about-h'
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        About Us
      </motion.h1>
      
      <div className="about-main">
        <motion.div 
          className="left"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h4>What We Offer</h4>
          <h1>Empowering Every Student, One Step at a Time.</h1>
          <p>
            At ATYA Edu, we believe education is more than just textbooks and exams—it’s about opportunity, growth, and empowerment. Born from a mission to uplift and guide students across all walks of life, ATYA Edu is a student-first initiative that bridges the gap between learning and real-world success.
          </p>
        </motion.div>
        
        <motion.div 
          className="right"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="top">
            <img src={image} alt="" />
          </div>
          <div className="down">
            <div className="top-box">
              <div className="box">
                <h2 className='num'>3+</h2>
                <p className='box-p'>years experience </p>
              </div>
              <div className="box">
                <h2 className='num'>50+</h2>
                <p className='box-p'>projects</p>
              </div>
            </div>
            <div className="down-box">
              <div className="box">
                <h2 className='num'>830+</h2>
                <p className='box-p'>positive reviews</p>
              </div>
              <div className="box">
                <h2 className='num'>1000+</h2>
                <p className='box-p'>Students</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;