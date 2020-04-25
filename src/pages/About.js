import React from "react";

import "./About.scss";

const About = () => {
  var counter = '1';
  return (
    <div className="about-container">
      <h1>About us</h1>
      <h3>Join us on:</h3>
      <div className="about-contact">
        <a href="https://www.instagram.com/colney.dev">Instagram</a>
        <div className="hspace-20px"></div>
        <a href="https://www.facebook.com/colney.dev">Facebook</a>
      </div>
    </div>
  );
};

export default About;
