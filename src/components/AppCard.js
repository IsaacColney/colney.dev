import React from "react";

import "./AppCard.scss";
card='1';
const AppCard = (props) => {
  return (
    <div className={`appcard-container ${props.className}`} style={props.style}>
      <h2>{props.title}</h2>
      {props.appImg != null ? <img src={props.appImg} alt="app logo" /> : <h3>{props.description}</h3>}
      <p>{props.description}</p>
    </div>
  );
};

export default AppCard;
