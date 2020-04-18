import React from "react";
import { Link } from "react-router-dom";

import "./Apps.scss";
import AppCard from "../components/AppCard";
const Apps = () => {
  return (
    <div className="app-container">
      <h2>We got you with lots of usefull app</h2>
      <div className="row">
        <AppCard title="Klass" className="klass" />
        <Link to="/apps/covid-19" style={{textDecoration: 'none'}}>
          <AppCard title="Covid-19" className="covid-19" />
        </Link>
      </div>
    </div>
  );
};

export default Apps;
