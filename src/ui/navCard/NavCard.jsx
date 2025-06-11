import React from "react";
import "./navCard.css";

const NavCard = ({ title, image }) => {
  return (
    <div className="block">
      {image}
      <h4 className="title">{title}</h4>
    </div>
  );
};

export default NavCard;
