import React from "react";
import cx from "classnames";
import Styles from "./Style/AvatarStyles";
import { CSSProperties } from "react";

export interface Props {
  src?: string;
  showStatusDot?: boolean;
  status?: "active" | "inactive";
  size?: "tiny" | "small" | "normal" | "large";
  alt?: string;
  className?: string;
  style: CSSProperties;
}

const Avatar: React.FC<Props> = (props) => {
  const { src, showStatusDot, status, alt, className, style } = props;

  const componentStyle = Styles(props);

  const classes = cx(`${componentStyle["avatar-base"]}`);
  const imageClasses = cx(
    `${componentStyle["avatar-image"]}`,
    "border-radius-999"
  );
  const statusDotClasses = cx(
    "border-radius-999",
    `${componentStyle["status-dot"]}`,
    { "bg-green-500": status === "active" },
    { "bg-red-500": status === "inactive" },
    className
  );

  return (
    <div style={style} className={classes}>
      <img className={imageClasses} src={src} alt={alt || "user"} />
      {showStatusDot && <div className={statusDotClasses}></div>}
    </div>
  );
};

Avatar.defaultProps = {
  showStatusDot: true,
  status: "inactive",
  size: "normal",
  src: "http://www.gravatar.com/avatar/?d=mp",
};

export default Avatar;
