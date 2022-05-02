import { createUseStyles } from "react-jss";
import globalStyles from "../../../globalStyles";
const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
    h4: {
      margin: 0,
      textAlign: "left",
    },
    ...globalStyles,
  },
});

export default styles;
