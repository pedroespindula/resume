import React from "react";

import { TitleWithList } from "../../../common";

const ContactsInfo = ({ user, email }) => (
  <TitleWithList
    className="contacts-info"
    title="Contacts"
    itemList={[user, email]}
  />
);

export default ContactsInfo;
