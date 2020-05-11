import React from "react";

import Style from "./LinkCard.module.scss";

const LinkCard = (props) => {
  let linksElement = props.link.map((link) => {
    return (
      <div className={Style.container} onClick={link.onClick}>
        <img src={link.img} alt="icon" />
        <h2>{link.address}</h2>);
      </div>
    );
  });
  return { linksElement };
};

export default LinkCard;
