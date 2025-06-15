import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdMilitaryTech } from "react-icons/md";
import ai from "./pics/ai.jpeg";
import classes from "./pics/class.jpeg";
import tech from "./pics/tech.jpeg";
import workshop from "./pics/workshop.jpeg";
import sports from "./pics/sports.jpeg";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";



const Hero = () => {
  return (
    <motion.div
      className="hero"
      // initial={{ opacity: 0, y: 50 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ delay: 4, duration: 1 }}
    >
      {/* <UserButton/> */}

      
      {/* <RegisterButton/> */}
      {/* <div className="blush"></div> */}
      <motion.h1
        className="heading-h"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 1 }}
      >
        Atya Education
      </motion.h1>

      <motion.div
        className="heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.4, duration: 1 }}
      >
        Unlock Your Coding Potential,
        <br />
        Build Future-Ready Skills with Us!
      </motion.div>

      <motion.div
        className="para"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.6, duration: 1 }}
      >
        {/* Join a thriving community where aspiring developers transform ideas into reality. <br /> */}
        Learn Web development, AI, Soft skills and emerging technologies with expert
        guidance.
      </motion.div>

      <Link className="linkk" to="/courses">
        <motion.button
          className="hero-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.8, duration: 1 }}
        >
          Start Learning <FaArrowRight className="right-arrw" />
        </motion.button>
      </Link>

      <motion.p
        className="btn-para"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
      >
        <MdMilitaryTech className="medal" /> Begin Your Journey in Tech Today!
      </motion.p>

      <motion.div
        className="images"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.2, duration: 1 }}
      >
        {[ai, classes, tech, workshop, sports].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt=""
            className="hero-img"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.4 + index * 0.2, duration: 1 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hero;
