import React, { useState, useEffect } from 'react'; // ✅ FIXED: added useEffect
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './CourseDetailsPage.css';
import courseDetails from './CourseDetails';
import { supabase } from '../../../lib/supabaseClient';
import { useUser } from '@clerk/clerk-react';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = courseDetails[courseId];
  

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { user } = useUser();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    class: '',
    college: '',
    phone: '',
    city: '',
    skills: ''
  });

  const handleRegister = async () => {
    if (!user) return alert('You must be logged in.');

    // 1. Insert into workshop table
    const { data: workshopData, error: workshopError } = await supabase
      .from('workshops')
      .insert([
        {
          title: course.title,
          class: formData.class,
          college: formData.college,
          phone: formData.phone,
          place: formData.city,
          skills: formData.skills
        }
      ])
      .select()
      .single();

    if (workshopError) {
      return alert('Failed to create workshop: ' + workshopError.message);
    }

    // 2. Insert into registrations table
    const { error: regError } = await supabase.from('registrations').insert([
      {
        user_id: user.id,
        workshop_id: workshopData.id
      }
    ]);

    if (regError) {
      return alert('Failed to register: ' + regError.message);
    }

    alert('Successfully registered!');
    setShowForm(false);
  };

  if (!course) return <h1>Course Not Found</h1>;

  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchSupabaseUser = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('users') // ✅ Make sure this table name is correct
        .select('name, email')
        .eq('clerkid', user.id)
        .single();

      if (error) {
        console.error('Error fetching user info:', error.message);
      } else {
        setUserInfo({
          name: data.name,
          email: data.email
        });
      }
    };

    fetchSupabaseUser();
  }, [user]);

  return (
    <motion.div
      ref={ref}
      className="course-detail-page"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="course-header">
        <img className="course-image" src={course.image} alt={course.title} />
        <div className="course-info">
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Classes:</strong> {course.classes}</p>
          <p><strong>Certification:</strong> {course.certification}</p>
          <p><strong>Projects:</strong> {course.projects}</p>
        </div>
      </div>

      <div className="course-topics">
        <h2>Topics Covered</h2>
        <ul>
          {course.topics.map((topic, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {topic}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.button
  className="register-button"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={() => {
    if (!user) {
      window.location.href = '/login'; // 👈 Clerk default login route
    } else {
      setShowForm(true);
      document.body.style.overflow = 'hidden';
    }
  }}
  
>
  Register Now
</motion.button>


      {showForm && (
        <div className='full-form'> 
        <div className="popup-form">
          <h3>Register for {course.title}</h3>

                        <label>Name</label>
                        <input
                type="text"
                value={userInfo.name}
                placeholder="Loading name..."
                disabled
              />
              <label>Email</label>
              <input
                type="email"
                value={userInfo.email}
                placeholder="Loading email..."
                disabled
              />
          <label>Class</label>
          <input
            type="text"
            placeholder="Class"
            value={formData.class}
            onChange={(e) => setFormData({ ...formData, class: e.target.value })}
          />

          <label>College Name</label>
          <input
            type="text"
            placeholder="College Name"
            value={formData.college}
            onChange={(e) => setFormData({ ...formData, college: e.target.value })}
          />

          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <label>City</label>
          <input
            type="text"
            placeholder="City you live in"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <label>Skills</label>
          <input
            type="text"
            placeholder="Skills you want to learn"
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          />

          <div className="popup-buttons">
            <button
              onClick={async () => {
                await handleRegister();
                document.body.style.overflow = 'auto'; // Re-enable scroll after submission
              }}
            >
              Submit
            </button>
            
            <button
              onClick={() => {
                setShowForm(false);
                document.body.style.overflow = 'auto'; // Re-enable scroll on cancel
              }}
            >
              Cancel
            </button>
          </div>

        </div>
        </div>
      )}
    </motion.div>
  );
};

export default CourseDetailsPage;
