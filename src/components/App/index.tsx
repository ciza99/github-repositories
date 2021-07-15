import React from "react";
import "./App.css";

import BEMHelper from "react-bem-helper";
import Header from "../Header";

const classes = new BEMHelper("app");

const App = () => (
  <div {...classes()}>
    <Header />
  </div>
);

export default App;
