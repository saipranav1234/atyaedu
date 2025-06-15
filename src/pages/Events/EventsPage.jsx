import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./events.css";

// Import event images
import WebDev from "/images/webdev.png";
import IOT from "/images/IOT.png";
import MS from "/images/ms.png";
import AI from "/images/AI.png";
import graphicDesignWorkshopImg from "/images/gra.png";

const Events = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const navigate = useNavigate(); // Initialize navigation

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const eventsData = {
    Upcoming: [
      {
          id: 1,
          title: "SDLC Webinar",
          description: "SDLC is the foundation of how top companies build software effectively. It sharpens your skills for internships, projects, and future job roles. This webinar is a golden opportunity to learn what the industry truly values.",
          tags: ["soft skills", "communication skills"],
          start: "May 24,25",
          rating: 4.5,
          ratingsCount: 22045,
          image: "/images/sdlc.png",
        },
      {
        id: 2,
        title: "IOT Webinar",
        description: "Create smart systems with connected devices and sensors.",
        tags: ["Arduino", "IOT"],
        start: "May 30",
        rating: 4.5,
        ratingsCount: 45098,
        image: IOT,
      },
      {
        id: 3,
        title: "MS Office Workshop",
        description: "Boost productivity with Word, Excel, and PowerPoint.",
        tags: ["Office", "Excel", "Word"],
        start: "May 6",
        rating: 3.9,
        ratingsCount: 39088,
        image: MS,
      },
    ],
    Active: [
        {
          id: 4,
          title: "SDLC Webinar",
          description: "Learn to build intelligent systems with AI tools and techniques.",
          tags: ["soft skills", "communication skills"],
          start: "May 24, 25",
          rating: 4.5,
          ratingsCount: 22045,
          image: "/images/sdlc.png",
        },
      {
        id: 2,
        title: "IOT Webinar",
        description: "Create smart systems with connected devices and sensors.",
        tags: ["Arduino", "IOT"],
        start: "May 30",
        rating: 4.5,
        ratingsCount: 45098,
        image: IOT,
      },
    ],
    Completed: [
      {
        id: 1,
        title: "Web Development Workshop",
        description: "Build responsive websites and apps with modern tools.",
        tags: ["Frontend", "Web Design"],
        start: "May 5",
        rating: 4.0,
        ratingsCount: 40098,
        image: WebDev,
      },
      {
        id: 5,
        title: "Graphic Design Workshop",
        description: "Design stunning visuals for digital and print media.",
        tags: ["Graphic Design"],
        start: "April 20",
        rating: 4.8,
        ratingsCount: 15234,
        image: graphicDesignWorkshopImg,
      },
    ],
  };

  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();

  const handleEventClick = (eventTitle) => {
    navigate(`/events/${eventTitle}`); // Navigate to the EventDetail page
  };

  return (
    <div className="events-container">
      <div className="events-main">
        <div className="events-header">
          <h1>Events!</h1>
          <div className="events-tabs">
            {["Upcoming", "Active", "Completed"].map((tab) => (
              <span
                key={tab}
                className={activeTab === tab ? "active-tab" : ""}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
          <a href="#" className="see-all">
            See all
          </a>
        </div>

        <div className="events-list">
          {eventsData[activeTab].map((event) => (
            <div
              className="event-card"
              key={event.id}
              onClick={() => handleEventClick(event.title)} // Add click handler
            >
              <div
                className="event-card-left"
                style={{
                  backgroundImage: `url(${event.image})`,
                }}
              ></div>

              <div className="event-card-right">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <div className="tags">
                  {event.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div className="event-footer">
                  <span>Start: {event.start}</span>
                  <span>{event.rating} ⭐</span>
                  <span>{event.ratingsCount.toLocaleString()} ratings</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="events-sidebar">
        <div className="calendar">
          <h2>
            {currentMonth} {currentYear}
          </h2>
          <div className="calendar-days">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="calendar-dates">
            {[...Array(31)].map((_, i) => {
              const date = i + 1;
              return (
                <div key={i} className={date === currentDate ? "active-date" : ""}>
                  {date}
                </div>
              );
            })}
          </div>
        </div>

        <div className="schedule">
          <h2>Schedule</h2>
          <ul>
            <li>
              <span>24, 25</span> SDLC Webinar - 10:00-12:30
            </li>
            <li>
              <span>30</span> IOT Webinar - 10:00-12:30
            </li>
            {/* <li>
              <span>06</span> AI Works - 14:00-15:30
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Events;
