import React, { FC } from "react";
import "./ErrorFallback.css";

import BEMHelper from "react-bem-helper";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { FallbackProps } from "react-error-boundary";
import { Button } from "@material-ui/core";
import IconMessage from "../IconMessage";

const classes = new BEMHelper("error-fallback");

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <IconMessage {...classes()} Icon={ErrorOutlineIcon}>
    <p {...classes("title")}>Oh no, something went wrong.</p>
    <p>Error: {error.message}</p>
    <Button variant="outlined" onClick={resetErrorBoundary}>
      Try again
    </Button>
  </IconMessage>
);

export default ErrorFallback;
