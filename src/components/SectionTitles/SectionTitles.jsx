import React from "react";
import "./SectionTitles.css";

const SectionTitles = ({subSubTitle,subTitle,title,content}) => {
  return (
    <div className="sectionTitle-welcome">
      <div className="sectionTitle">
        <div className="sectionTitle-welcome-title">
          <p className="welcome-title-guion left"> -----------</p>
          <h3>{subSubTitle} </h3>
         
          <p className="welcome-title-guion rigth"> -----------</p>
        </div>
        <div className="subtitle-title">
        <h2>{subTitle}</h2>
        <p> {title} </p>
        </div>
     

        <span>
         {content}
        </span>
      </div>
    </div>
  );
};

export default SectionTitles;
