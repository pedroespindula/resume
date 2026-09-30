import "./ResumeBody.css";

import React from "react";

import {
  // Awards,
  Education,
  // Events,
  Projects,
  OtherWorkExperiences,
  WhoAmI,
  WorkExperience
} from "../sections";

const ResumeBody = ({
  // awards,
  education,
  // events,
  projects,
  otherWorkExperiences,
  whoAmI,
  workExperience
}) => (
  <main className="resume-body">
    <div className="main-column">
      <WorkExperience info={workExperience} />
    </div>
    <aside className="side-column">
      <WhoAmI info={whoAmI} />
      <Education info={education} />
      <Projects info={projects} />
      <OtherWorkExperiences info={otherWorkExperiences} />
      {/* <Awards info={awards} /> */}
      {/* <Events info={events} /> */}
    </aside>
  </main>
);

export default ResumeBody;
