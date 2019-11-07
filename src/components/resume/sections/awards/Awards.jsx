import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./Awards.css";

const renderInfo = award => (
  <li key={award.event}>
    <TitleWithDate title={award.event} date={award.from} link={award.address} />
    <h4>Award: {award.award}</h4>
  </li>
);

const Awards = ({ info }) => (
  <ResumeSection title="Awards" icon="fas fa-medal">
    <ul>{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default Awards;
