import React from "react";
import ReactDOM from "react-dom";
import "./App.module.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <currentUserProvider>
      <App />
      </currentUserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

