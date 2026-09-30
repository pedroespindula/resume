import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./WorkExperience.css";

const renderRole = role => (
  <li key={role.title}>
    <span className="role-title">{role.title}</span>
    <span className="date">{role.from}</span>
  </li>
);

const renderInfo = (workExperience, index) => (
  <li key={index}>
    <TitleWithDate
      title={workExperience.where}
      subtitle={workExperience.about}
      link={workExperience.address}
    />
    <ul className="we-roles">
      {(workExperience.roles || [workExperience]).map(renderRole)}
    </ul>
    {workExperience.mainActivities.length > 0 && (
      <ul className="we-activities">
        {workExperience.mainActivities.map((activity, i) => (
          <li key={i}>{activity.replace(/;$/, "")}</li>
        ))}
      </ul>
    )}
    {workExperience.technologies.length > 0 && (
      <p className="we-technologies">
        {workExperience.technologies.join(" · ")}
      </p>
    )}
  </li>
);

const WorkExperience = ({ info }) => (
  <ResumeSection title="Work Experience">
    <ul className="work-experience">{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default WorkExperience;
