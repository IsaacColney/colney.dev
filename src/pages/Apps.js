import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import "./Apps.scss";
import AppCard from "../components/AppCard";

const Apps = () => {
  return (
    <div className="app-container">
      <h2>We got you with lots of amazing apps</h2>

      <Grid
        container
        item
        xs={12}
        justify="center"
        alignItems="center"
        spacing={3}
        style={{margin: 0}}
      >
        <Link to="/apps/covid-19" style={{ textDecoration: "none" }}>
          <AppCard
            title="Covid-19"
            className="covid-19"
            appImg='../assets/covid-19-icon.png'
          />
        </Link>
        <AppCard title="Klass" className="klass" />
      </Grid>
    </div>
  );
};

export default Apps;
