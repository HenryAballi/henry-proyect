import React, { useEffect, useContext } from 'react';
import logo from "../../assets/Photos/logoHumberto.jpeg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import { flag } from '../consts';
import context from '../../context';
import "./nav.css";

const Nav = () => {
  const [t, i18n] = useTranslation("global");

  const { showLinks, showGalleries, setShowGalleries, setShowLinks } = useContext(context);

  useEffect(() => {
    showLinks 
      ? document.querySelector('body').style.overflow = 'hidden'
      : document.querySelector('body').style.overflow = 'scroll';
  }, [showLinks]);

  const closeLinks = () => {
      setShowLinks(!showLinks);
  }

  const showSubmenu = () => {
      setShowGalleries(!showGalleries);
  }

  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" className="logoImg"/> 
      </div>
      <ul className={`menu${showLinks ? ' menu-show' : ''}`}>
        <li>
          <Link to="/">{t("nav.home")}</Link>
        </li>
        <li onClick={showSubmenu} className="videoImage">
          {t("nav.galleries")}
          <TiArrowSortedDown className="arrow"/>
          <ul className={`galleries${showGalleries ? ' galleries-show' : ''}`}>
            <li className="galleriesLi">
              <div className="list">
                <Link to="/Videos">{t("nav.videos")}</Link>
              </div>
            </li>
            <li >
              <div className="list">
                <Link to="/imagens">{t("nav.photos")}</Link>
              </div>
            </li>
          </ul>
        </li>
        <li className="about-me">
          <Link to="/Biografia">{t("nav.about-me")}</Link>
        </li>
        <li>
          <Link to="/opinions">{t("nav.opinions")}</Link>
        </li>
        <li>
          <Link to="/contact">{t("nav.contact")}</Link>
        </li>
      </ul>
      <div className="flagAndBurger">
        <div className="flagButton">
          <button onClick={() => i18n.changeLanguage("es")}>{<img src={flag[0].flag}  alt="flag" className={flag[0].className}/>}</button>
          <button onClick={() => i18n.changeLanguage("en")}>{<img src={flag[2].flag}  alt="flag" className={flag[2].className}/>}</button>
          <button onClick={() => i18n.changeLanguage("pt")}>{<img src={flag[1].flag}  alt="flag" className={flag[1].className}/>}</button>
        </div>
        <GiHamburgerMenu onClick={closeLinks} className="burger"/>
      </div>
    </nav>
  )
}

export default Nav;