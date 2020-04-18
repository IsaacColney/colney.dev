import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

const NavigationBar = (props) => {
  const openDrawer = () => {
    document.getElementsByClassName("drawer")[0].style.width = "50vw";
    document.getElementsByClassName("drawerList")[0].style.display = "flex";
  };
  const closeDrawer = () => {
    document.getElementsByClassName("drawer")[0].style.width = "0";
    document.getElementsByClassName("drawerList")[0].style.display = "none";
  };

  return (
    <div className="nav-bar">
      <div className="content">
        <div className="nav-btn" onClick={openDrawer}>
          <img src="./assets/icons/menu.png" alt="icons-menu" />
        </div>
        <div className="drawer">
          <ul className="drawerList">
            <img
              src="./assets/icons/close.png"
              onClick={closeDrawer}
              alt="close"
            />
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={closeDrawer}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/apps"
              style={{ textDecoration: "none" }}
              onClick={closeDrawer}
            >
              <li>Apps</li>
            </Link>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={closeDrawer}
            >
              <li>Contact</li>
            </Link>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={closeDrawer}
            >
              <li>About</li>
            </Link>
          </ul>
        </div>
        <img className="logo" src="./assets/logo-sm.png" alt="logo" />
        <div className="link">
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="/apps" style={{ textDecoration: "none" }}>
              <li>Apps</li>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Contact</li>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>About</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
