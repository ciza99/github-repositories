import React from "react";
import "./NotFound.css";

import BEMHelper from "react-bem-helper";
import { Link } from "react-router-dom";

const classes = new BEMHelper("not-found");

const NotFound = () => (
  <div {...classes()}>
    <h1 {...classes("title")}>404</h1>
    <h2 {...classes("subtitle")}>Page Not Found</h2>
    <p {...classes("text")}>
      Sorry, the page that you were looking for was not found. You can navigate
      back to{" "}
      <Link {...classes("link")} to="/">
        homepage
      </Link>
      .
    </p>
  </div>
);

export default NotFound;
