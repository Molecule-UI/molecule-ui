import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  "@global": {
    html: {
      fontSize: "62.5%",
    },
  },

  "profile-card-base": {
    height: 300,
    width: 250,
    borderRadius: 12,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    zIndex: 1,
  },
  "profile-card-cover-base": {
    "&:after": {
      content: '""',
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 93.43%)",
    },
  },
  "covered-image": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "spaced-image": {
    width: "90%",
    height: "75%",
    objectFit: "cover",
    borderRadius: 12,
    marginBottom: "1rem",
  },
  "bottom-bar-base": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: ".5rem",
    zIndex: 3,
    "& > .title": {
      fontSize: 20,
      fontFamily: "sans-serif",
    },
    "& > .icon-container": {
      cursor: "pointer",
      transition: "all .1s",
      "&:hover": {
        transform: "scale(.95)",
      },
    },
    "& > .hidden": {
      pointerEvents: "none !important",
    },
  },
  "bottom-bar-covered-base": {
    position: "absolute",
    bottom: ".5rem",
    "& > .icon-container": {
      backgroundColor: "white",
      borderRadius: "50%",
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& > .title": {
      color: "#fff",
    },
  },
  "bottom-bar-spaced-base": {
    "& > .icon-container": {
      borderRadius: "50%",
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

export default styles;
