import { Button, TextField, withStyles } from "@material-ui/core";

export const WhiteTextField = withStyles({
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

export const WhiteButton = withStyles({
  root: {
    borderColor: "white",
    color: "white",
  },
})(Button);
