import "./Languages.css";

import React from "react";

const Languages = ({ info }) => (
  <p className="languages">
    {info.map(({ lang, level }) => `${lang} (${level})`).join(" · ")}
  </p>
);

export default Languages;
