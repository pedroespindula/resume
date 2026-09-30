import "./ResumeBody.css";

import React from "react";

import {
  // Awards,
  Certifications,
  Education,
  // Events,
  // Projects,
  OtherWorkExperiences,
  WhoAmI,
  WorkExperience
} from "../sections";

const ResumeBody = ({
  // awards,
  certifications,
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
      <Certifications info={certifications} />
      <OtherWorkExperiences info={otherWorkExperiences} />
      {/* <Projects info={projects} /> */}
      {/* <Awards info={awards} /> */}
      {/* <Events info={events} /> */}
    </aside>
  </main>
);

export default ResumeBody;
