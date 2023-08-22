import Tel from "../assets/img/phone-call.png";
import Mail from "../assets/img/email.png";
import LinkedIn from "../assets/img/linkedin (1).png";
import GitH from "../assets/img/github (1).png";

function Footer() {
  return (
    <>
      <div className="footerContainer mobile">
        {/* Lien vers Telephone */}
        <a href="tel:+33609130346" target="_blank" rel="noopener noreferrer">
          <img src={Tel} alt="Appel téléphonique" />
        </a>

        {/* Lien vers l'adresse e-mail */}
        <a href="mailto:m.hertereau@gmail.com">
          <img src={Mail} alt="E-mail" />
        </a>

        {/* Texte du footer */}
        <span className="copyright1">Copyright © 2023 Mehdy Hertereau</span>

        {/* Lien vers LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mehdy-hertereau/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>

        {/* Lien vers GitHub */}
        <a
          href="https://github.com/HpJkR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitH} alt="GitHub" />
        </a>
      </div>
      <div className="containerCopyright2">
        {/* Texte du footer */}
        <span className="copyright2">Copyright © 2023 Mehdy Hertereau</span>
      </div>
    </>
  );
}

export default Footer;
