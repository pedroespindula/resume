import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./OtherWorkExperiences.css";

const renderInfo = (workExperience, index) => (
  <li key={index}>
    <TitleWithDate
      title={workExperience.where}
      subtitle={workExperience.title}
      date={workExperience.from}
      link={workExperience.address}
    />
  </li>
);

const OtherWorkExperiences = ({ info }) => (
  <ResumeSection title="Earlier Experience">
    <ul className="compact-list">{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default OtherWorkExperiences;
