import React from "react";

import { ResumeSection } from "../../../common";

import "./Certifications.css";

const renderInfo = certification => (
  <li key={certification.name}>
    <p className="cert-name">{certification.name}</p>
    <p className="cert-issuer">{certification.issuer}</p>
  </li>
);

const Certifications = ({ info }) => (
  <ResumeSection title="Certifications" icon="fas fa-certificate">
    <ul className="certifications">{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default Certifications;
