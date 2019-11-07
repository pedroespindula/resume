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
    <h4>
      Pursuing: <span>{education.pursuing}</span>
    </h4>
    <h4>
      Details: <span>{education.details}</span>
    </h4>
  </li>
);

const Education = ({ info }) => (
  <ResumeSection title="Education" icon="fas fa-graduation-cap">
    <ul>{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default Education;
