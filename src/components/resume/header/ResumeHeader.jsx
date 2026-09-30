import "./ResumeHeader.css";

import React from "react";

import { Contacts } from "../sections";

const ResumeHeader = ({ name, from, mainField, email, contacts }) => (
  <header className="resume-header">
    <h1 className="name">{name}</h1>
    <p className="main-field">{mainField}</p>
    <Contacts location={from} contacts={contacts} email={email} />
  </header>
);

export default ResumeHeader;
