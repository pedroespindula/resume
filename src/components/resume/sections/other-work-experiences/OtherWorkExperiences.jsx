import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./OtherWorkExperiences.css";

const renderInfo = (workExperience, index) => (
  <li key={index}>
    <TitleWithDate
      title={workExperience.where}
      date={workExperience.from}
      link={workExperience.address}
    />
    <h4>Title: {workExperience.title}</h4>
  </li>
);

const OtherWorkExperiences = ({ info }) => (
  <ResumeSection title="Other Work Experiences" icon="fas fa-ellipsis-h">
    <ul className="other-work-experiences">{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default OtherWorkExperiences;
