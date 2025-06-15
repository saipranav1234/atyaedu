// src/components/CourseCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css';
import { IoTime } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${course.link}`);
  };

  return (
    <div className="coursespage-card" onClick={handleClick}>
      <img className='coursespage-img' src={course.img} alt="" />
      <div className="text-part-courses">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="courses-card-part">
        <p> <IoTime className='courses-time'/>{course.timePeriod}</p>
        <p> < FaCode className='courses-time'/> {course.numProjects} Projects</p>
      </div>
      
      <div className="courses-card-footer">
  {/* <p className="coursespage-price">{course.price}</p> */}
  <HiMiniArrowTopRightOnSquare className="courses-arrow" />
</div>


      </div>
      
    </div>
  );
};

export default CourseCard;
