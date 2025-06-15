// src/pages/CoursesPage.jsx
import React, { useState } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import './CoursesPage.css'
import web from './web.png'
import js from './pics/js.png'
import webdev from './webdev.jpg'
import mern from './mern.avif'
import uiux from './uiux.png'
import app from './app.png'
import mar from './mar.png'
import iot from './pics/iott.webp'
import block from './pics/block.png'
import c from './pics/c.png'
import cc from './pics/cc.webp'
import cloud from './pics/cloud.jpeg'
import django from './pics/django.jpg'
import flut from './pics/flut.webp'
import java from './pics/java.png'
import ml from './pics/ml.jpg'
import node from './pics/node.png'
import react from './pics/react.png'
import py from './pics/python.png'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const courses = [
    { 
      id: 1, 
      title: 'Web Development', 
      category: 'webdev', 
      description: 'Learn HTML, CSS, and JavaScript.', 
      link: 'html-css', 
      img: webdev, 
      timePeriod: '3 months', 
      price: '$200', 
      numProjects: 5 
    },
    { 
      id: 2, 
      title: 'MERN Stack', 
      category: 'webdev', 
      description: 'Master MongoDB, Express, React, and Node.js.', 
      link: 'mern', 
      img: mern, 
      timePeriod: '6 months', 
      price: '$500', 
      numProjects: 8 
    },
    { 
      id: 3, 
      title: 'UI/UX Design', 
      category: 'design', 
      description: 'Explore modern UI/UX principles.', 
      link: 'ui-ux', 
      img: uiux, 
      timePeriod: '4 months', 
      price: '$300', 
      numProjects: 6 
    },
    { 
      id: 4, 
      title: 'App Development', 
      category: 'appdev', 
      description: 'Develop Android and iOS apps.', 
      link: 'app-dev', 
      img: app, 
      timePeriod: '5 months', 
      price: '$400', 
      numProjects: 7 
    },
    { 
      id: 5, 
      title: 'Internet of Things (IoT)', 
      category: 'iot', 
      description: 'Learn to connect devices and create smart systems.', 
      link: 'iot', 
      img: iot, 
      timePeriod: '4 months', 
      price: '$350', 
      numProjects: 5 
    },
    { 
      id: 6, 
      title: 'Machine Learning', 
      category: 'ai', 
      description: 'Dive into algorithms and data-driven decision making.', 
      link: 'machine-learning', 
      img: ml, 
      timePeriod: '6 months', 
      price: '$450', 
      numProjects: 6 
    },
    { 
      id: 7, 
      title: 'Digital Marketing', 
      category: 'marketing', 
      description: 'Grow your brand with marketing strategies.', 
      link: 'digital-marketing', 
      img: mar, 
      timePeriod: '2 months', 
      price: '$150', 
      numProjects: 3 
    },
    
    { 
      id: 8, 
      title: 'Python Programming', 
      category: 'programming', 
      description: 'Master Python from basics to advanced concepts.', 
      link: 'python-programming', 
      img: py, 
      timePeriod: '5 months', 
      price: '$300', 
      numProjects: 6 
    }
,    
    { 
      id: 9, 
      title: 'Cloud Computing', 
      category: 'cloud', 
      description: 'Master cloud platforms like AWS and Azure.', 
      link: 'cloud-computing', 
      img: cloud, 
      timePeriod: '4 months', 
      price: '$350', 
      numProjects: 4 
    },
    { 
      id: 10, 
      title: 'Blockchain Development', 
      category: 'blockchain', 
      description: 'Learn blockchain technology and smart contracts.', 
      link: 'blockchain', 
      img: block, 
      timePeriod: '6 months', 
      price: '$500', 
      numProjects: 5 
    },
    { 
      id: 11, 
      title: 'Java Programming', 
      category: 'programming', 
      description: 'Learn Java for software development and object-oriented programming.', 
      link: 'java', 
      img: java, 
      timePeriod: '3 months', 
      price: '$200', 
      numProjects: 3 
    },
    { 
      id: 12, 
      title: 'C Programming', 
      category: 'programming', 
      description: 'Master the fundamentals of C programming for system-level development.', 
      link: 'c-programming', 
      img: c, 
      timePeriod: '2 months', 
      price: '$150', 
      numProjects: 2 
    },
    { 
      id: 13, 
      title: 'C++ Programming', 
      category: 'programming', 
      description: 'Build advanced applications with object-oriented features in C++.', 
      link: 'cpp-programming', 
      img: cc, 
      timePeriod: '3 months', 
      price: '$200', 
      numProjects: 3 
    },
    { 
      id: 14, 
      title: 'JavaScript Fundamentals', 
      category: 'webdev', 
      description: 'Learn JavaScript to create dynamic, interactive websites.', 
      link: 'javascript', 
      img: js, 
      timePeriod: '2 months', 
      price: '$150', 
      numProjects: 4 
    },
    { 
      id: 15, 
      title: 'React.js Development', 
      category: 'frameworks', 
      description: 'Learn to build user interfaces using React.js.', 
      link: 'react', 
      img: react, 
      timePeriod: '3 months', 
      price: '$250', 
      numProjects: 5 
    },
    { 
      id: 16, 
      title: 'Node.js Development', 
      category: 'frameworks', 
      description: 'Learn backend development with Node.js and Express.js.', 
      link: 'node', 
      img: node, 
      timePeriod: '4 months', 
      price: '$300', 
      numProjects: 6 
    },
    { 
      id: 17, 
      title: 'Django Framework', 
      category: 'frameworks', 
      description: 'Master backend development using Python’s Django framework.', 
      link: 'django', 
      img: django, 
      timePeriod: '3 months', 
      price: '$250', 
      numProjects: 5 
    },
    { 
      id: 18, 
      title: 'Flutter App Development', 
      category: 'appdev', 
      description: 'Learn to build cross-platform mobile apps with Flutter.', 
      link: 'flutter', 
      img: flut, 
      timePeriod: '4 months', 
      price: '$300', 
      numProjects: 4 
    },
    
  ];
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'webdev', name: 'Web Development' },
    { id: 'appdev', name: 'App Development' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'iot', name: 'IoT (Internet of Things)' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'programming', name: 'Programming' }, // Updated to generalize for all programming courses
    { id: 'frameworks', name: 'Frameworks' }, // Added for framework-related courses
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'blockchain', name: 'Blockchain' },
  ];
  
  const CoursesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
  
    // Assign ref to the entire card section
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0,
    });
  
    const filteredCourses =
      selectedCategory === 'all'
        ? courses
        : courses.filter((course) => course.category === selectedCategory);
  
    return (
      <div className='courses-page'>
        <h1 className='courses-h1'>Our Courses</h1>
  
        {/* Dropdown */}
        <div className="drop-down-container">
          <label htmlFor="category" className="drop-down-label">Select Domain:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="drop-down"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
  
        {/* Card Section with Animation */}
        <motion.div
          ref={ref} // Assign ref here
          className='card-section'
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>
      </div>
    );
  };

export default CoursesPage;
