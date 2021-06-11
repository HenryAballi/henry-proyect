import React from "react";
import { useTranslation } from "react-i18next";
import global_pt from "../../translate/pt/global.json";
import "./cardOpinions.css";

const CardOpinions = () => {
  const [t] = useTranslation("global");

  return(
    <div className="flex">
      {
        Object.keys(global_pt.opinions).map(function(item, idx) {
          return <div key={idx} className="cardOpinions">
            <p>{t("opinions." + item + ".opinions")}</p>
            <p className="PatientName">{t("opinions." +  item + ".name" )}</p>
          </div>;
        })
      }
    </div>
  )
}

export default CardOpinions;