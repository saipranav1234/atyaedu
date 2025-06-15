import React from 'react';
import './Courses.css';
import { FaPaintBrush, FaCode, FaBullhorn, FaLightbulb } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Courses = () => {
    const courses = [
        { title: "UI/UX Design", icon: <FaPaintBrush />, gradient: "linear-gradient(135deg, #ff5f6d, #ff7a5a)", path: "/courses/ui-ux" },
        { title: "Web Development", icon: <FaCode />, gradient: "linear-gradient(135deg, #8E2DE2, #4A00E0)", path: "/courses/mern" },
        { title: "Digital Marketing", icon: <FaBullhorn />, gradient: "linear-gradient(135deg, #00c6ff, #0072ff)", path: "/courses/digital-marketing" },
        { title: "IOT Development", icon: <FaLightbulb />, gradient: "linear-gradient(135deg, #f2994a, #f2c94c)", path: "/courses/iot" }
    ];

    return (
        <div className="courses-container">
            <h2>Browse Top Essential <br />Career Courses</h2>
            <div className="courses-grid">
                {courses.map((course, index) => (
                    <Link to={course.path} key={index} className="course-link">
                        <div className="course-card" style={{ background: course.gradient }}>
                            <div className="course-icon">{course.icon}</div>
                            <h3>{course.title}</h3>
                        </div>
                    </Link>
                ))}
                <div className="browse-all">
                    <Link to="/courses" className="course-link" >
                        <div className="circle-button">
                            <FiArrowRight className="arrow-icon" />
                        </div>
                        <p>Browse All</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;
