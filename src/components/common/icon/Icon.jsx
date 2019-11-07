import React from "react";

import "./Icon.css";

const Icon = ({ icon, size }) => (
  <i className={["icon", icon, size].join(" ")}></i>
);

export default Icon;
