import React from "react";
import Instagram from '../assets/icon/instagram.png';
import Facebook from '../assets/icon/facebook.png';
import Style from "./About.module.scss";

const About = () => {
  return (
    <div className={Style.aboutContainer}>
      <div className={Style.aboutContainer1}>
      <h1>About us</h1>
      <p>We are a team developers (a ni deuh tawp hrih)</p>
      <h3>Join us on:</h3>
      <div className={Style.aboutContact}>
        <a href="https://www.instagram.com/colney.dev"  ><img src={Instagram} alt='instagram'/> </a>
        <div className="hspace-20px"></div>
        <a href="https://www.facebook.com/Colneydev-113107110338054" ><img src={Facebook} alt='facebook'/></a>
      </div>
      </div>
    </div>
  );
};

export default About;
