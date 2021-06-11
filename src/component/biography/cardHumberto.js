import React from "react";
import humberto from "../../assets/Photos/owner.jpeg";
import "./cardHumberto.css";

const CardHumberto = () => {
  return(
    <div className="owner">
      <div>
        <img src={humberto} alt="humberto" className="ownerImg" />
      </div>
      <div>
        <span className="ownerName">Humberto Figueroa</span>
      </div>
    </div>
  )
}

export default CardHumberto;