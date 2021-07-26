import React, { useState } from "react";
import cx from "classnames";
const styles = require("@molecule-ui/styles/build/global.module.css");
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
    elevated,
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

  const clickHandler = (e) => {
    onPress(e);
  };

  const classes = cx(
    `${styles["text-uppercase"]}`,
    `${styles["cursor-pointer"]}`,
    `${styles["transform"]}`,
    `${styles["transition-duration-300"]}`,
    `${styles["backface-visibility-hidden"]}`,
    `${styles["display-flex"]}`,
    `${styles["align-items-center"]}`,
    `${styles["justify-center"]}`,
    `${styles["spacing-x-1"]}`,

    { [`${styles["hover:-translate-y-02"]}`]: !disabled },

    { [`${styles["bg-gray-500"]}`]: disabled },
    { [`${styles["p-2"]}`]: circle === true },
    { [`${styles["px-10"]}`]: circle === false },
    { [`${styles["py-4"]}`]: circle === false },
    { [`${styles["fill-white"]}`]: type === "default" },
    { [`${styles["width-100"]}`]: fullWidth === true },
    { [`${styles["text-bold"]}`]: size === "small" || size === "medium" },
    { [`${styles["text-medium"]}`]: size === "large" },
    { [`${styles["text-regular"]}`]: size === "huge" },
    { [`${styles["font-caption"]}`]: size === "small" },
    { [`${styles["font-button"]}`]: size === "medium" },
    { [`${styles["font-body"]}`]: size === "large" },
    {
      [`${styles["letter-space-softer"]}`]:
        size === "small" || fullWidth === true,
    },
    { [`${styles["font-subtitle"]}`]: size === "huge" },
    {
      [`${styles["visited:scale-90"]}`]: clickEffect === "shrink" && !disabled,
    },
    {
      [`${styles["visited:scale-105"]}`]:
        clickEffect === "enlarge" && !disabled,
    },
    {
      [`${styles["bg-transparent"]}`]: type === "outlined" || type === "text",
    },
    {
      [`${styles["shadow-elevated"]}`]:
        !elevated &&
        type !== "text" &&
        type !== "opaque" &&
        type !== "outlined" &&
        !disabled,
    },
    {
      [`${styles["font-white"]}`]:
        colorStrength && type === "default" && !disabled,
    },
    { [`${styles["font-gray-100"]}`]: disabled },
    { [`${styles["border-radius-4"]}`]: variant === "rounded" },
    { [`${styles["border-radius-999"]}`]: variant === "capsule" },
    { [`${styles["border-radius-9999"]}`]: circle === true },
    { [`${styles["border-width-1"]}`]: type === "outlined" },

    {
      [`${styles["border-none"]}`]:
        type === "default" || type === "text" || type === "opaque",
    },
    {
      [`${styles["hover:font-white"]}`]:
        type === "outlined" && hoverEffect === "fill",
    },
    { [`${styles["border-solid"]}`]: type === "outlined" },
    { [`${styles["hover:fill-white"]}`]: type === "outlined" },

    {
      [`${styles[`bg-${colorMap[color]}-${colorStrength}`]}`]:
        type === "default" && !disabled,
    },
    {
      [`${styles[`hover:bg-${colorMap[color]}-${+colorStrength + 100}`]}`]:
        type === "default" && !disabled,
    },
    {
      [`${styles[`font-${colorMap[color]}-${colorStrength}`]}`]:
        type === "outlined" || type === "text",
    },
    {
      [`${styles[`fill-${colorMap[color]}-${colorStrength}`]}`]:
        type === "outlined" || type === "text",
    },
    {
      [`${styles[`border-${colorMap[color]}-${colorStrength}`]}`]:
        type === "outlined",
    },
    {
      [`${styles[`hover:bg-${colorMap[color]}-${colorStrength}`]}`]:
        type === "outlined" && hoverEffect === "fill",
    },
    {
      [`${styles[`hover:bg-${colorMap[color]}-100-30`]}`]:
        type === "outlined" && hoverEffect === "opaque",
    },
    {
      [`${styles[`hover:bg-${colorMap[color]}-${"100"}-10`]}`]: type === "text",
    },
    {
      [`${styles[`hover:bg-${colorMap[color]}-${+colorStrength + 100}-30`]}`]:
        type === "opaque",
    },
    {
      [`${styles[`bg-${colorMap[color]}-${colorStrength}-30`]}`]:
        type === "opaque",
    },
    {
      [`${styles[`font-${colorMap[color]}-${colorStrength}`]}`]:
        type === "opaque",
    },
    {
      [`${styles[`fill-${colorMap[color]}-${colorStrength}`]}`]:
        type === "opaque",
    }
  );

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
