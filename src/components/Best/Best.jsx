import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Best.css';
import best from './best.jpeg';
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";

const Best = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref} 
      className="best-main"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="excellence"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Excellence
      </motion.h1>

      <div className='best'>
        <motion.div 
          className="best-left"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="best-h">This is why we are best from others</h1>
          <p className="best-p">
            We stand out by offering practical, expert-led classes, interactive workshops, and career-focused internships. Our focus on quality education, real-world skills, and accessibility ensures every learner achieves their goals effectively.
          </p>
          <img src={best} alt="" />
        </motion.div>

        <motion.div 
          className="best-right"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="best-top">
            <motion.div 
              className="best-box"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="teach-b">
                <FaChalkboardTeacher className='tch'/>
              </div>
              <h2 className='teach-h2'>Experienced Mentors</h2>
              <p>Learn from skilled professionals.</p>
            </motion.div>

            <motion.div 
              className="best-box"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="clock-b">
                <FaClock className='clck'/>
              </div>
              <h2 className='clcl-h2'>Flexible Learning</h2>
              <p>Study at your pace, anytime and anywhere.</p>
            </motion.div>
          </div>

          <div className="best-down">
            <motion.div 
              className="best-box"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="dollar-b">
                <AiFillDollarCircle />
              </div>
              <h2 className='dollar-h2'>Affordable Excellence</h2>
              <p>Quality education that fits your budget.</p>
            </motion.div>

            <motion.div 
              className="best-box"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <div className="trofy-b">
                <FaTrophy/>
              </div>
              <h2 className='trofy-h2'>Proven Success</h2>
              <p>Join a community with a record of achievements.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Best;
