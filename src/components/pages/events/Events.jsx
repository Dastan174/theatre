import React from "react";
import "./events.css";
import { Link, useNavigate } from "react-router-dom";
import { upcomingEvents } from "../../../constants/common";

const Events = () => {
  const navigate = useNavigate();
  return (
    <section id="event">
      <div className="container">
        <div className="event">
          <div className="event-top">
            <h2>Боло турчу корсотуулор</h2>
            <div className="line"></div>
          </div>
          <div className="event-list">
            {upcomingEvents.slice(0, 4).map((el, idx) => (
              <div key={idx} className="card">
                <img
                  onClick={() => navigate(`/event-detail/${el.id}`)}
                  src="https://ticket.kg/images/items/img_karmensyuita1695365432.jpg"
                  alt=""
                />
                <h4>{el.name}</h4>
                <p>{el.date}</p>
              </div>
            ))}
          </div>
          <button onClick={() => navigate("/all-events")}>Баарын коруу</button>
        </div>
      </div>
    </section>
  );
};

export default Events;
