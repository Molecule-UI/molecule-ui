import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
    },
  },
  "alert-base": {
    padding: "1.5rem 2rem",
    textTransform: "uppercase",
    fontFamily: "sans-serif",
  },
  "icon-fill-white": {
    fill: "#fff",
  },
});

export default styles;
