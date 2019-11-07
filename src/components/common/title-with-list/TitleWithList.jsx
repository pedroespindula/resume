import React from "react";

import "./TitleWithList.css";

const TitleWithList = ({ title, itemList, className }) => (
  <div className={[className, "title-with-list"].join(" ")}>
    <h3>{title}</h3>
    <ul>
      {itemList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default TitleWithList;
