import React from "react";

import { Icon } from "..";

import "./ResumeSection.css";

const ResumeSection = ({ children, icon, title }) => (
  <section
    className={`resume-section ${title
      .toLowerCase()
      .split(" ")
      .join("-")}`}
  >
    <Icon icon={icon} size="small" />
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default ResumeSection;
