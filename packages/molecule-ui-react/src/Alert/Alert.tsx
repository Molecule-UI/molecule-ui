import React from "react";
import cx from "classnames";
import Styles from "./Style/AlertStyles";
import AlertTitle from "./AlertTitle/AlertTitle";
import {
  DoneOutline,
  InfoOutline,
  WarningOutline,
  ErrorOutline,
  CloseSolid,
} from "@moleculeui/icons";
import { CSSProperties } from "react";

export interface Props {
  color?: "primary" | "success" | "danger";
  showCloseIcon?: boolean;
  onClose?: Function;
  showIcon?: boolean;
  type?: "default" | "opaque";
  className?: string;
  style?: CSSProperties;
}

interface AlertRootProps {
  type?: "default" | "opaque";
  color?: "primary" | "success" | "danger";
  className?: string;
  style?: CSSProperties;
}

interface AlertIconProps extends AlertRootProps {}

interface AlertCloseIcon extends AlertRootProps {
  onClose?: Function;
}

const colorMap = {
  primary: "blue",
  success: "green",
  warning: "yellow",
  danger: "red",
};

const AlertRoot: React.FC<AlertRootProps> = (props) => {
  const { type, color, children, className, style } = props;
  const componentStyles = Styles();
  const classes = cx(
    componentStyles["alert-base"],
    "font-subtitle",
    "border-radius-8",
    { "font-white": type === "default" },
    { [`font-${colorMap[color]}-500`]: type === "opaque" },
    {
      [`bg-${colorMap[color]}-500`]: type === "default",
    },
    {
      [`bg-${colorMap[color]}-500-30`]: type === "opaque",
    },
    className
  );

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
};

const AlertIcon: React.FC<AlertIconProps> = (props) => {
  const { type, color } = props;
  const componentStyles = Styles();

  const IconClassName = cx(
    {
      [`${componentStyles["icon-fill-white"]}`]: type === "default",
    },
    { [`${componentStyles[`icon-fill-${color}`]}`]: type === "opaque" },
    `${componentStyles["icon-base"]}`
  );
  const ContainerClasses = cx(`${componentStyles["icon-container"]}`);

  const IconMap = {
    success: DoneOutline,
    primary: InfoOutline,
    warning: WarningOutline,
    danger: ErrorOutline,
  };

  let Component = IconMap[color];

  return (
    <div className={ContainerClasses}>
      <Component size={"normal"} className={IconClassName} />
    </div>
  );
};

const AlertContent: React.FC = (props) => {
  const { children } = props;
  const componentStyles = Styles();
  const classes = cx(`${componentStyles["content-base"]}`, "font-body");
  return <div className={classes}>{children}</div>;
};

const AlertCloseIcon: React.FC<AlertCloseIcon> = (props) => {
  const { type, color, onClose } = props;

  const onClick = () => {
    onClose && onClose();
  };

  const componentStyles = Styles();

  const IconClassName = cx(
    {
      [`${componentStyles["icon-fill-white"]}`]: type === "default",
    },
    { [`${componentStyles[`icon-fill-${color}`]}`]: type === "opaque" },
    `${componentStyles["icon-base"]}`,
    `${componentStyles["close-icon-base"]}`
  );

  const ContainerClasses = cx(
    `${componentStyles["close-icon-container"]}`,
    `${componentStyles["icon-container"]}`
  );

  return (
    <div onClick={onClick} className={ContainerClasses}>
      <CloseSolid className={IconClassName} size="normal" />
    </div>
  );
};

const Alert: React.FC<Props> & { Title?: React.FC } = React.forwardRef<
  HTMLDivElement,
  Props
>((props, ref) => {
  const { showCloseIcon, showIcon, children } = props;

  return (
    <AlertRoot {...props}>
      {showIcon && <AlertIcon {...props} />}
      <AlertContent>{children}</AlertContent>
      {showCloseIcon && <AlertCloseIcon {...props} />}
    </AlertRoot>
  );
});

Alert.Title = AlertTitle;

Alert.defaultProps = {
  color: "primary",
  showCloseIcon: false,
  type: "default",
  showIcon: true,
};

export default Alert;
