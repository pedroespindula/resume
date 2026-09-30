import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./OtherWorkExperiences.css";

const renderInfo = (workExperience, index) => (
  <li key={index}>
    <TitleWithDate title={workExperience.where} link={workExperience.address} />
    <p className="owe-title">
      <span>{workExperience.title}</span>
      <span className="owe-date">{workExperience.from}</span>
    </p>
  </li>
);

const OtherWorkExperiences = ({ info }) => (
  <ResumeSection title="Earlier Experience" icon="fas fa-history">
    <ul className="other-work-experiences">{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default OtherWorkExperiences;
