import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import "./Apps.scss";
import AppCard from "../components/AppCard";

const Apps = () => {
  return (
    <div className="app-container">
      <h2>We got you with lots of usefull app</h2>

      <Grid
        container
        item
        xs={12}
        justify="center"
        alignItems="center"
        spacing={3}
        
      >
        <Link to="/apps/covid-19" style={{ textDecoration: "none" }}>
          <AppCard
            title="Covid-19"
            className="covid-19"
            style={{
              backgroundImage: `url(required("./assets/apps/covid19-1.jpg"))`,
            }}
          />
        </Link>
        <AppCard title="Klass" className="klass" />
      </Grid>
    </div>
  );
};

export default Apps;
