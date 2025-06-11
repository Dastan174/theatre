import React from "react";
import Home from "../components/pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Admin from "../admin/Admin";
import Actors from "../components/pages/actors/Actors";
import ActorDetail from "../components/pages/actorDetail/ActorDetail";
import AllEvents from "../components/pages/allEvents/AllEvents";
import EventDetail from "../components/pages/eventDetail/EventDetail";
import AllTheatre from "../components/pages/allTheatre/AllTheatre";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "/admin", element: <Admin /> },
    { link: "/actors", element: <Actors /> },
    { link: "/actor/:id", element: <ActorDetail /> },
    { link: "/all-events", element: <AllEvents /> },
    { link: "/event-detail/:id", element: <EventDetail /> },
    { link: "/all-theatre", element: <AllTheatre /> },
    { link: "/", element: "" },
  ];
  return (
    <Routes>
      {routes.map((el, idx) => (
        <Route path={el.link} element={el.element} key={idx} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
