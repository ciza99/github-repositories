import { Button, TextField, withStyles } from "@material-ui/core";

export const WhiteTextField = withStyles({
  root: {
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "#ededed",
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

export const WhiteButton = withStyles({
  root: {
    borderColor: "white",
    color: "white",
  },
})(Button);
