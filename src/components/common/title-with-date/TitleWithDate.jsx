import "./TitleWithDate.css";

import React from "react";

import { Icon } from "..";

const renderLink = (title, link) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {title}
    <Icon icon="fas fa-external-link-alt" size="tiny" />
  </a>
);

const TitleWithDate = ({ title, date, link }) => (
  <div className="title-with-date">
    <h3>{link && link !== "NOT PUBLIC" ? renderLink(title, link) : title}</h3>
    <span className="date">{date}</span>
  </div>
);

export default TitleWithDate;
