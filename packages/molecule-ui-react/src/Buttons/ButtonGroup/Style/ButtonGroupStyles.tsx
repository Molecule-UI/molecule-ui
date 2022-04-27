import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
  },
  "bg-red": {
    background: "red",
  },

  "buttonGroup-base": {
    display: "flex",
    "&.buttonGroup-row": {
      flexDirection: "row",
      "& .buttonGroup-button": {
        "&:only-child": {
          borderRadius: "5px !important",
        },
        "&:first-of-type": {
          borderRadius: "5px 0 0 5px",
        },
        "&:last-of-type": {
          borderRadius: "0 5px 5px 0",
        },
        "&:nth-child(n+1):not(:last-child)": {
          borderRight: "none",
        },
        "&.default-button:not(:last-child)": {
          borderRight: "1px solid #fff !important",
        },
        "&.opaque-button:not(:last-child)": {
          borderRight: "1px solid #ffffffb3 !important",
        },
      },
    },
    "&.buttonGroup-column": {
      flexDirection: "column",
      alignItems: "stretch",
      width: "10%",
      "& .buttonGroup-button": {
        "&:only-child": {
          borderRadius: "5px !important",
        },
        "&:first-of-type": {
          borderRadius: "5px 5px 0px 0px",
        },
        "&:last-of-type": {
          borderRadius: "0 0px 5px 5px",
        },
        "&:nth-child(n+1):not(:last-child)": {
          borderBottom: "none",
        },
        "&.default-button:not(:last-child)": {
          borderBottom: "1px solid #fff !important",
        },
        "&.opaque-button:not(:last-child)": {
          borderBottom: "1px solid #ffffffb3 !important",
        },
      },
    },
  },
});

export default styles;
