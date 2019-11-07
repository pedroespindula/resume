import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./WorkExperience.css";

const renderMainActivities = (mainActivity, index) => (
  <li key={index}>{mainActivity};</li>
);

const renderInfo = (workExperience, index) => (
  <li key={index}>
    <TitleWithDate
      title={workExperience.where}
      date={workExperience.from}
      link={workExperience.address}
    />
    <div className="we-content">
      <h4>Title: {workExperience.title}</h4>
      <h4>Main Activities:</h4>
      <ul>{workExperience.mainActivities.map(renderMainActivities)}</ul>
      <h4>Technologies: {workExperience.technologies.join(", ")}</h4>
    </div>
  </li>
);

const WorkExperience = ({ info }) => (
  <ResumeSection title="Work Experience" icon="fas fa-tv">
    <ul className="work-experience">{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default WorkExperience;
