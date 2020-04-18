import React from "react";

import "./AppDetails.scss";
const AppDetails = props => {
  return (
    <div className="appDetails-container">
      <h1>{props.title}</h1>
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
