import React from "react";

import Style from "./AppCard.module.scss";

const AppCard = (props) => {
  
  return (
    <div className={`${Style.appCardContainer} ${props.className}`} style={props.style}>
      <h2>{props.title}</h2>
      {props.appImg != null ? <img src={props.appImg} alt="app logo" /> : <h3>{props.description}</h3>}
      <p>{props.description}</p>
    </div>
  );
};

export default AppCard;
