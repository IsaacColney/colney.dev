import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";
import Logo from "../assets/logo-sm.png";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

const NavigationBar = (props) => {
  console.log('4');   
  const [showDrawer, setDrawer] = useState(false);
   const openDrawer = () => {
     setDrawer(true);
     console.log(showDrawer);
   }

   const closeDrawer = () => {
    setDrawer(false);
    console.log(showDrawer);
  }
  return (
    <React.Fragment>
      { showDrawer && <Backdrop onClick={closeDrawer}/> }
      <SideDrawer show={showDrawer} closeDrawer={closeDrawer} />
      <div className="nav-bar">
        <div className="content">
          <div className="nav-btn" onClick={openDrawer}>
            <img src="./assets/icons/menu.png" alt="icons-menu" />
          </div>
          <Link to="/" className="logo">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
          <div className="link">
            <ul>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>Home</li>
              </Link>
              <Link to="/apps" style={{ textDecoration: "none" }}>
                <li>Apps</li>
              </Link>
              <Link to="/mbbs/assignment" style={{ textDecoration: "none" }}>
                <li>Assignment</li>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <li>About</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavigationBar;
