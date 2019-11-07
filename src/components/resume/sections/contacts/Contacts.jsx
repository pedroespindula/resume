import React from "react";

import { Icon } from "../../../common";

import "./Contacts.css";

const contactIcons = {
  github: "fab fa-github-square",
  twitter: "fab fa-twitter-square",
  linkedin: "fab fa-linkedin",
  email: "fas fa-envelope-square"
};

const buildEmail = email => ({
  socialNetwork: "email",
  user: email,
  address: `mailto:${email}`
});

const renderContact = contact => (
  <a
    href={contact.address}
    target="_blank"
    rel="noopener noreferrer"
    key={contact.socialNetwork}
    className={contact.socialNetwork}
  >
    <Icon icon={contactIcons[contact.socialNetwork]} size="medium" />
  </a>
);

const Contacts = ({ contacts, email }) => (
  <section className="contacts">
    {[...contacts, buildEmail(email)].map(renderContact)}
  </section>
);

export default Contacts;
