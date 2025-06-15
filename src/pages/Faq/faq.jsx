import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Import icons
import './faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What makes ATYA Edu different from other educational platforms?',
      answer: 'ATYA Edu offers unique features like personalized learning paths and a modern, intuitive interface.'
    },
    {
      question: 'How secure is my data on ATYA Edu?',
      answer: 'ATYA Edu uses advanced encryption and secure servers to protect your data and ensure privacy.'
    },
    {
      question: 'Can I customize my learning experience on ATYA Edu?',
      answer: 'Yes, you can personalize your learning journey by selecting courses, adjusting themes, and setting goals.'
    },
    {
      question: 'What collaborative features does ATYA Edu offer?',
      answer: 'ATYA Edu supports group discussions, peer reviews, and shared learning projects.'
    }    
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-left">
        <h2>FAQ</h2>
        <h1>Do you have any questions for us?</h1>
        <p>If there are questions you want to ask, we will answer all your questions.</p>
        <form className="faq-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="faq-input"
          />
          <button type="submit" className="faq-submit">Submit</button>
        </form>
      </div>

      <div className="faq-right">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <span>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />} {/* Icon side of the question */}
              </span>
              <p>{item.question}</p>
            </div>
            {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
