import React from "react";

import { ResumeSection } from "../../../common";

import "./WhoAmI.css";

const WhoAmI = ({ info }) => (
  <ResumeSection title="Summary">
    {info.map((paragraph, index) => (
      <p key={index}>
        {paragraph}
      </p>
    ))}
  </ResumeSection>
);

export default WhoAmI;
