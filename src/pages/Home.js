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
        <h2>Hello There</h2>
      </Fade>
      <Fade right delay={400}>
        <h1>The website is in maintenance</h1>
      </Fade>
    </div>
    </div>
  );
};

export default Home;
