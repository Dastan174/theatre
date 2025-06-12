import React from "react";
import "./theatreCard.css";

const TheatreCard = ({ name, city, address, type, website, reverse, image }) => {
  return (
    <div
      className={reverse ? "theatre-ui" : "theatre-phone"}
      style={{ flexDirection: reverse ? "row" : "row-reverse" }}
    >
      <div className="theatre-ui-text">
        <h3>{name}</h3>
        <p>{type}</p>
        <div className="line"></div>
        <p>{city}</p>
        <div className="line"></div>
        <p>{address}</p>
        <div className="line"></div>
        <a href={website}>{website ? "Сайтка шилтеме" : "Сайты жок"}</a>
      </div>
      <img src={image} alt="Alykul Osmonov" />
    </div>
  );
};

export default TheatreCard;
