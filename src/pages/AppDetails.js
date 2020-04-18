import React from "react";

import "./AppDetails.scss";
const AppDetails = () => {
  return (
    <div className="appDetails-container">
      <h1>Covid-19</h1>
      <p>
        When a device goes from just working to actually making life easier,
        Android is behind it. It’s the reason your GPS avoids traffic, your
        watch can text and your Assistant can answer questions. It’s the
        operating system inside 2.5 billion active devices. Everything from 5G
        phones to stunning tablets, Android powers them all.
      </p>
      <button>
        <a href="https://firebasestorage.googleapis.com/v0/b/covid19-825cf.appspot.com/o/covid-19.apk?alt=media&token=42478d8e-6989-4091-ab03-90e5f2b79a7f">Download</a>
      </button>
    </div>
  );
};

export default AppDetails;
