import "./TitleWithDate.css";

import React from "react";

import { Icon } from "..";

const renderLink = (title, link) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {title}
    <Icon icon="fas fa-link" size="tiny" />
  </a>
);

const TitleWithDate = ({ title, date, link }) => (
  <div className="title-with-date">
    <h3>{link && link !== "NOT PUBLIC" ? renderLink(title, link) : title}</h3>
    <h4>{date}</h4>
  </div>
);

export default TitleWithDate;
