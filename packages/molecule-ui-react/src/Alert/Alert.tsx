import React from "react";
import cx from "classnames";
import Styles from "./Style/AlertStyles";
import {
  DoneOutline,
  InfoOutline,
  WarningOutline,
  ErrorOutline,
} from "@molecule-ui/icons";
export interface Props {
  color?: "primary" | "success" | "warning" | "danger";
  closeIcon?: boolean;
  onClose?: Function;
  showIcon?: boolean;
  message: string;
  description?: string;
  type?: "default" | "opaque";
}

interface AlertRootProps {
  type?: "default" | "opaque";
  color?: "primary" | "success" | "warning" | "danger";
}

interface AlertIconProps {
  showIcon?: boolean;
  color?: "primary" | "success" | "warning" | "danger";
  type?: "default" | "opaque";
}

const colorMap = {
  primary: "blue",
  success: "green",
  warning: "yellow",
  danger: "red",
};

const AlertRoot: React.FC<AlertRootProps> = (props) => {
  const { type, color, children } = props;
  const componentStyles = Styles();
  const classes = cx(
    componentStyles["alert-base"],
    "font-subtitle",
    "border-radius-8",
    { "font-white": type === "default" },
    { [`font-${colorMap[color]}-500`]: type === "opaque" },
    {
      [`bg-${colorMap[color]}-500`]: type === "default" && color !== "warning",
    },
    {
      [`bg-${colorMap[color]}-100`]: type === "default" && color === "warning",
    },
    {
      [`bg-${colorMap[color]}-500-30`]:
        type === "opaque" && color !== "warning",
    },
    {
      [`bg-${colorMap[color]}-100-30`]:
        type === "opaque" && color === "warning",
    }
  );

  return <div className={classes}>{children}</div>;
};

const AlertIcon: React.FC<AlertIconProps> = (props) => {
  const { type, color } = props;

  const IconMap = {
    success: <DoneOutline size="normal" />,
    primary: <InfoOutline size="normal" />,
    warning: <WarningOutline size="normal" />,
    danger: <ErrorOutline size="normal" />,
  };

  return IconMap[color];
};

const Alert: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {
      color,
      closeIcon,
      onClose,
      showIcon,
      message,
      description,
      type,
    } = props;

    return (
      <AlertRoot {...props}>{showIcon && <AlertIcon {...props} />}</AlertRoot>
      // <div className={classes}>
      //   {/* <div style={{ display: "flex", alignItems: "center" }}>
      //     <span
      //       style={{
      //         display: "flex",
      //         alignItems: "center",
      //         justifyContent: "center ",
      //       }}
      //     >
      //       {showIcon && IconMap[color]}
      //     </span>
      //     <span style={{ marginLeft: "1rem" }}>{message}</span>
      //   </div>
      //   <div></div> */}
      // </div>
    );
  }
);

Alert.defaultProps = {
  color: "primary",
  closeIcon: false,
  type: "default",
};

export default Alert;
