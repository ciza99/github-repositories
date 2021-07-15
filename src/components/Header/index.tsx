import React from "react";
import "./Header.css";

import BEMHelper from "react-bem-helper";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Button, TextField, withStyles } from "@material-ui/core";

const WhiteTextField = withStyles({
  root: {
    "& label.Mui-focused, & .MuiInputBase-input, & .MuiFormLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const WhiteButton = withStyles({
  root: {
    borderColor: "white",
    color: "white",
  },
})(Button);

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
