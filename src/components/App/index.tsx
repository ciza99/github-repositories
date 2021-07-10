import React from "react";
import "./App.css";

import BEMHelper from "react-bem-helper";
import Search from "../Search";

const classes = new BEMHelper("app");

const App = () => (
  <div {...classes()}>
    <Search />
  </div>
);

export default App;
