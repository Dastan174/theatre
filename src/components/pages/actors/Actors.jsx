import React, { useEffect } from "react";
import "./actors.css";
import { useMain } from "../../../context/MainContext";
import { kyrgyzTheaterActors } from "../../../constants/api";
import { Link } from "react-router-dom";

const Actors = () => {
  // const { getActors, actors } = useMain();
  // useEffect(() => {
  //   getActors();
  // }, []);
  // console.log(actors);

  return (
    <section id="actors">
      <div className="container">
        <div className="actors">
          <h1>Известные личности</h1>
          <div className="actors-list">
            {kyrgyzTheaterActors.map((el, idx) => (
              <div key={idx} className="actor-card">
                <img
                  src={
                    el.image ||
                    "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                  }
                  alt=""
                />
                <div className="card-title">
                  <h4>{el.name}</h4>
                  <p>{el.description.slice(0, 40)}...</p>
                </div>
                <Link to={`/actor/${el.id}`}>
                  <button>Подробнее</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actors;
