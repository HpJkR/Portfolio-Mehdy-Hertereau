import { Link } from 'react-scroll';
import './navbar.scss';

function NavBar() {
    return (
    <nav className="menu-container">
  {/* <!-- burger menu --> */}
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>

  
  {/* <!-- menu items --> */}
  <div className="menu">
    <ul>
    </ul>
    <ul>
      <li><Link to='accueil' smooth={true} duration={500}>ACCUEIL</Link></li>
      <li><Link to='presentation' smooth={true} duration={500}>À PROPOS DE MOI</Link></li>
      <li><Link to='projets' smooth={true} duration={500}>PROJETS</Link></li>
      <li><Link to='contact' smooth={true} duration={500}>CONTACT</Link></li>
    </ul>
  </div>
</nav>
    );
}

export default NavBar;
