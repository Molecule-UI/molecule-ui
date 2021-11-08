import React from "react";
import cx from "classnames";
import Styles from "./Style/AlertTitleStyles";
const AlertTitle: React.FC = (props) => {
  const { children } = props;
  const componentStyles = Styles();
  const classes = cx("font-subtitle", `${componentStyles["alert-title-base"]}`);
  return <h4 className={classes}>{children}</h4>;
};

export default AlertTitle;
