import React from "react";
import Fade from 'react-reveal/Fade';

import Style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={Style.homeContainer}>
      <div className={Style.homeWelcome}>
    <h1>Welcome</h1>
    </div>
    <div className={Style.homeApps}>
      <Fade left delay={250}>
        <h2>Hello</h2>
      </Fade>
    </div>
    </div>
  );
};

export default Home;
