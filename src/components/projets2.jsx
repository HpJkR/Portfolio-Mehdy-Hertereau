import { useState, useEffect } from "react";

import Point from "../assets/img/point(2).png";
import Guild from "../assets/img/guild.png";
import Osook from "../assets/img/osook.png";
import MonkeyShroom from "../assets/img/monkeyShroom.png";
import StarLove from "../assets/img/starLove.png";
import LeLabo from "../assets/img/leLabo.png";

function Projets() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 1400; // Définir un seuil de défilement
    const isScrolling = window.scrollY > scrollThreshold;
    setScrolling(isScrolling);
  };

  useEffect(() => {
    // Ajouter l'écouteur d'événement lors du montage du composant
    window.addEventListener("scroll", handleScroll);

    // Supprimer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isGuildExpand, setIsGuildExpand] = useState(false);
  const [isOsookExpand, setIsOsookExpand] = useState(false);
  const [isMonkeyShroomExpand, setIsMonkeyShroomExpand] = useState(false);
  const [isStarLoveExpand, setIsStarLoveExpand] = useState(false);
  const [isLeLaboExpand, setIsLeLaboExpand] = useState(false);

  const handleGuildClick = () => {
    setIsGuildExpand(!isGuildExpand);
  };

  const handleOsookClick = () => {
    setIsOsookExpand(!isOsookExpand);
  };

  const handleMonkeyShroomClick = () => {
    setIsMonkeyShroomExpand(!isMonkeyShroomExpand);
  };

  const handleStarLoveClick = () => {
    setIsStarLoveExpand(!isStarLoveExpand);
  };

  const handleLeLaboClick = () => {
    setIsLeLaboExpand(!isLeLaboExpand);
  };

  return (
    <div className="containerProjets">
      <div className="titleProjets">
        <h1>Projets</h1>
        <img src={Point} alt="point" />
      </div>
      <div className="containerInsideProjets">
        <div
          className={`cardGuild ${
            isGuildExpand ? "cardExpand" : "hiddenCard"
          } ${scrolling ? "show1" : "hidden1"}`}
          onClick={handleGuildClick}
        >
          <div>
            <img src={Guild} alt="logo Guild" />
          </div>
          {isGuildExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Projet de groupe
                  <br />
                  <strong>Objectifs :</strong> Création d’une application web
                  pensée mobile first destinée aux rôlistes dans le but de
                  trouver une partie (8 semaines).
                  <br />
                  <strong>Technologies utilisées :</strong> React, SCSS, Figma,
                  MySQL, NodeJS, Express
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`cardOsook ${
            isOsookExpand ? "cardExpand" : "hiddenCard"
          } ${scrolling ? "show2" : "hidden2"}`}
          onClick={handleOsookClick}
        >
          <div>
            <img src={Osook} alt="logo Osook" />
          </div>
          {isOsookExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Hackaton sur 24H
                  <br />
                  <strong>Objectifs :</strong> Création d’une application type
                  «Le bon coin».
                  <br />
                  <strong>Technologies utilisées :</strong> React, SCSS, NodeJS,
                  Figma
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`cardMonkeyShroom ${
            isMonkeyShroomExpand ? "cardExpand" : "hiddenCard"
          } ${scrolling ? "show1" : "hidden1"}`}
          onClick={handleMonkeyShroomClick}
        >
          <div>
            <img src={MonkeyShroom} alt="logo Osook" />
          </div>
          {isMonkeyShroomExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Projet de groupe
                  <br />
                  <strong>Objectifs :</strong> Création d’un jeu de type «
                  runner » et d’un site dynamique (5 semaines).
                  <br />
                  <strong>Technologies utilisées :</strong> React, SCSS, Figma,
                  MySQL
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`cardStarLove ${
            isStarLoveExpand ? "cardExpand" : "hiddenCard"
          } ${scrolling ? "show2" : "hidden2"}`}
          onClick={handleStarLoveClick}
        >
          <div>
            <img src={StarLove} alt="logo Osook" />
          </div>
          {isStarLoveExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Hackaton sur 24H
                  <br />
                  <strong>Objectifs :</strong> Création d’une app de rencontre
                  sur l’univers de Star Wars.
                  <br />
                  <strong>Technologies utilisées :</strong> React, SCSS, Figma,
                  Vite, NodeJS
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`cardLeLabo ${
            isLeLaboExpand ? "cardExpand" : "hiddenCard"
          } ${scrolling ? "show1" : "hidden1"}`}
          onClick={handleLeLaboClick}
        >
          <div>
            <img src={LeLabo} alt="logo Osook" />
          </div>
          {isLeLaboExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Projet de groupe
                  <br />
                  <strong>Objectifs :</strong> Réalisation d’un site vitrine
                  d’une clinique (2 semaines).
                  <br />
                  <strong>Technologies utilisées :</strong> JavaScript, HTML,
                  CSS, Figma
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Projets;
