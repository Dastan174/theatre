import React from "react";
import "./ticket.css";
import image from "../../../../assets/theatre-mask.jpg";

const Ticket = () => {
  return (
    <section class="ticket-section">
      <div className="container">
        <div className="ticket">
          <div class="ticket-info">
            <h2>Онлайн Театр</h2>
            <h1>БИЛЕТЫ</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" class="more-info">
              Больше информации
            </a>
          </div>
          <div class="mask-image">
            <img src={image} alt="Theatre Masks" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
