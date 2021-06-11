import React from "react";
import "./cardWork.css";

const CardWorks = ({className, id, src, alt, text}) => {
  return(
      <div key={id} className="methodCard" id={id}>
        <p>{text}</p>
        <img className={className} src={src} alt={alt}/>
      </div>
  )
}

export default CardWorks;