import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./Education.css";

const renderInfo = education => (
  <li key={education.where}>
    <TitleWithDate
      title={education.where}
      date={education.from}
      link={education.address}
    />
    <p className="edu-degree">{education.pursuing}</p>
    <p className="edu-details">{education.details}</p>
  </li>
);

const Education = ({ info }) => (
  <ResumeSection title="Education" icon="fas fa-graduation-cap">
    <ul>{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default Education;
