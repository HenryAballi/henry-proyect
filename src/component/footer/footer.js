import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { MdPhonelinkRing } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = () => {
  const [t] = useTranslation("global");

  return(
    <footer className="footer" id="footer">
      <div>
        <h3 className="contact">{t("home.text")}</h3>
        <span className="contact">{t("home.text2")}</span>
        <span className="contact">{t("home.text3")}</span>
        <span className="contact">{t("home.text4")}</span>
      </div>
      <div>
        <a className="contact styleContact" 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.facebook.com/humberto.humbe"
        >
          <AiFillFacebook className="icon"/>
          <span className="spanContact">-  Facebook</span>
        </a>
        <span className="contact styleContact"><SiGmail className="icon"/><span>- humberf2001@yahoo.es</span></span>
        <span className="contact styleContact"><MdPhonelinkRing className="icon"/><span>-  963 333 877</span></span>
      </div>
      <small>Developed by Henry</small>
    </footer>
  )
}

export default Footer;