import { createUseStyles } from "react-jss";
import { Props } from "../Text";

const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
  },
  "heading-root": {
    fontFamily: "sans-serif",
    textAlign: (props: Props) => props.textAlign,
  },
});

export default styles;
