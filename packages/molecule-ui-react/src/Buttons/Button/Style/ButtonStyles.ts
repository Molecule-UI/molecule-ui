import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
  },
  "button-base": {
    textTransform: "uppercase",
    cursor: "pointer",
    transitionDuration: "300ms",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    boxSizing: "border-box",
    "& > :not(:last-child)": {
      marginRight: "0.5rem",
    },
  },
  "hover-effect": {
    "&:hover": {
      transform: " translateY(-2px) scale(0.95)  perspective(1px) ",
    },
  },
  disabled: {
    cursor: "not-allowed",
  },
  "square-padding": {
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  circle: {
    padding: "0.5rem",
    borderRadius: "9999px",
  },
  outlined: {
    borderWidth: "1px",
    borderStyle: "solid",
  },
  "border-none": {
    border: "none",
  },
  "letter-space-softer": {
    letterSpacing: "0.05rem",
  },
});

export default styles;
