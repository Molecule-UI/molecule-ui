import React from "react";
import cx from "classnames";
import Styles, { accordionBorder } from "./Style/AccordionStyles";
import { AddSolid } from "@moleculeui/icons";
import { CSSProperties } from "react";

type color = "primary" | "success" | "danger" | "warning";

export interface Props {
  isOpen: boolean;
  title: string;
  color?: color;
  sideBorder?: boolean;
  onClick: (isOpen: boolean) => void;
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
}

interface AccordionBorderProps {
  color?: color;
}

interface AccordionTitleProps extends Props {}
interface AccordionContentProps extends Props {}

const colorMap = {
  primary: "blue",
  success: "green",
  warning: "yellow",
  danger: "red",
};

const AccordionBorder: React.FC<AccordionBorderProps> = (props) => {
  const { color } = props;
  const componentStyle = accordionBorder();
  const classes = cx(
    `bg-${colorMap[color]}-500`,
    `${componentStyle["accordion-border"]}`
  );

  return <div className={classes}></div>;
};

const AccordionTitle: React.FC<AccordionTitleProps> = (props) => {
  const { isOpen, onClick, title } = props;
  const componentStyle = Styles(props);
  const titleClasses = cx(`${componentStyle["accordion-title"]}`);
  const iconClasses = cx(`${componentStyle["accordion-icon"]}`);

  const onClickHandle = () => {
    onClick && onClick(!isOpen);
  };

  return (
    <div onClick={onClickHandle} className={titleClasses}>
      <span>{title}</span>
      <AddSolid size="normal" className={iconClasses} />
    </div>
  );
};

const AccordionContent: React.FC<AccordionContentProps> = (props) => {
  const { children } = props;
  const componentStyle = Styles(props);
  const contentClasses = cx(`${componentStyle["accordion-content"]}`);

  return <div className={contentClasses}>{children}</div>;
};

const Accordion: React.FC<Props> & { Title?: React.FC } = (props) => {
  const { color, sideBorder, children, className, style } = props;
  const componentStyle = Styles({ ...props });

  const classes = cx(
    "border-radius-4",
    `${componentStyle["accordion-base"]}`,
    `bg-${colorMap[color]}-500-30`,
    className
  );

  return (
    <div className={classes} style={style}>
      {sideBorder && <AccordionBorder color={color} />}
      <AccordionTitle {...props} />
      <AccordionContent {...props}>{children}</AccordionContent>
    </div>
  );
};

Accordion.defaultProps = {
  color: "success",
  sideBorder: true,
};

export default Accordion;
