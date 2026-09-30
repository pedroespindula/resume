import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./WorkExperience.css";

const renderRole = role => (
  <li key={role.title}>
    <span className="role-title">{role.title}</span>
    <span className="role-date">{role.from}</span>
  </li>
);

const renderRoles = workExperience =>
  workExperience.roles ? (
    <ul className="we-roles">{workExperience.roles.map(renderRole)}</ul>
  ) : (
    <p className="we-title">{workExperience.title}</p>
  );

const renderInfo = (workExperience, index) => (
  <li key={index}>
    <TitleWithDate
      title={workExperience.where}
      date={workExperience.roles ? null : workExperience.from}
      link={workExperience.address}
    />
    {renderRoles(workExperience)}
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
  <ResumeSection title="Work Experience" icon="fas fa-briefcase">
    <ul className="work-experience">{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default WorkExperience;
