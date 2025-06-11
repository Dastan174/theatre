import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import BurgerMenu from "../../../ui/burgerMenu/BurgerMenu";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header-content">
            <img
              className="british-museum"
              alt="museum"
              src="./image/free-icon-theater-214351.png"
            />
            <h3>
              Кыргызстандын
              <br />
              театрлары
            </h3>
          </div>
          <nav>
            <Link to="">
              <p>Тарых </p>
            </Link>
            <Link to="/actors">
              <p>Инсандар </p>
            </Link>
            <Link to="">
              <p>Театрлар </p>
            </Link>
            <Link to="">
              <p>Викторина </p>
            </Link>
          </nav>
          <BurgerMenu />
          <button className="join">Войти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
