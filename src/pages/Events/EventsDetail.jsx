import React from "react";
import { useParams } from "react-router-dom";
import "./eventsDetail.css"; // Ensure your styles are updated for better visuals

// Event data
const eventsData = {
  Upcoming: [
        {
          id: 2,
          title: "IOT Webinar",
          description: "Create smart systems with connected devices and sensors.",
          tags: ["Arduino", "IOT"],
          start: "May 30",
          rating: 4.5,
          ratingsCount: 45098,
          image: "/images/IOT.png",
        },
        {
          id: 4,
          title: "SDLC Webinar",
          description: "SDLC is the foundation of how top companies build software effectively. It sharpens your skills for internships, projects, and future job roles. This webinar is a golden opportunity to learn what the industry truly values.",
          tags: ["Soft skills", "communication skills"],
          start: "May 24,25",
          rating: 4.5,
          ratingsCount: 22045,
          image: "/images/sdlc.png",
        },
        {
          id: 3,
          title: "MS Office Workshop",
          description: "Boost productivity with Word, Excel, and PowerPoint.",
          tags: ["Office", "Excel", "Word"],
          start: "May 6",
          rating: 3.9,
          ratingsCount: 39088,
          image: "/images/ms.png",
        },
      ],
      Active: [
        {
          id: 4,
          title: "SDLC Webinar",
          description: "SDLC is the foundation of how top companies build software effectively. It sharpens your skills for internships, projects, and future job roles. This webinar is a golden opportunity to learn what the industry truly values.",
          tags: ["AI", "ML"],
          start: "May 24,25",
          rating: 4.5,
          ratingsCount: 22045,
          image: "/images/sdlc.png",
        },
      ],
      Completed: [
        {
          id: 5,
          title: "Graphic Design Workshop",
          description: "Design stunning visuals for digital and print media.",
          tags: ["Graphic Design"],
          start: "April 20",
          rating: 4.8,
          ratingsCount: 15234,
          image: "/images/gra.png",
        },
                {
          id: 1,
          title: "Web Development Workshop",
          description: "Build responsive websites and apps with modern tools.",
          tags: ["Frontend", "Web Design"],
          start: "May 5",
          rating: 4.0,
          end:"May 6",
          ratingsCount: 40098,
          image: "/images/webdev.png",
        },
      ],
};

const EventsDetail = () => {
  const { eventTitle } = useParams();
  const allEvents = [...eventsData.Upcoming, ...eventsData.Active];
  const event = allEvents.find((e) => e.title === eventTitle);

  if (!event) {
    return <div className="event-not-found">Event not found!</div>;
  }

  return (
    <div className="event-detail-container">
      {/* Event Banner */}
      <div
        className="event-detail-banner"
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Event Content */}
      <div className="event-detail-content">
        <h1 className="event-title">{event.title}</h1>
        <p className="event-description">{event.description}</p>

        {/* Tags */}
        <div className="tags">
          {event.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Event Information */}
        <div className="event-info">
          <p>
            <strong>Event Start:</strong> {event.start}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Instructor:</strong> {event.instructor}
          </p>
          <p>
            <strong>Rating:</strong> {event.rating} ⭐
          </p>
          <p>
            <strong>Ratings Count:</strong> {event.ratingsCount.toLocaleString()}
          </p>
          <p>
            <strong>Next Event Date:</strong> {event.end}
          </p>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <h3>Additional Information</h3>
          <p>{event.additionalInfo}</p>
        </div>

        {/* Register Button */}
        <a href="https://forms.gle/UU4FPXTcK2oTuad16" target="_blank"><button className="register-button">Register Now</button></a>
      </div>
    </div>
  );
};

export default EventsDetail;
