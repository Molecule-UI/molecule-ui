import React, { CSSProperties } from "react";
import cx from "classnames";
import Styles from "./Style/ChipStyles";
import { AddSolid } from "@moleculeui/icons";

type color =
  | "danger" //red
  | "primary" //blue
  | "delay" //orange
  | "success" //green
  | "notification" // pink
  | "stopped" // violet
  | "info" // teal
  | "default"; // gray

type colorStrength = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface Props {
  id: number;
  color?: color;
  colorStrength?: colorStrength;
  closeIcon?: boolean;
  notificationCount?: number;
  // Todo: Add a parameter type here
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

const colorMap = {
  danger: "red",
  primary: "blue",
  delay: "orange",
  success: "green",
  notification: "pink",
  stopped: "violet",
  info: "teal",
  default: "gray",
};

const Chip: React.FC<Props> = (props) => {
  const {
    color,
    colorStrength,
    closeIcon,
    notificationCount,
    children,
    className,
    style,
    onClose,
  } = props;

  const componentStyle = Styles(props);

  const classes = cx(
    `bg-${colorMap[color]}-${colorStrength}`,
    "border-radius-999",
    `${componentStyle["chip-base"]}`,
    className
  );
  const containerClasses = cx(`${componentStyle["container-base"]}`);
  const notificationClasses = cx(
    "bg-white",
    `${componentStyle["notification-base"]}`,
    `font-${colorMap[color]}-${colorStrength}`
  );
  const iconClasses = cx(`${componentStyle["close-icon"]}`);

  return (
    <div className={classes} style={style}>
      <div className={containerClasses}>{children}</div>
      {(notificationCount || notificationCount !== 0) && (
        <div className={notificationClasses}>
          {notificationCount <= 99 ? notificationCount : "99+"}
        </div>
      )}
      {closeIcon && (
        <AddSolid
          className={iconClasses}
          customSize="16"
          onClick={() => onClose()}
          fill="#fff"
        />
      )}
    </div>
  );
};

Chip.defaultProps = {
  color: "default",
  colorStrength: 500,
  closeIcon: false,
  notificationCount: 0,
};

export default Chip;
