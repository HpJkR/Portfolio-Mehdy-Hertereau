import { Link } from 'react-scroll';
import { useState } from 'react';
import './navbar.scss';

function NavBar() {
    const pdfUrl = 'https://portfolio-mehdy-hertereau.vercel.app/download/CV-Mehdy-Hertereau.pdf';
    const [showLinks, setShowLinks] = useState(false);


    const handleLinkClick = () => {
        setShowLinks(false); // Ferme le menu lorsque l'utilisateur clique sur un lien
    };

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="navbar_CV"><a href={pdfUrl} target="_blank" rel="noopener noreferrer">TÉLÉCHARGER LE CV</a></div>
            <ul className="navbar_links">
                <li className="navbar_item slideInDown-1">
                    <Link to='accueil' className='navbar_link' smooth={true} duration={500} onClick={handleLinkClick}>ACCUEIL</Link>
                </li>
                <span id='barre_droite'>|</span>
                <li className="navbar_item slideInDown-2">
                    <Link to='presentation' className='navbar_link' smooth={true} duration={500} onClick={handleLinkClick}>À PROPOS DE MOI</Link>
                </li>
                <span id='barre_droite'>|</span>
                <li className="navbar_item slideInDown-3">
                    <Link to='projets' className='navbar_link' smooth={true} duration={500} onClick={handleLinkClick}>PROJETS</Link>   
                </li>
                <span id='barre_droite'>|</span>
                <li className="navbar_item slideInDown-4">
                    <Link to='contact' className='navbar_link' smooth={true} duration={500} onClick={handleLinkClick}>CONTACT</Link>
                </li>
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    );
}

export default NavBar;
