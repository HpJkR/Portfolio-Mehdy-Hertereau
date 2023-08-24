import { Link } from "react-scroll";
import { useState } from "react";

function NavBarMobile () {
  const pdfUrl =
    "https://portfolio-mehdy-hertereau.vercel.app/download/CV-Mehdy-Hertereau.pdf";
  const [showLinks, setShowLinks] = useState(false);

  const handleLinkClick = () => {
    setShowLinks(false); // Ferme le menu lorsque l'utilisateur clique sur un lien
  };

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbarMobile ${showLinks ? "show-navMobile" : "hide-navMobile"}`}>
      <div className="navbar_CVMobile">
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          TÉLÉCHARGER LE CV
        </a>
      </div>
      <ul className="navbar_linksMobile">
        <li className="navbar_itemMobile slideInDown-1Mobile">
          <Link
            to="accueil"
            className="navbar_linkMobile"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            ACCUEIL
          </Link>
        </li>
        <span id="barre_droiteMobile">|</span>
        <li className="navbar_itemMobile slideInDown-2Mobile">
          <Link
            to="presentation"
            className="navbar_linkMobile"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            À PROPOS DE MOI
          </Link>
        </li>
        <span id="barre_droiteMobile">|</span>
        <li className="navbar_itemMobile slideInDown-3Mobile">
          <Link
            to="projets"
            className="navbar_linkMobile"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            PROJETS
          </Link>
        </li>
        <span id="barre_droiteMobile">|</span>
        <li className="navbar_itemMobile slideInDown-4Mobile">
          <Link
            to="contact"
            className="navbar_linkMobile"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <button className="navbar_burgerMobile" onClick={handleShowLinks}>
        <span className="burger-barMobile"></span>
      </button>
    </nav>
  );
}

export default NavBarMobile;