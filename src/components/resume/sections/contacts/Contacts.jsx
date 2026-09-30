import React from "react";

import { Icon } from "../../../common";

import "./Contacts.css";

const contactIcons = {
  github: "fab fa-github",
  linkedin: "fab fa-linkedin",
  email: "fas fa-envelope"
};

const buildEmail = email => ({
  socialNetwork: "email",
  user: email,
  address: `mailto:${email}`
});

const renderContact = contact => (
  <li key={contact.socialNetwork}>
    <a
      href={contact.address}
      target="_blank"
      rel="noopener noreferrer"
      className={contact.socialNetwork}
    >
      <span>{contact.user}</span>
      <Icon icon={contactIcons[contact.socialNetwork]} size="tiny" />
    </a>
  </li>
);

const Contacts = ({ contacts, email }) => (
  <ul className="contacts">
    {[buildEmail(email), ...contacts].map(renderContact)}
  </ul>
);

export default Contacts;
