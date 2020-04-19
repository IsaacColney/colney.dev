import React from "react";

import "./AppDetails.scss";
const AppDetails = props => {
  return (
    <div className="appDetails-container">
      <div className='header'>
      <div className='icon'><img src={props.img} alt='app icon'/></div>
      <h1>{props.title}</h1>
      </div>
      <p>
       {props.description}
      </p>
      <button>
        <a href={props.downloadLink}>Download</a>
      </button>
    </div>
  );
};

export default AppDetails;
