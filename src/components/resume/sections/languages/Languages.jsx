import "./Languages.css";

import React from "react";

import { TitleWithList } from "../../../common";

const joinInfo = language => `${language.lang} (${language.level})`;

const Languages = ({ info }) => (
  <TitleWithList
    className="languages"
    title="Languages"
    itemList={info.map(joinInfo)}
  />
);

export default Languages;
