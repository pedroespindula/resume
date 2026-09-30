import React from "react";

import { ResumeSection } from "../../../common";

import "./WhoAmI.css";

const WhoAmI = ({ info }) => (
  <ResumeSection title="Summary" icon="fas fa-user">
    {info.map((paragraph, index) => (
      <p className="indent" key={index}>
        {paragraph}
      </p>
    ))}
  </ResumeSection>
);

export default WhoAmI;
