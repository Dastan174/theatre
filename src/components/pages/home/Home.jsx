import React from "react";
import "./home.css";
import Hero from "./hero/Hero";
import NavCards from "./navCards/NavCards";
import Ticket from "./ticket/Ticket";
import Events from "../events/Events";
import Theatre from "../theatre/Theatre";

const Home = () => {
  return (
    <div>
      <Hero />
      <NavCards />
      <Ticket />
      <Events />
      <Theatre />
    </div>
  );
};

export default Home;
