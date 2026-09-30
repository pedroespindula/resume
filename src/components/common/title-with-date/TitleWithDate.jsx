import "./TitleWithDate.css";

import React from "react";

const renderTitle = (title, link) =>
  link && link !== "NOT PUBLIC" ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  ) : (
    title
  );

const TitleWithDate = ({ title, subtitle, date, link }) => (
  <div className="title-with-date">
    <h3>
      {renderTitle(title, link)}
      {subtitle && <span className="subtitle">{subtitle}</span>}
    </h3>
    {date && <span className="date">{date}</span>}
  </div>
);

export default TitleWithDate;
