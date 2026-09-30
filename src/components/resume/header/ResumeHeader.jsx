import "./ResumeHeader.css";

import React from "react";

import { Contacts } from "../sections";
import { Icon } from "../../common";

const ResumeHeader = ({ name, from, mainField, email, contacts }) => (
  <header className="resume-header">
    <div className="identity">
      <h1 className="name">{name}</h1>
      <h2 className="main-field">{mainField}</h2>
      <p className="from">
        <Icon icon="fas fa-map-marker-alt" size="tiny" />
        {from}
      </p>
    </div>
    <div className="reach">
      <Contacts contacts={contacts} email={email} />
    </div>
  </header>
);

export default ResumeHeader;
