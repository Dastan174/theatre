import React from "react";
import "./theatreCard.css";

const TheatreCard = ({ name, city, address, type, website, reverse }) => {
  return (
    <div
      style={{ flexDirection: reverse ? "row" : "row-reverse" }}
      className="theatre-ui"
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
      <img
        src="https://openosh.kg/wp-content/uploads/2025/02/27-%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B4%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D1%82%D0%B5%D0%B0%D1%82%D1%80-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-%D0%A1%D1%83%D0%BB%D1%82%D0%B0%D0%BD%D0%B0-%D0%98%D0%B1%D1%80%D0%B0%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0.001_4.jpg"
        alt="Alykul Osmonov"
      />
    </div>
  );
};

export default TheatreCard;
