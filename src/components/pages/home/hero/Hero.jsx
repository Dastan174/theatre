import React from "react";
import "./hero.css";
import image from "../../../../assets/hero-pic.jpg";
import NavCard from "../../../../ui/navCard/NavCard";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-text">
            <h1>Кыргыз Театрынын Тарыхы</h1>
            <p>
              Көчмөн элдин күүлүү тарыхы сахнада жанданды. 1926-жылы алгачкы
              драма театры ачылып, кыргыз маданияты жаңы багыт алды.
            </p>
            <div className="line"></div>
            <p>
              Сахнада эпостор, эл руху, замандын үнү жаңырып, Кыргыз театры
              улуттук аң-сезимдин күзгүсүнө айланды.
            </p>
            <div className="bio-btn">
              <button>Театрлар тизмеги</button>
            </div>
          </div>
          <img
            src="https://openosh.kg/wp-content/uploads/2025/02/27-%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B4%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D1%82%D0%B5%D0%B0%D1%82%D1%80-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-%D0%A1%D1%83%D0%BB%D1%82%D0%B0%D0%BD%D0%B0-%D0%98%D0%B1%D1%80%D0%B0%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0.001_4.jpg"
            alt="Alykul Osmonov"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
