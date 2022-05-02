import { createUseStyles } from "react-jss";
import globalStyles from "../../globalStyles";
const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
    // ...globalStyles,
  },
  "alert-base": {
    padding: "1.5rem 2rem",
    fontFamily: "sans-serif",
    display: "flex",
    alignItems: "center",
  },
  "icon-fill-white": {
    fill: "#fff",
  },
  "icon-fill-primary": {
    fill: "#2176ff",
  },
  "icon-fill-success": {
    fill: "#14cc60",
  },
  "icon-fill-warning": {
    fill: "#fdf866",
  },
  "icon-fill-danger": {
    fill: "#e60012",
  },

  "icon-base": {
    alignSelf: "flex-start",
  },
  "icon-container": {
    cursor: "pointer",
    display: "flex",
    alignSelf: "flex-start",
  },
  "close-icon-container": {
    marginLeft: "auto",
  },

  "content-base": {
    margin: "0 1rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "justify",
    "& > :not(:last-child)": {
      marginBottom: ".5rem",
    },
  },
});

export default styles;
