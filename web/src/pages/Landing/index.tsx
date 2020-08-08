import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import teachIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";
import api from "../../services/api";
import "./styles.css";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      setTotalConnections(response.data.total || 0);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos on-line.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos on-line"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/teach" className="teach">
            <img src={teachIcon} alt="Ensinar" />
            Ensinar
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections}{" "}
          {totalConnections == 1
            ? "conexão já realizada"
            : "conexões já realizadas"}
          <img src={purpleHeart} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
