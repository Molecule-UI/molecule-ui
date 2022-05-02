import { createUseStyles } from "react-jss";
import globalStyles from "../../../globalStyles";
import { InputFieldProps } from "../InputField";

const styles = createUseStyles({
  "@global": {
    "*": {
      boxSizing: "border-box",
    },
    html: {
      fontSize: "62.5%",
    },
    ...globalStyles,
  },
  "input-wrapper": {
    position: "relative",
  },
  "input-root": {
    padding: "16px 20px",
    fontFamily: "sans-serif",
    outline: "none",
    border: "1px solid black",
  },
  "icon-root": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "20px",
    opacity: ".4",
    cursor: (props: InputFieldProps) =>
      props?.allowPasswordShow ? "pointer" : "default",
  },
  "label-root": {
    fontFamily: "sans-serif",
    marginBottom: "8px",
    display: "inline-block",
  },
});

export default styles;
