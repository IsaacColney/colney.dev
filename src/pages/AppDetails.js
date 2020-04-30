import React from "react";

import "./AppDetails.scss";
import ScrollMenu from 'react-horizontal-scrolling-menu';

const AppDetails = props => {

  var list = props.images.map(image => <img src={image} alt='' className='app-image' key={image} />);
  console.log(list.length);
  return (
    <div className="appDetails-container">
      <div className='header'>
      <div className='icon'><img src={props.img} alt='app icon'/></div>
      <h1>{props.title}</h1>
      </div>
      <div className='app-screenshot'>
        {props.images.map(image => <img src={image} alt='' className='app-image' key={image} />)}
      </div>
      <p>
       {props.description}
      </p>
      <button>
        <a href={props.downloadLink}>Download</a>
      </button>
    </div>
  );
};

export default AppDetails;
