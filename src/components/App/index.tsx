import React from "react";
import "./App.css";

import BEMHelper from "react-bem-helper";
import Search from "../Search";
import Header from "../Header";

const classes = new BEMHelper("app");

const App = () => (
  <div {...classes()}>
    <Header />
    <Search />
  </div>
);

export default App;
