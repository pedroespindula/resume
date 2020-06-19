import "./Languages.css";

import React from "react";

import { TitleWithList } from "../../../common";

const joinInfo = language => `${language.lang}`;

const Languages = ({ info }) => (
  <TitleWithList
    className="languages"
    title="Languages"
    itemList={info.map(joinInfo)}
  />
);

export default Languages;
