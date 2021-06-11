import React from 'react';
import emailjs from 'emailjs-com';
import humberto from "../../assets/Photos/owner1.jpeg";
import { useTranslation } from "react-i18next";
import useManageMenus from '../../hooks/useManageMenus';
import "./contact.css";

const Contact = () => {
  const [t] = useTranslation("global");
  useManageMenus();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_contact', 'template_jbinrh6', e.target, "user_PLPCx077mIh6WMBDTqGeJ")
      .then((result) => {
        alert('Mensaje enviado')
      }, (error) => {
        alert('Mensaje no enviado');
      });
      e.target.reset();
  }

  return (
    <div className="contact-me">
      <h1>{t("contact.contact")}</h1>
      <div className="fillForm">
        <form id="contact-form" className="contact-form" onSubmit={sendEmail} autoComplete="true">
          <label>{t("contact.name")}</label>
          <input type="text" name="user_name" placeholder={t("contact.placeholderName")} required/>
          <label>{t("contact.email")}</label>
          <input type="email" name="user_email" placeholder={t("contact.placeholderEmail")} required/>
          <label className="phone_number">{t("contact.phoneNumber")}</label>
          <div className="codeAndNumber">
            <input placeholder="+351 -" className="code" disabled={true} />
            <input type="number" className="contact_number" name="contact" placeholder={t("contact.placeholderPhoneNumber")} min="910000000" max="999999999"/>
          </div>
          <label className="label">{t("contact.message")}</label>
          <textarea name="message" required/>
          <div className="submit">
            <input type="submit" value={t("contact.send")} className="send"/>
          </div>
        </form>
        <img src={humberto} className="imagContact" alt="imagem"/>
      </div>
    </div>
  );
}

export default Contact;
