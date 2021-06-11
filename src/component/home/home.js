import React from "react";
import humberto2 from "../../assets/Photos/owner2.jpeg";
import { useTranslation } from "react-i18next";
import useManageMenus from '../../hooks/useManageMenus';
import "./home.css";

const Home = ({ location }) => {
  const [t] = useTranslation("global");  
  useManageMenus();
  return(
    <div className="home">
      <img src={humberto2} alt="your browser" className="humberto second"/>
      <p>{t("home.text5")}</p>
    </div>
  );
}

export default Home;