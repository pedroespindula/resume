import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./Certifications.css";

const renderInfo = certification => (
  <li key={certification.name}>
    <TitleWithDate title={certification.name} date={certification.issuer} />
  </li>
);

const Certifications = ({ info }) => (
  <ResumeSection title="Certifications">
    <ul className="compact-list">{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default Certifications;
