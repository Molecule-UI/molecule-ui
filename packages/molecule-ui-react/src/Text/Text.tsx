import React, { CSSProperties } from "react";
import cx from "classnames";
import Styles from "./Style/TextStyles";

type Size =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "body"
  | "button"
  | "caption"
  | "note";

type Weight =
  | "thin"
  | "extralight"
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export interface Props {
  className?: string;
  style?: CSSProperties;
  size?: Size;
  weight?: Weight;
  textAlign?: "left" | "center" | "right";
  children: React.ReactNode;
}

const Text: React.FC<Props> = (props) => {
  const { className, style, children, size, weight } = props;

  const componentStyle = Styles(props);

  const classes = cx(
    className,
    `font-${size}`,
    `text-${weight}`,
    `hover:text-${weight}`,
    componentStyle["heading-root"]
  );

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

Text.defaultProps = {
  size: "h4",
  weight: "regular",
  textAlign: "left",
};

export default Text;
