import { createUseStyles } from "react-jss";
import globalStyles from "../../globalStyles";
import { Props } from "../Text";

const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
    ...globalStyles,
  },
  "heading-root": {
    fontFamily: "sans-serif",
    textAlign: (props: Props) => props.textAlign,
  },
});

export default styles;
