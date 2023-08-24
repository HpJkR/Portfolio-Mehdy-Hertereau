import { Element, Link as ScrollLink } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import "./App.scss";
import "./index.scss";

import CardsExperience from "./components/cardExperience";
import Carousel from "./components/carousel";
import Home from "./components/home";
import NavBar from "./components/navbar";
import NavBarMobile from "./components/navbarMobile";
import Presentation from "./components/presentation";
import Projets from "./components/projets2";
import Contact from "./components/contact";
import Footer from "./components/footer";

import Fleche from "./assets/img/fleche-vers-le-haut.png";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  const [isTop, setIsTop] = useState(true);

  const [isHomeShifted, setIsHomeShifted] = useState(false);

  const handleNavbarClick = () => {
    setIsHomeShifted(!isHomeShifted);
  };
  const resetIsHomeShifted = () => {
    setIsHomeShifted(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      resetIsHomeShifted();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="generalContainer">
        <div className="navbarGestion">
          {isMobile ? (
            <NavBarMobile />
          ) : (
            <NavBar onNavbarClick={handleNavbarClick} />
          )}
        </div>
        <main className="main">
          <Element name="accueil">
            <Home isShifted={isHomeShifted} className="home" />
          </Element>
          <Element name="presentation">
            <Presentation />
          </Element>
          <div className="cardsExperienceGestion">
            {isMobile ? <Carousel /> : <CardsExperience />}
          </div>
          <Element name="projets">
            <Projets />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
          <ScrollLink to="accueil" smooth={true} duration={500} id="scrollLink">
            <img
              id="imgScroll"
              className={isTop ? "rotateImage" : "rotateImage bounce"}
              src={Fleche}
              alt="scroll image"
            />
          </ScrollLink>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
