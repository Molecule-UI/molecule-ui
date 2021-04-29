import React, { useState } from "react";
import cx from "classnames";
import "@molecule-ui/styles/build/molecule.min.css";

type Props = {
  color?: "primary" | "danger" | "success" | "default" | "delay" | "info";
  colorStrength?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  className?: string;
  variant?: "default" | "rounded" | "capsule";
  type?: "default" | "outlined" | "opaque" | "text";
  hoverEffect: "fill" | "opaque";
  clickEffect: "shrink" | "enlarge";
  elevated?: boolean;
  onPress: Function;
};

const Button: React.FC<Props> = (props) => {
  const {
    color = "default",
    colorStrength = 500,
    variant = "default",
    type = "default",
    hoverEffect = "fill",
    clickEffect = "shrink",
    onPress,
    elevated,
    children,
    className,
  } = props;

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isRippling, setIsRippling] = useState(false);
  const colorMap = {
    primary: "blue",
    danger: "red",
    success: "green",
    default: "gray",
    delay: "orange",
    info: "teal",
  };

  // const clickHandler = (e) => {
  //   setIsRippling(true);
  //   setCoordinates({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  //   onPress(e);
  // };

  const classes = cx(
    "text-uppercase",
    "px-10",
    "py-4",
    "cursor-pointer",
    "text-bold",
    "font-button",
    "font-button",
    "transform",
    "transition-duration-300",
    "hover:-translate-y-02",
    "backface-visibility-hidden",

    { "visited:scale-90": clickEffect === "shrink" },
    { "visited:scale-105": clickEffect === "enlarge" },
    { "bg-transparent": type === "outlined" || type === "text" },
    {
      "shadow-elevated":
        !elevated &&
        type !== "text" &&
        type !== "opaque" &&
        type !== "outlined",
    },
    { "font-white": colorStrength && type === "default" },
    { "border-radius-4": variant === "rounded" },
    { "border-radius-18": variant === "capsule" },
    {
      "border-none": type === "default" || type === "text" || type === "opaque",
    },
    { [`bg-${colorMap[color]}-${colorStrength}`]: type === "default" },
    {
      [`hover:bg-${colorMap[color]}-${+colorStrength + 100}`]:
        type === "default",
    },

    {
      [`font-${colorMap[color]}-${colorStrength}`]:
        type === "outlined" || type === "text",
    },
    { [`border-${colorMap[color]}-${colorStrength}`]: type === "outlined" },
    { "border-width-1": type === "outlined" },
    {
      [`hover:bg-${colorMap[color]}-${colorStrength}`]:
        type === "outlined" && hoverEffect === "fill",
    },
    {
      [`hover:bg-${colorMap[color]}-100-30`]:
        type === "outlined" && hoverEffect === "opaque",
    },
    { [`hover:bg-${colorMap[color]}-${"100"}-10`]: type === "text" },
    { [`bg-${colorMap[color]}-${colorStrength}-30`]: type === "opaque" },
    { [`font-${colorMap[color]}-${colorStrength}`]: type === "opaque" },
    { "hover:font-white": type === "outlined" && hoverEffect === "fill" },
    { "border-solid": type === "outlined" }
  );

  return (
    <button className={`${classes}`}>
      {children}
      <span
      // className={`button-ripple ${isRippling ? "button--animate" : ""}`}
      // style={{ top: coordinates.x + "px", left: coordinates.x + "px" }}
      // onAnimationEnd={() => setIsRippling(false)}
      ></span>
    </button>
  );
};

Button.displayName = "Button";

export default Button;
