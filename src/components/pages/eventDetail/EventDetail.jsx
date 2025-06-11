import React from "react";
import "./eventDetail.css";
import { upcomingEvents } from "../../../constants/common";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();
  const event = upcomingEvents.find((a) => a.id == id);
  return (
    <section id="event-detail">
      <div className="container">
        <div className="event-detail">
          <img
            src="https://sputnik.kg/img/104694/70/1046947057_0:0:1000:563_2072x0_60_0_0_d01046cdc06a0cfda4be882df64ea8b5.jpg"
            alt=""
          />
          <h2>Билет</h2>
          <div className="ticket">
            <div className="left-side">
              <div className="name">
                <h4>
                  Корсотуунун аты: <br /> <span>{event.name}</span>
                </h4>
              </div>
              <div className="line"></div>
              <div className="name">
                <h4>
                  Дареги: <br /> <span>{event.location}</span>
                </h4>
              </div>
            </div>
            <div className="line-tick"></div>
            <div className="right-side">
              <div className="name">
                <h4>
                  Баасы: <br /> <span>{event.price}</span>
                </h4>
              </div>
              <div className="line"></div>
              <div className="name">
                <h4>
                  Датасы: <br /> <span>{event.date}</span>
                </h4>
              </div>
              <div className="line"></div>
              <div className="name">
                <h4>
                  Так убактысы: <br />{" "}
                  <span>
                    {event.time === "-" ? "Тактала элек" : event.time}
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;
