import React from "react";

import { Button } from "../index";
export default {
  component: Button,
  title: "Components/Button",
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Default = Template.bind({});

Default.args = {
  onPress: () => console.log("Hii"),
  children: "Hello",
};

export const AllColors = (args) => {
  const allVariants = [
    { children: "Primary", color: "primary" },
    { children: "Danger", color: "danger" },
    { children: "Success", color: "success" },
    { children: "Default", color: "default" },
    { children: "Delay", color: "delay" },
    { children: "Info", color: "info" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {allVariants.map((variant) => (
        <Button key={variant.color} {...args} color={variant.color}>
          {variant.children}
        </Button>
      ))}
    </div>
  );
};

export const AllVariants = (args) => {
  const allVariants = [
    {
      children: "Default",
      variant: "default",
    },
    { children: "Rounded", variant: "rounded" },
    { children: "Capsule", variant: "capsule" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {allVariants.map((variant) => (
        <Button key={variant.variant} {...args} variant={variant.variant}>
          {variant.children}
        </Button>
      ))}
    </div>
  );
};

export const AllTypes = (args) => {
  const allVariants = [
    { children: "Default", type: "default" },
    { children: "Outlined", type: "outlined" },
    { children: "Opaque", type: "opaque" },
    { children: "Text", type: "text" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {allVariants.map((variant) => (
        <Button key={variant.type} {...args} type={variant.type}>
          {variant.children}
        </Button>
      ))}
    </div>
  );
};
export const AllSize = (args) => {
  const allVariants = [
    { children: "Small", size: "small" },
    { children: "Medium", size: "medium" },
    { children: "Large", size: "large" },
    { children: "Huge", size: "huge" },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    >
      {allVariants.map((variant) => (
        <Button key={variant.size} {...args} size={variant.size}>
          {variant.children}
        </Button>
      ))}
    </div>
  );
};

export const FullWidth = (args) => {
  return (
    <Button {...args} fullWidth={true}>
      Full Width
    </Button>
  );
};

export const Disabled = (args) => {
  return (
    <Button {...args} disabled={true}>
      Disabled
    </Button>
  );
};

const commonArgs = {
  color: "primary",
};

AllVariants.args = {
  ...commonArgs,
};

AllTypes.args = {
  ...commonArgs,
};

AllSize.args = {
  ...commonArgs,
};

FullWidth.args = {
  ...commonArgs,
};
