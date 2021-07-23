import React from "react";
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import "./index.css";
import App from "./App";

//Wrapping the <App /> in a Router provider
render(
  <Router>
    <App />
  </Router>

, document.querySelector("#root")
)
