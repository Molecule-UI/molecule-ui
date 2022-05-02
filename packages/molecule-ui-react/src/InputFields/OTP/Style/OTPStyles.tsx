import { createUseStyles } from "react-jss";
import globalStyles from "../../../globalStyles";

const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
    "input::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button":
      {
        "-webkit-appearance": " none",
        margin: 0,
      },
    "input[type=number]": {
      "-moz-appearance": "textfield",
    },
    ...globalStyles,
  },
  "single-input": {
    border: "none",
    borderBottom: "1px solid grey",
    width: "30px",
    textAlign: "center",
    appearance: "textfield",
    outline: "none",

    "&:not(:last-child)": {
      marginRight: "10px",
    },
  },
});

export default styles;
