import { createUseStyles } from "react-jss";
import globalStyles from "../../globalStyles";
import { Props } from "../Chip";

const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
  },
  "chip-base": {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    padding: "5px 10px",
    color: "white",
    fontFamily: "sans-serif",
  },
  "container-base": {
    marginRight: (props: Props) =>
      props.closeIcon || props.notificationCount ? 15 : 0,
    fontSize: "1.4rem",
  },
  "notification-base": {
    height: "20px",
    width: (props: Props) => (props.notificationCount > 99 ? "25px" : "20px"),
    fontSize: "1.2rem",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "5px",
  },
  "close-icon": {
    transform: "rotate(45deg)",
    cursor: "pointer",
    color: "white",
  },
});

export default styles;
