import React from "react";
import "./Search.css";

import { Button, TextField } from "@material-ui/core";
import BEMHelper from "react-bem-helper";

const classes = new BEMHelper("search");

const Search = () => (
  <form {...classes("container")}>
    <TextField variant="standard" label="Username" />
    <Button variant="outlined">Search</Button>
  </form>
);

export default Search;
