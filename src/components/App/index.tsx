import React from "react";
import "./App.css";

import BEMHelper from "react-bem-helper";
import Header from "../Header";
import Home from "../Home";

const classes = new BEMHelper("app");

const App = () => (
  <div {...classes()}>
    <Header />
    <Home />
  </div>
);

export default App;
