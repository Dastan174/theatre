import React from "react";
import "./navCards.css";
import NavCard from "../../../../ui/navCard/NavCard";
import Cast from "../../../../ui/navIcons/Cast";
import List from "../../../../ui/navIcons/List";
import Theatre from "../../../../ui/navIcons/Theatre";
import Time from "../../../../ui/navIcons/Time";
import { Link } from "react-router-dom";

const NavCards = () => {
  const navHero = [
    {
      title: "Белгилуу инсандар",
      href: "/actors",
      icon: <Cast />,
    },
    {
      title: "Регистрация",
      href: "/register",
      icon: <List />,
    },
    {
      title: "Кыргызстандагы театрлар",
      href: "/work-hours",
      icon: <Theatre />,
    },
    {
      title: "Хронология",
      href: "/services",
      icon: <Time />,
    },
  ];
  return (
    <section id="nav-cards">
      <div className="container">
        <div className="nav-cards">
          {navHero.map((el, idx) => (
            <Link to={el.href}>
              <NavCard title={el.title} image={el.icon} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavCards;
