import "./ResumeBody.css";

import React from "react";

import {
  // Awards,
  Certifications,
  Education,
  // Events,
  // Projects,
  OtherWorkExperiences,
  Skills,
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
  skills,
  whoAmI,
  workExperience
}) => (
  <main className="resume-body">
    <WhoAmI info={whoAmI} />
    <Skills info={skills} />
    <WorkExperience info={workExperience} />
    <OtherWorkExperiences info={otherWorkExperiences} />
    <Education info={education} />
    <Certifications info={certifications} />
    {/* <Projects info={projects} /> */}
    {/* <Awards info={awards} /> */}
    {/* <Events info={events} /> */}
  </main>
);

export default ResumeBody;
