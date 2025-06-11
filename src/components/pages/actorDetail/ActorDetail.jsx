import React from "react";
import "./actorDetail.css";
import { useParams } from "react-router-dom";
import { kyrgyzTheaterActors } from "../../../constants/api";

const ActorDetail = () => {
  const { id } = useParams();
  const actor = kyrgyzTheaterActors.find((a) => a.id == id);
  console.log(actor);

  return (
    <section id="detail">
      <div className="container">
        <div className="detail">
          <img src={actor.image} alt="" />
          <div className="detail-text">
            <h2>{actor.name}</h2>
            <div className="bio">
              <h4>Биография</h4>
              <p>
                Год рождение: <span>{actor.birthYear}г</span>
              </p>
              <p>{actor.description}</p>
            </div>
            <div className="active">
              <p>
                Годы деятельности: <span>{actor.activeYears}гг</span>
              </p>
              <h4>
                Театры в котором работал(-а): <br />{" "}
                <span>{actor.theater}</span>
              </h4>
              <h4>Награды: </h4>
              <ul>
                {actor.awards.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorDetail;
