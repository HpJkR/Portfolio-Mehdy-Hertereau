import { useState, useEffect } from 'react';
import './projets2.scss';

import Point from '../assets/img/point(2).png';
import Guild from '../assets/img/guild.png'
import Osook from '../assets/img/osook.png';
import MonkeyShroom from '../assets/img/monkeyShroom.png';
import StarLove from '../assets/img/starLove.png';
import LeLabo from '../assets/img/leLabo.png';

function Projets() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 1400; // Définir un seuil de défilement
    const isScrolling = window.scrollY > scrollThreshold;
    setScrolling(isScrolling);
  };

  useEffect(() => {
    // Ajouter l'écouteur d'événement lors du montage du composant
    window.addEventListener('scroll', handleScroll);

    // Supprimer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <div className='containerProjets'>
      <div className='titleProjets'>
        <h1>Projets</h1>
        <img src={Point} alt="point" />
      </div>
      <div className='containerInsideProjets'>
      <div className={`cardGuild ${isGuildExpand ? 'cardExpand' : 'hiddenCard'} ${scrolling ? 'show1' : 'hidden1'}`} onClick={handleGuildClick}>
          <div>
            <img src={Guild} alt="logo Guild" />
          </div>
          {isGuildExpand ? (
            <div>
              <div>
                <p><strong>Sujet :</strong> Hackaton sur 24H<br /><strong>Objectifs :</strong> Apporter une techno qui n’existait pas dans un autre temps.<br /><strong>Projet :</strong> Application de type “Le bon coin” pendant l’Egypte antique.<br/>{"Création d'une application web mobile first à l'aide de Vite.js, Node.js, Sass couplé à une API REST conçue à l'aide d’Express"}</p>
              </div>
            </div>
          ) : ''}
      </div>
      <div className={`cardOsook ${isOsookExpand ? 'cardExpand' : 'hiddenCard'} ${scrolling ? 'show2' : 'hidden2'}`} onClick={handleOsookClick}>
          <div>
            <img src={Osook} alt="logo Osook" />
          </div>
          {isOsookExpand ? (
            <div>
              <div>
                <p><strong>Sujet :</strong> Hackaton sur 24H<br /><strong>Objectifs :</strong> Apporter une techno qui n’existait pas dans un autre temps.<br /><strong>Projet :</strong> Application de type “Le bon coin” pendant l’Egypte antique.<br/>{"Création d'une application web mobile first à l'aide de Vite.js, Node.js, Sass couplé à une API REST conçue à l'aide d’Express"}</p>
              </div>
            </div>
          ) : ''}
      </div>
      <div className={`cardMonkeyShroom ${isMonkeyShroomExpand ? 'cardExpand' : 'hiddenCard'} ${scrolling ? 'show1' : 'hidden1'}`} onClick={handleMonkeyShroomClick}>
          <div>
            <img src={MonkeyShroom} alt="logo Osook" />
          </div>
          {isMonkeyShroomExpand ? (
            <div>
              <div>
                <p><strong>Sujet :</strong> Hackaton sur 24H<br /><strong>Objectifs :</strong> Apporter une techno qui n’existait pas dans un autre temps.<br /><strong>Projet :</strong> Application de type “Le bon coin” pendant l’Egypte antique.<br/>{"Création d'une application web mobile first à l'aide de Vite.js, Node.js, Sass couplé à une API REST conçue à l'aide d’Express"}</p>
              </div>
            </div>
          ) : ''}
      </div>
      <div className={`cardStarLove ${isStarLoveExpand ? 'cardExpand' : 'hiddenCard'} ${scrolling ? 'show2' : 'hidden2'}`} onClick={handleStarLoveClick}>
          <div>
            <img src={StarLove} alt="logo Osook" />
          </div>
          {isStarLoveExpand ? (
            <div>
              <div>
                <p><strong>Sujet :</strong> Hackaton sur 24H<br /><strong>Objectifs :</strong> Apporter une techno qui n’existait pas dans un autre temps.<br /><strong>Projet :</strong> Application de type “Le bon coin” pendant l’Egypte antique.<br/>{"Création d'une application web mobile first à l'aide de Vite.js, Node.js, Sass couplé à une API REST conçue à l'aide d’Express"}</p>
              </div>
            </div>
          ) : ''}
      </div>
      <div className={`cardLeLabo ${isLeLaboExpand ? 'cardExpand' : 'hiddenCard'} ${scrolling ? 'show1' : 'hidden1'}`} onClick={handleLeLaboClick}>
          <div>
            <img src={LeLabo} alt="logo Osook" />
          </div>
          {isLeLaboExpand ? (
            <div>
              <div>
                <p><strong>Sujet :</strong> Hackaton sur 24H<br /><strong>Objectifs :</strong> Apporter une techno qui n’existait pas dans un autre temps.<br /><strong>Projet :</strong> Application de type “Le bon coin” pendant l’Egypte antique.<br/>{"Création d'une application web mobile first à l'aide de Vite.js, Node.js, Sass couplé à une API REST conçue à l'aide d’Express"}</p>
              </div>
            </div>
          ) : ''}
      </div>
      </div>
    </div>
  );
}

export default Projets;
