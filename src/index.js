import React from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import "./index.css";
import "./constants.css";
import App from "./components/app/Resume";

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>, document.getElementById("root"));
