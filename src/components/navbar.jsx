import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function NavBar({ onNavbarClick }) {
  const pdfUrl =
    "https://mehdy-hertereau.fr/download/CV-Mehdy-Hertereau.pdf";
    const [showLinks, setShowLinks] = useState(false);
    const [hideNavItems, setHideNavItems] = useState(true);
  
    const handleScrollNav = () => {
      // Réinitialise l'état du menu lorsque l'utilisateur fait défiler
      setShowLinks(false);
      setHideNavItems(true);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScrollNav);
  
      return () => {
        window.removeEventListener("scroll", handleScrollNav);
      };
    }, []);
  
    const handleLinkClick = () => {
      // Réinitialise l'état du menu lorsque l'utilisateur clique sur un lien
      setShowLinks(false);
    };
  
    const handleHelloButtonClick = () => {
      setShowLinks(!showLinks);
      onNavbarClick();
      setHideNavItems((prevHideNavItems) => !prevHideNavItems);
    };
  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbarHeader">
        <div className="navbar_CV">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            TÉLÉCHARGER LE CV
          </a>
        </div>
        <div id="menuToggle" onClick={handleHelloButtonClick} >
          <input type="checkbox" />
          <span id="span1"className={showLinks ? " show-nav span1" : ""}></span>
          <span id="span2"className={showLinks ? "show-nav span2" : ""}></span>
          <span id="span3"className={showLinks ? "show-nav span3" : ""}></span>
        </div>
      </div>
      <ul className={`navbar_links ${hideNavItems ? "slide-out" : ""}`}>
        <li className="navbar_item slideInDown-1">
          <Link
            to="accueil"
            className="navbar_link"
            smooth={true}
            duration={500}
            onClick={handleHelloButtonClick}
          >
            ACCUEIL
          </Link>
        </li>
        <span id="barre_droite"></span>
        <li className="navbar_item slideInDown-2">
          <Link
            to="presentation"
            className="navbar_link"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            À PROPOS DE MOI
          </Link>
        </li>
        <span id="barre_droite"></span>
        <li className="navbar_item slideInDown-3">
          <Link
            to="projets"
            className="navbar_link"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            PROJETS
          </Link>
        </li>
        <span id="barre_droite"></span>
        <li className="navbar_item slideInDown-4">
          <Link
            to="contact"
            className="navbar_link"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
NavBar.propTypes = {
  onNavbarClick: PropTypes.func.isRequired,
};

export default NavBar;
