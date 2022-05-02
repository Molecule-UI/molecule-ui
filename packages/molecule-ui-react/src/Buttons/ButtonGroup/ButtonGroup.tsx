import React, { Children, ReactElement, PropsWithChildren } from "react";
import cx from "classnames";
import Styles from "./Style/ButtonGroupStyles";
import { Props as ButtonProps } from "../Button/Button";
export interface Props {
  direction?: "row" | "column";
  ofSameColor?: boolean;
  children: React.ReactNode;
}

interface ButtonGroupRootProps extends Props {}

const ButtonGroupRoot: React.FC<ButtonGroupRootProps> = (props) => {
  const { direction, children } = props;
  const componentsStyles = Styles();
  const className = cx(
    `${componentsStyles["buttonGroup-base"]}`,
    {
      "buttonGroup-row": direction === "row",
    },
    { "buttonGroup-column": direction === "column" }
  );
  return <div className={className}>{children}</div>;
};

const ButtonGroup: React.FC<Props> = (props) => {
  const { children, ofSameColor } = props;
  const color = children[0].props.color;
  return (
    <ButtonGroupRoot {...props}>
      {Children.map(children, (child) => {
        const item = child as ReactElement<PropsWithChildren<ButtonProps>>;
        const childClasses = cx(
          "buttonGroup-button",
          {
            "default-button": item.props.type === "default",
          },
          { "opaque-button": item.props.type === "opaque" }
        );
        return React.cloneElement(item, {
          hoverEffect: false,
          className: childClasses,
          variant: "default",
          type: item.props.type !== "text" ? item.props.type : "default",
          elevated: false,
          color: ofSameColor ? color : item.props.color,
        });
      })}
    </ButtonGroupRoot>
  );
};

ButtonGroup.defaultProps = {
  direction: "row",
  ofSameColor: true,
};

export default ButtonGroup;
