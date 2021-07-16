import React from "react";
import "./Spinner.css";

import BEMHelper from "react-bem-helper";

const classes = new BEMHelper("spinner");

const Spinner = () => (
  <div {...classes()}>
    <div {...classes("dot")} />
  </div>
);

export default Spinner;
