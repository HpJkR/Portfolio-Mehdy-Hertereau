import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import './contact.scss';
import Point from '../assets/img/point(2).png';


function Contact() {
  const form = useRef();
  const [isCompany, setIsCompany] = useState(false);
  const [formData, setFormData] = useState({
    entreprise: "",
    nom: "",
    prenom: "",
    tel: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_REACT_APP_YOUR_SERVICE_ID;
    const templateID = import.meta.env.VITE_REACT_APP_YOUR_TEMPLATE_ID;
    const userID = import.meta.env.VITE_REACT_APP_YOUR_USER_ID;

    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      (result) => {
        console.log(result.text);
        setFormData({
          entreprise: "",
          nom: "",
          prenom: "",
          tel: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
              <input type="text" name="entreprise" value={formData.entreprise} onChange={handleInputChange}  />
            </div>
          )}
          <label>Nom & Prénom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleInputChange}
          />
          <label>Téléphone</label>
          <input
            type="tel"
            name="tel"
            value={formData.tel}
            pattern="[0]{1}[1-9]{1}[0-9]{8}"
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            pattern="[^@\s]+@[^@\s]+.[^@\s]+"
            onChange={handleInputChange}
          />
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit">ENVOYER</button>
        </form>
      </div>
      
    </>
  );
}

export default Contact;
