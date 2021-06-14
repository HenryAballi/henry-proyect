import React from "react";
import videoEdition from "../../assets/videos/edition1.mp4";
import useManageMenus from '../../hooks/useManageMenus';
import "./video.css";
console.log(videoEdition);
const Videos = () => {
  useManageMenus();
  return(
    <div className="videoAndImagem">
      <div className="videosWork" >
        <video type="video/mp4" controls>
          <source src= {videoEdition} />
        </video>
      </div>
    </div>
  )
} 

export default Videos;