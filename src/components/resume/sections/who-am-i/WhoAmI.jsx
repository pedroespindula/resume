import React from "react";

import { ResumeSection } from "../../../common";

import "./WhoAmI.css";

const WhoAmI = ({ info }) => (
  <ResumeSection title="Who Am I" icon="fas fa-user">
    <p className="indent">{info}</p>
  </ResumeSection>
);

export default WhoAmI;
