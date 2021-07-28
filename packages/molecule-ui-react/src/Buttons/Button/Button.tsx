import React, { useState } from "react";
import cx from "classnames";
import Styles from "./Style/ButtonStyles";
// const styles = require("@molecule-ui/styles/build/global.module.css");
export interface Props {
  /**Color of the button */
  color?: "primary" | "danger" | "success" | "default" | "delay" | "info";
  colorStrength?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  className?: string;
  variant?: "default" | "rounded" | "capsule";
  type?: "default" | "outlined" | "opaque" | "text";
  hoverEffect?: "fill" | "opaque";
  clickEffect?: "shrink" | "enlarge";
  size?: "small" | "medium" | "large" | "huge";
  elevated?: boolean;
  fullWidth?: boolean;
  circle?: boolean;
  disabled?: boolean;
  onPress: Function;
}

export const Button: React.FC<Props> = React.forwardRef<
  HTMLButtonElement,
  Props
>((props, ref) => {
  const {
    color = "default",
    colorStrength = 500,
    variant = "default",
    type = "default",
    hoverEffect = "fill",
    clickEffect = "shrink",
    size = "medium",
    fullWidth = false,
    circle = false,
    disabled = false,
    onPress,
    elevated = true,
    children,
    className,
  } = props;
  const [test, setTest] = useState();
  const colorMap = {
    primary: "blue",
    danger: "red",
    success: "green",
    default: "gray",
    delay: "orange",
    info: "teal",
  };
  const componentStyles = Styles();
  const clickHandler = (e) => {
    onPress(e);
  };
  console.log(componentStyles);
  const classes = cx(
    { "text-medium": size === "large" },
    { "text-regular": size === "huge" },
    { "font-caption": size === "small" },
    { "font-button": size === "medium" },
    { "font-body": size === "large" },
    { "font-subtitle": size === "huge" },
    { "bg-gray-500": disabled },
    { "font-gray-100": disabled },
    { "fill-white": type === "default" },
    {
      [`hover:bg-${colorMap[color]}-${+colorStrength + 100}`]:
        type === "default" && !disabled,
    },
    {
      [`fill-${colorMap[color]}-${colorStrength}`]:
        type === "outlined" || type === "text",
    },
    {
      [`font-${colorMap[color]}-${colorStrength}`]:
        type === "outlined" || type === "text",
    },
    {
      [`hover:bg-${colorMap[color]}-${colorStrength}`]:
        type === "outlined" && hoverEffect === "fill",
    },
    {
      "hover:font-white": type === "outlined" && hoverEffect === "fill",
    },
    {
      [`border-${colorMap[color]}-${colorStrength}`]: type === "outlined",
    },
    {
      "shadow-elevated":
        elevated &&
        type !== "text" &&
        type !== "opaque" &&
        type !== "outlined" &&
        !disabled,
    },
    {
      "font-white": colorStrength && type === "default" && !disabled,
    },
    { "width-100": fullWidth === true },
    {
      "bg-transparent": type === "outlined" || type === "text",
    },
    {
      [`hover:bg-${colorMap[color]}-${+colorStrength + 100}-30`]:
        type === "opaque",
    },
    {
      [`bg-${colorMap[color]}-${colorStrength}-30`]: type === "opaque",
    },
    {
      [`font-${colorMap[color]}-${colorStrength}`]: type === "opaque",
    },
    {
      [`fill-${colorMap[color]}-${colorStrength}`]: type === "opaque",
    },
    {
      [`bg-${colorMap[color]}-${colorStrength}`]:
        type === "default" && !disabled,
    },
    {
      [`hover:bg-${colorMap[color]}-${"100"}-10`]: type === "text",
    },
    `${componentStyles["button-base"]}`,
    {
      [`${componentStyles["square-padding"]}`]: circle === false,
    },
    { [`${componentStyles["circle"]}`]: circle === true },
    {
      "text-bold": size === "small" || size === "medium",
    },
    {
      [`${componentStyles["border-none"]}`]:
        type === "default" || type === "text" || type === "opaque",
    },
    { [`${componentStyles["outlined"]}`]: type === "outlined" },
    {
      [`${componentStyles["letter-space-softer"]}`]:
        size === "small" || fullWidth === true,
    }
  );
  // `${styles["transform"]}`,

  // { [`${styles["hover:-translate-y-02"]}`]: !disabled },

  // {
  //   [`${styles["visited:scale-90"]}`]: clickEffect === "shrink" && !disabled,
  // },
  // {
  //   [`${styles["visited:scale-105"]}`]:
  //     clickEffect === "enlarge" && !disabled,
  // },

  //

  // { [`${styles["border-radius-4"]}`]: variant === "rounded" },
  // { [`${styles["border-radius-999"]}`]: variant === "capsule" },
  // { [`${styles["border-radius-9999"]}`]: circle === true },

  // { [`${styles["hover:fill-white"]}`]: type === "outlined" },

  return (
    <button
      ref={ref}
      onClick={(e) => clickHandler(e)}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
