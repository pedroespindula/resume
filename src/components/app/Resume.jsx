import React from "react";

import ResumeBody from "../resume/body/ResumeBody";
import ResumeHeader from "../resume/header/ResumeHeader";

import "./Resume.css";

import info from "../../lib/info.json";

function Resume() {
  return (
    <article className="resume">
      <ResumeHeader {...info}></ResumeHeader>
      <ResumeBody {...info}></ResumeBody>
    </article>
  );
}

export default Resume;
