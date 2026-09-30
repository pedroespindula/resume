import React from "react";

import "./ResumeSection.css";

const ResumeSection = ({ children, title }) => (
  <section
    className={`resume-section ${title
      .toLowerCase()
      .split(" ")
      .join("-")}`}
  >
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default ResumeSection;
