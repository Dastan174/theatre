import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="logo">
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
          <div className="center-nav">
            <nav>
              <h4>Читателям</h4>
              <ul>
                <li>FAQ</li>
                <li>FAQ</li>
                <li>FAQ</li>
                <li>FAQ</li>
                <li>FAQ</li>
              </ul>
            </nav>
            <nav>
              <h4>Читателям</h4>
              <ul>
                <li>FAQ</li>
                <li>FAQ</li>
                <li>FAQ</li>
                <li>FAQ</li>
                <li>FAQ</li>
              </ul>
            </nav>
          </div>
          <nav>
            <h4>Байланышуу </h4>
            <div className="icons">
              <span>
                <ion-icon name="logo-instagram"></ion-icon>
              </span>
              <span>
                <ion-icon name="logo-youtube"></ion-icon>
              </span>
              <span>
                <ion-icon name="logo-twitter"></ion-icon>
              </span>
            </div>
            <p>user@gmail.com</p>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
