import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./WorkExperience.css";

const renderActivities = activities =>
  activities &&
  activities.length > 0 && (
    <ul className="we-activities">
      {activities.map((activity, i) => (
        <li key={i}>{activity.replace(/;$/, "")}</li>
      ))}
    </ul>
  );

const renderRole = role => (
  <li key={role.title}>
    <div className="we-role">
      <span className="role-title">{role.title}</span>
      <span className="date">{role.from}</span>
    </div>
    {renderActivities(role.mainActivities)}
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
    {workExperience.roles && renderActivities(workExperience.mainActivities)}
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
