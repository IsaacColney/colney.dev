import React from "react";

import "./Apps.scss";
import AppCard from "../components/AppCard";
const Apps = () => {
  return (
    <div className="app-container">
      <h2>We got you with lots of usefull app</h2>
      <div className="row">
        <AppCard
          title="Klass"
          style={{
            backgroundColor: "rgb(100,40,40)",
            "&:hover": { 
               cursor: "pointer" },
          }}
        />
        <AppCard
          title="Covid-19"
          style={{
            backgroundColor: "rgb(40,40,70)",
            "&:hover": {
               cursor: "pointer" },
          }}
        />
      </div>
    </div>
  );
};

export default Apps;
