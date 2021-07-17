import React from "react";
import "./Header.css";

import BEMHelper from "react-bem-helper";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { WhiteButton, WhiteTextField } from "./StyledInputs";

const classes = new BEMHelper("header");

const Header = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    const { username } = data;
    if (!username) return;
    history.push(`/users/${username}/info`);
  });

  return (
    <header {...classes()}>
      <Link {...classes("title")} to="/">
        <GitHubIcon fontSize="large" />
        <h1 {...classes("heading")}>GitHub-Viewer</h1>
      </Link>
      <form {...classes("search")} onSubmit={onSubmit}>
        <WhiteTextField
          variant="outlined"
          label="username"
          size="small"
          required
          {...register("username")}
        />
        <WhiteButton variant="outlined" type="submit">
          Search
        </WhiteButton>
      </form>
    </header>
  );
};

export default Header;
