import React from "react";
import "./App.css";

import BEMHelper from "react-bem-helper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import UserPage from "../UserPage";

const classes = new BEMHelper("app");

const App = () => (
  <div {...classes()}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users/:username">
          <UserPage />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
