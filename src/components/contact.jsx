import { useRef, useState } from "react";
import Swal from "sweetalert2";

import emailjs from "emailjs-com";

import Point from "../assets/img/point(2).png";

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
        showSuccessAlert();
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

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Succès!",
      text: "Votre e-mail a été envoyé avec succès.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="ContainerMajorContactPage">
      <div className="titleProjets">
        <h1>Contact</h1>
        <img src={Point} alt="point" />
      </div>
      <div className="containerContact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="toggle-container">
            <label id="iAMtoggle">Je suis :</label>
            <label className={`toggle-label ${isCompany ? "active" : ""}`}>
              Particulier
            </label>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setIsCompany(!isCompany)}
              />
              <span className="slider round"></span>
            </label>
            <label className={`toggle-label ${!isCompany ? "active" : ""}`}>
              Entreprise
            </label>
          </div>
          {isCompany && (
            <div className="company-field">
              <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Nom de l'entreprise"
                name="entreprise"
                id="name"
                required
                value={formData.entreprise}
                onChange={handleInputChange}
              />
              <label htmlFor="name" className="form__label">{"Nom de l'entreprise"}</label>
              </div>
            </div>
          )}
          <div className="form__group field">
            <input
              type="text"
              className="form__field"
              placeholder="Name"
              name="nom"
              id="name"
              required
              value={formData.nom}
              onChange={handleInputChange}
            />
            <label htmlFor="name" className="form__label">
              Nom & Prénom
            </label>
          </div>

          <div className="form__group field">
            <input
              type="tel"
              className="form__field"
              placeholder="Téléphone"
              name="tel"
              id="name"
              required
              value={formData.tel}
              pattern="[0]{1}[1-9]{1}[0-9]{8}"
              onChange={handleInputChange}
            />
            <label htmlFor="name" className="form__label">
              Téléphone
            </label>
          </div>
          <div className="form__group field">
            <input
              type="email"
              className="form__field"
              placeholder="Email"
              name="email"
              id="name"
              required
              value={formData.email}
              pattern="[^@\s]+@[^@\s]+.[^@\s]+"
              onChange={handleInputChange}
            />
            <label htmlFor="name" className="form__label">Email</label>
          </div>
          <label id="iAMtoggle">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit">ENVOYER</button>
        </form>
        <div className="iframe_container">
          <iframe
            className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89076.99395787067!2d4.752557995878991!3d45.758040731360516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sfr!2sfr!4v1692650008866!5m2!1sfr!2sfr"
            width="600"
            height="400"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
