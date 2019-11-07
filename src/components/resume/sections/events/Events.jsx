import React from "react";

import { ResumeSection, TitleWithDate } from "../../../common";

import "./Events.css";

const renderInfo = event => (
  <li key={event.event}>
    <TitleWithDate title={event.name} date={event.from} link={event.address} />
    <h4>Role: {event.role}</h4>
  </li>
);

const Events = ({ info }) => (
  <ResumeSection title="Events" icon="fas fa-calendar-day">
    <ul>{info.map(renderInfo)}</ul>
  </ResumeSection>
);

export default Events;
