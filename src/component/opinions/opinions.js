import React from "react";
import CardOpinions from "./cardOpinions";
import { useTranslation } from "react-i18next";
import useManageMenus from '../../hooks/useManageMenus';
import "./opinions.css";

const Opinions = () => {
  const [t] = useTranslation("global");
  useManageMenus();

  return(
    <div className="opinions">
      <h1>{t("opinions.opinion.header")}</h1>
      <CardOpinions/>
  </div>
  )
}

export default Opinions;