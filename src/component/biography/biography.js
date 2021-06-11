import React from "react";
import CardHumberto from "./cardHumberto";
import CardCurriculum from "./cardCurriculum";
import useManageMenus from '../../hooks/useManageMenus';
import "./biography.css";

const Biograghy = () => {
  useManageMenus();

  return(
    <div className="allBiography">
      <div className="biography">
        <CardHumberto/> 
        <CardCurriculum/>
      </div>
    </div>
  )
}

export default Biograghy;