import React from "react";
import "./theatre.css";
import { theaters } from "../../../constants/common";
import { useNavigate } from "react-router-dom";

const Theatre = () => {
  const navigate = useNavigate();
  return (
    <section id="theatre">
      <div className="container">
        <div className="theatre">
          <div className="theatre-top">
            <h2>Кыргызстандагы театрлар</h2>
            <div className="line"></div>
          </div>
          <div className="theatre-list">
            {theaters.slice(0, 3).map((el, idx) => (
              <div key={idx} className="theatre-card">
                <img
                  src="https://www.baibol.kg/img/attraction_gallery/152413607520645.jpg"
                  alt=""
                />
                <div className="theatre-card-title">
                  <h3>{el.name}</h3>
                  <h4>{el.type}</h4>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => navigate("/all-theatre")}>
            Баардык театрлар
          </button>
        </div>
      </div>
    </section>
  );
};

export default Theatre;
