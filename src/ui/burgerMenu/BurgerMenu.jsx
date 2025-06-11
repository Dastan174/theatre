import { useState } from "react";
import "./burgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="burger-container">
      <div
        className={`burger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </div>

      {/* <nav className={`menu ${isOpen ? "show" : ""}`}>
        <a href="#">Главная</a>
        <a href="#">О нас</a>
        <a href="#">Услуги</a>
        <a href="#">Контакты</a>
      </nav> */}
    </div>
  );
};

export default BurgerMenu;
