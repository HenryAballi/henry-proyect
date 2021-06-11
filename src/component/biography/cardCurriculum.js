import React from "react";
import "./cardCurriculum.css";
import { useTranslation } from "react-i18next";
import global_pt from "../../translate/pt/global.json";


const CardCurriculum = () => {
  const [t] = useTranslation("global");

  return(
  <div className="cardCurrilum">
    <ul className="ulBiography">
      {
        Object.keys(global_pt.biography).map(function(item, idx) {
          return <li key={idx} className="cardCurriculumLi">
            <span className="spanBiography2">{t("biography." + item)}</span>
          </li>;
        })
      }
    </ul>
  </div>
  )
}

export default CardCurriculum;