import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./Education.css";

const renderInfo = education => (
  <li key={education.where}>
    <TitleWithDate
      title={education.where}
      subtitle={[education.pursuing, education.details]
        .filter(Boolean)
        .join(" · ")}
      date={education.from}
      link={education.address}
    />
  </li>
);

const Education = ({ info }) => (
  <ResumeSection title="Education">
    <ul className="compact-list">{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default Education;
