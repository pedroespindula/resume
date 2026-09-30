import React from "react";

import "./Contacts.css";

const buildEmail = email => ({
  socialNetwork: "email",
  user: email,
  address: `mailto:${email}`
});

const renderContact = contact => (
  <li key={contact.socialNetwork}>
    <a href={contact.address} target="_blank" rel="noopener noreferrer">
      {contact.user}
    </a>
  </li>
);

const Contacts = ({ location, contacts, email }) => (
  <ul className="contacts">
    {location && <li>{location}</li>}
    {[buildEmail(email), ...contacts].map(renderContact)}
  </ul>
);

export default Contacts;
