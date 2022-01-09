import React from "react";

import { ResumeSection } from "../../../common";

import "./WhoAmI.css";

const WhoAmI = ({ info }) => (
  <ResumeSection title="Who Am I" icon="fas fa-user">
    {info.map((i) => (
      <p className="indent">{i}</p>
    ))}
  </ResumeSection>
);

export default WhoAmI;
