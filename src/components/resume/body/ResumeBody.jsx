import "./ResumeBody.css";

import React from "react";

import {
  Awards,
  Education,
  // Events,
  Projects,
  WhoAmI,
  WorkExperience
} from "../sections";

const ResumeBody = ({
  awards,
  education,
  // events,
  projects,
  whoAmI,
  workExperience
}) => (
  <main>
    <WhoAmI info={whoAmI} />
    <WorkExperience info={workExperience} />
    <Projects info={projects} />
    <Education info={education} />
    <Awards info={awards} />
    {/* <Events info={events} /> */}
  </main>
);

export default ResumeBody;
