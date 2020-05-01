import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import "./Apps.scss";
import AppCard from "../components/AppCard";
import AppList from "../data/apps/appList.json";
import AppData from "../data/apps/appList.json";

const Apps = () => {
  var appList = AppData.app;
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
        style={{ margin: 0 }}
      >
        {appList.map((app, index) => {
          return (
            <Link to={app["to"]} style={{ textDecoration: "none" }}>
              <AppCard
                title={app["title"]}
                className={`app-card app-card${index}`}
                appImg={app["appImg"]}
                style={{backgroundColor : app['styleColor']}}
              />
            </Link>
          );
        })}
      </Grid>
    </div>
  );
};

export default Apps;
