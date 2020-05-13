import React from "react";

import Style from "./EboutMe.module.scss";

const Portfolio = (props) => {
  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <div className={Style.circleAvater}>
          <img src={props.displayPicture} alt="display picture" />
        </div>
        <h3>{props.profileName}</h3>
      </div>

      <div className={Style.body}></div>
    </div>
  );
};

export default Portfolio;
