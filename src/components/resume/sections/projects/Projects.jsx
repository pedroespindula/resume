import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./Projects.css";

const renderInfo = project => (
  <li key={project.name}>
    <TitleWithDate
      title={project.name}
      date={project.from}
      link={project.address}
    />
    <p>{project.description}</p>
  </li>
);

const Projects = ({ info }) => (
  <ResumeSection title="Personal Projects" icon="fas fa-code">
    <ul>{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default Projects;
