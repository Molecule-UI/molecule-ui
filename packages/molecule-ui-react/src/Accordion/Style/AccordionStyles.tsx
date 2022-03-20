import { createUseStyles } from "react-jss";
import { Props } from "../Accordion";
const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
    },
  },
  "accordion-base": {
    boxSizing: "border-box",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    fontFamily: "sans-serif",
    padding: "18px 15px ",
  },

  "accordion-title": {
    fontSize: "1.6rem",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    userSelect: "none",

    "&:hover": {
      cursor: "pointer",
    },
  },

  "accordion-content": {
    fontSize: "1.4rem",
    overflow: "hidden",
    fontWeight: "300",
    userSelect: "none",
    textAlign: "left",
    paddingTop: (props: Props) => (props.isOpen ? "10px" : "0"),
    maxHeight: (props: Props) => (props.isOpen ? "1000px" : "0"),
    transition: (props: Props) =>
      props.isOpen
        ? "max-height 0.3s ease-in-out, padding-top .2s"
        : "max-height 0.3s cubic-bezier(0, 1, 0, 1), padding-top .2s",
  },
  "accordion-icon": {
    alignSelf: "center",
    marginLeft: "auto",
    transition: "all 0.35s ease",
    transform: (props: Props) => (props.isOpen ? "rotateZ(135deg)" : ""),
  },
});

export const accordionBorder = createUseStyles({
  "accordion-border": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "5px",
    height: "100%",
    borderRadius: "4px 0 0 4px",
    marginRight: "10px",
  },
});

export default styles;
