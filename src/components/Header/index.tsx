import React from "react";
import "./Header.css";

import BEMHelper from "react-bem-helper";
import GitHubIcon from "@material-ui/icons/GitHub";
import { WhiteButton, WhiteTextField } from "./StyledInputs";

const classes = new BEMHelper("header");

const Header = () => (
  <header {...classes()}>
    <div {...classes("title")}>
      <GitHubIcon fontSize="large" />
      <h1 {...classes("heading")}>GitHub-Viewer</h1>
    </div>
    <form {...classes("search")}>
      <WhiteTextField variant="outlined" label="username" size="small" />
      <WhiteButton variant="outlined">Search</WhiteButton>
    </form>
  </header>
);

export default Header;
