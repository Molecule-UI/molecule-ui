import React from "react";
import cx from "classnames";
import Styles from "./Style/ButtonStyles";
import { CSSProperties } from "react";
export interface Props {
  color?: "primary" | "danger" | "success" | "default" | "delay" | "info";
  colorStrength?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  className?: string;
  variant?: "default" | "rounded" | "capsule";
  type?: "default" | "outlined" | "opaque" | "text";
  size?: "small" | "medium" | "large" | "huge";
  elevated?: boolean;
  fullWidth?: boolean;
  circle?: boolean;
  disabled?: boolean;
  onPress: Function;
  hoverEffect: boolean;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = React.forwardRef<
  HTMLButtonElement,
  Props
>((props, ref) => {
  const {
    color,
    colorStrength,
    variant,
    type,
    size,
    fullWidth,
    circle,
    disabled,
    onPress,
    elevated,
    children,
    className,
    hoverEffect,
    style,
  } = props;
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
        (type === "outlined" || type === "text") && !disabled,
    },
    {
      [`font-${colorMap[color]}-${colorStrength}`]:
        type === "outlined" || type === "text",
    },
    {
      [`hover:bg-${colorMap[color]}-${colorStrength}`]:
        type === "outlined" && !disabled,
    },
    {
      "hover:font-white": type === "outlined" && !disabled,
    },
    { "border-radius-4": variant === "rounded" },
    { "border-radius-999": variant === "capsule" },
    { "border-radius-9999": circle === true },
    {
      [`border-${colorMap[color]}-${colorStrength}`]:
        type === "outlined" && !disabled,
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
    { "fill-gray-100": disabled },
    { "hover:fill-white": type === "outlined" && !disabled },
    {
      [`hover:bg-${colorMap[color]}-${+colorStrength + 100}-30`]:
        type === "opaque" && !disabled,
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
      [`hover:bg-${colorMap[color]}-${"100"}-10`]: type === "text" && !disabled,
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
    },
    {
      [`${componentStyles["hover-effect"]}`]: !disabled && hoverEffect,
    },
    {
      [`${componentStyles["disabled"]}`]: disabled,
    },
    className
  );

  return (
    <button
      ref={ref}
      onClick={(e) => clickHandler(e)}
      className={classes}
      disabled={disabled}
      style={{ ...style }}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
Button.defaultProps = {
  color: "default",
  colorStrength: 500,
  variant: "default",
  type: "default",
  size: "medium",
  fullWidth: false,
  circle: false,
  disabled: false,
  elevated: true,
  hoverEffect: true,
};

export default Button;
