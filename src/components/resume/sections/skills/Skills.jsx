import React from "react";

import { ResumeSection } from "../../../common";

import "./Skills.css";

const renderInfo = skill => (
  <li key={skill.group}>
    <span className="skill-group">{skill.group}</span>
    <span className="skill-items">{skill.items.join(" · ")}</span>
  </li>
);

const Skills = ({ info }) => (
  <ResumeSection title="Skills">
    <ul className="skills">{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default Skills;
