import React from "react";

import "./Apps.scss";
import AppCard from "../components/AppCard";
const Apps = () => {
  return (
    <div className="app-container">
      <h2>We got you with lots of usefull app</h2>
      <div className="row">
        <AppCard title="Klass" className="klass" />
        <AppCard
          title="Covid-19"
          className='covid-19'
        />
      </div>
    </div>
  );
};

export default Apps;
