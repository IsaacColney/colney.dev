import React from "react";
import "./Navigation.scss";

const NavigationBar = props => {

    const openDrawer = () => {
        document.getElementsByClassName('drawer')[0].style.width = '50vw';
        document.getElementsByClassName('drawerList')[0].style.display = 'flex';
        document.getElementsByTagName('body')[0].style.padding = '0 0 0 50vw';
        // document.getElementsByClassName('container')[0].style.padding = '0 0  0 50vw';
        // document.getElementsByClassName('nav-bar')[0].style.padding = '0 0  0 50vw';
        
    };
    const closeDrawer = () => {
      document.getElementsByClassName('drawer')[0].style.width = '0';
      document.getElementsByClassName('drawerList')[0].style.display = 'none';
      document.getElementsByTagName('body')[0].style.padding = '0';
      // document.getElementsByClassName('container')[0].style.padding = '0';
      // document.getElementsByClassName('nav-bar')[0].style.padding = '0';
    };
  

  return (
    <div className="nav-bar">
      <div className="content">
        <div className="nav-btn" onClick={openDrawer}>
          <img src="./assets/icons/menu.png" alt="icons-menu" />
        </div>
        <div className="drawer">
          <ul className='drawerList'>
            <img src='./assets/icons/close.png' onClick={closeDrawer} alt='close'/>
            <li>Home</li>
            <li>App</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <img className='logo' src='./assets/logo-sm.png' alt='logo'/>
        <div className="link">
          <ul>
            <li>Home</li>
            <li>App</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;