import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import './contact.scss';
import Point from '../assets/img/point(2).png';


function Contact() {
  const form = useRef();
  const [isCompany, setIsCompany] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_52pg1c4", "template_hkqjstr", form.current, "UlQNtQDrm28XQyIqm").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <div className='titleProjets'>
        <h1>Contact</h1>
        <img src={Point} alt="point" />
      </div>
      <div className="containerContact">
        <form ref={form} onSubmit={sendEmail}>
        <div className="toggle-container">
            <label id="iAMtoggle">Je suis :</label>
            <label className={`toggle-label ${isCompany ? "active" : ""}`}>Particulier</label>
            
              
              <label className="switch">
              <input type="checkbox" onChange={() => setIsCompany(!isCompany)} />
              <span className="slider round"></span>
                </label>
            <label className={`toggle-label ${!isCompany ? "active" : ""}`}>Entreprise</label>
          </div>
          {isCompany && (
            <div className="company-field">
              <label>{"Nom de l'entreprise : "}</label>
              <input type="text" name="entreprise" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
          )}
          <label>Nom</label>
          <input type="text" name="nom" />
          <label>Prénom</label>
          <input type="text" name="prenom" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <button type="submit">ENVOYER</button>
        </form>
      </div>
      
    </>
  );
}

export default Contact;
