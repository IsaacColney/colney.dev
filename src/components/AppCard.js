import React from "react";

import "./AppCard.scss";
const AppCard = (props) => {
  return (
    <div className={`appcard-container ${props.className}`} style={props.style}>
      <h2>{props.title}</h2>
      {props.appImg != null && <img src={props.appImg} alt="app logo" />}
      <p>{props.description}</p>
    </div>
  );
};

export default AppCard;
