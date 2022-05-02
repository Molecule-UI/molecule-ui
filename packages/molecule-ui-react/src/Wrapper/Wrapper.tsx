import React, { CSSProperties } from "react";
import cx from "classnames";
import Styles from "./Style/WrapperStyles";

export interface Props {
  className?: string;
  style?: CSSProperties;
  elevation?: 1 | 2 | 3 | 4 | 5;
  padding?: "sm" | "md" | "lg" | "xl";
  display?: "grid" | "flex";
  rows?: number;
  cols?: number;
  flexDirection?: "column" | "row";
  verticalAlign?: "top" | "middle" | "down";
  horizontalAlign?: "left" | "center" | "right";
  gap?: number;
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = (props) => {
  const { className, style, children, elevation } = props;

  const componentStyle = Styles(props);

  const classes = cx(
    className,
    componentStyle["wrapper-root"],
    { "shadow-softer": elevation === 1 },
    { "shadow-soft": elevation === 2 },
    { "shadow-elevated": elevation === 3 },
    { "shadow-hard": elevation === 4 },
    { "shadow-harder": elevation === 5 },
    "border-radius-8"
  );

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

Wrapper.defaultProps = {
  flexDirection: "row",
  display: "flex",
  verticalAlign: "top",
  horizontalAlign: "left",
  padding: "md",
  elevation: 3,
};

export default Wrapper;
