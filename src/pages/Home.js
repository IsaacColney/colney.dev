import React from "react";
import Fade from 'react-reveal/Fade';

import "./Home.scss";

const Home = () => {
  return (
    <div className="container">
      <div className='home-welcome'>
    <h1>Welcome</h1>
    </div>
    <div className='home-apps'>
      <Fade left delay={250}>
        <h2>Hello</h2>
      </Fade>
    </div>
    </div>
  );
};

export default Home;
