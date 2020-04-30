import React from "react";
import Grid from '@material-ui/core/Grid';

import "./AppDetails.scss";

const AppDetails = props => {
  return (
    <div className="appDetails-container">
      <div className='header'>
      <div className='icon'><img src={props.img} alt='app icon'/></div>
      <h1>{props.title}</h1>
      </div>
      <Grid item xs={12} spacing={3} justify="center" alignItems="center" container className='grid'>
        {props.images.map(image => <img src={image} alt='' className='app-image' /> )}
      </Grid>
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
