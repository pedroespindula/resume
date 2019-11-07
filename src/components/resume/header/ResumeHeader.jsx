import "./ResumeHeader.css";

import React from "react";

import { Contacts, ContactsInfo, Languages } from "../sections";
import { Logo } from "../../common";

const renderName = name => name.split(" ").map(w => <h1>{w}</h1>);

const ResumeHeader = ({
  name,
  from,
  mainField,
  user,
  email,
  contacts,
  languages
}) => (
  <header>
    <Logo />
    <span className="name">{renderName(name)}</span>
    <ContactsInfo user={user} email={email} />
    <Languages info={languages} />
    <Contacts contacts={contacts} email={email} />
    <hr />
    <h2 className="mainField">{mainField}</h2>
    <h2 className="from">{from}</h2>
  </header>
);

export default ResumeHeader;
