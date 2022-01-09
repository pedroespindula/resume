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
  <main>
    <WorkExperience info={workExperience} />
    <WhoAmI info={whoAmI} />
    <Education info={education} />
    <OtherWorkExperiences info={otherWorkExperiences} />
    <Projects info={projects} />
    {/* <Awards info={awards} /> */}
    {/* <Events info={events} /> */}
  </main>
);

export default ResumeBody;
