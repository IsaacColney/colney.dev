import React from "react";

import Style from"./AppDetails.module.scss";



const AppDetails = props => {

  var list = props.images.map(image => <img src={image} alt='' className='app-image' key={image} />);
  console.log(list.length);
  return (
    <div className={Style.appDetailsContainer}>
      <div className={Style.header}>
      <div className={Style.icon}><img src={props.img} alt='app icon'/></div>
      <h1>{props.title}</h1>
      </div>
      <div className={Style.appScreenshot}>
       
        {props.images.map((image,index) => <img src={image} alt='' className={Style.appImage} key={image} style={{animation : `fadeUp ${index + 0.5}s ease` }} /> )}
       
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
