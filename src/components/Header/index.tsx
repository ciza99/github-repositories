import React from "react";
import "./Header.css";

import BEMHelper from "react-bem-helper";
import GitHubIcon from "@material-ui/icons/GitHub";

const classes = new BEMHelper("header");

const Header = () => (
  <header {...classes()}>
    <GitHubIcon fontSize="large" />
    <h1>GitHub-Viewer</h1>
  </header>
);

export default Header;
