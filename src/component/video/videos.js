import React from "react";
import videoEdition from "../../assets/videos/edition1.mp4";
import useManageMenus from '../../hooks/useManageMenus';
import "./video.css";

const Videos = () => {
  useManageMenus();
  return(
    <div className="videoAndImagem">
      <div className="videosWork" >
        <video type="video/MOV" controls>
          <source src= {videoEdition} />
        </video>
      </div>
    </div>
  )
} 

export default Videos;