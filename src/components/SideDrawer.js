import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.scss";

const SideDrawer = (props) => {
  const html = (
    <div className="drawer">
      <ul className="drawerList">
        <img
          src="./assets/icons/close.png"
          onClick={props.closeDrawer}
          alt="close"
        />
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={props.closeDrawer}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/apps"
          style={{ textDecoration: "none" }}
          onClick={props.closeDrawer}
        >
          <li>Apps</li>
        </Link>
        <Link to="/mbbs/assignment" style={{ textDecoration: "none" }}  onClick={props.closeDrawer} >
                <li>Assignment</li>
              </Link>
        <Link
          to="/about"
          style={{ textDecoration: "none" }}
          onClick={props.closeDrawer}
        >
          <li>About</li>
        </Link>
      </ul>
    </div>
  );

  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="sideDrawer-transition"
      mountOnEnter
      unmountOnExit
    >
      {html}
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("sideDrawer-hook")
  );
};

export default SideDrawer;
