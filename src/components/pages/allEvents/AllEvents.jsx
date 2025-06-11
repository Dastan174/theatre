import React from "react";
import "./allEvents.css";
import { upcomingEvents } from "../../../constants/common";
import { useNavigate } from "react-router-dom";

const AllEvents = () => {
  const navigate = useNavigate();
  return (
    <section id="events">
      <div className="container">
        <div className="events">
          {upcomingEvents.map((el, idx) => (
            <div
              key={idx}
              className="card"
              onClick={() => navigate(`/event-detail/${el.id}`)}
              style={{
                backgroundImage:
                  "url('https://ticket.kg/images/items/img_karmensyuita1695365432.jpg')",
              }}
            >
              <div className="card-bg" />
              <h3>{el.time}</h3>
              <h4>{el.date}</h4>
              <h2>{el.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
