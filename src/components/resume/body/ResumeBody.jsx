import "./ResumeBody.css";

import React from "react";

import {
  // Awards,
  Education,
  // Events,
  // Projects,
  OtherWorkExperiences,
  WhoAmI,
  WorkExperience
} from "../sections";

const ResumeBody = ({
  // awards,
  education,
  // events,
  // projects,
  otherWorkExperiences,
  whoAmI,
  workExperience
}) => (
  <main className="resume-body">
    <WhoAmI info={whoAmI} />
    <div className="main-column">
      <WorkExperience info={workExperience} />
    </div>
    <aside className="side-column">
      <Education info={education} />
      <OtherWorkExperiences info={otherWorkExperiences} />
      {/* <Projects info={projects} /> */}
      {/* <Awards info={awards} /> */}
      {/* <Events info={events} /> */}
    </aside>
  </main>
);

export default ResumeBody;
