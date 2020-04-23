import React from "react";

import "./Assignment.scss";
import AppCard from "../components/AppCard";

const Assignment = (props) => {
  return (
    <div className="assignment-container">
      <h1>Assignment</h1>
      <div className="gird-assignment">
        <AppCard className="assignment-card" />
        <AppCard className="assignment-card" />
        <AppCard className="assignment-card" />
        <AppCard className="assignment-card" />
        <AppCard className="assignment-card" />
        <AppCard className="assignment-card" />
      </div>
    </div>
  );
};

export default Assignment;
