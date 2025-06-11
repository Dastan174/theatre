import React from "react";
import "./allTheatre.css";
import TheatreCard from "../../../ui/theatreCard/TheatreCard";
import { theaters } from "../../../constants/common";

const AllTheatre = () => {
  return (
    <section id="all-theatre">
      <div className="container">
        <div className="all-theatre">
          {theaters.map((el, idx) => (
            <TheatreCard
              name={el.name}
              type={el.type}
              address={el.address}
              city={el.city}
              website={el.website}
              reverse={idx % 2 === 0 ? true : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTheatre;
