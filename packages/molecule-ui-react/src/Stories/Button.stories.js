import React from "react";
// import mdx from "./ButtonDoc.stories.mdx";
import { Button, MoleculeProvider } from "../index";
import { AddCart } from "@moleculeui/icons";
import { ThemeProvider } from "react-jss";
export default {
  component: Button,
  title: "Components/Button",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Default = Template.bind({});

export const Variants = (args) => {
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

/**
 * Only use me once per page for the preferred user action.
 */
export const DefaultButtons = (args) => {
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

export const OutlinedButtons = (args) => {
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
        <Button key={variant.color} color={variant.color} {...args}>
          {variant.children}
        </Button>
      ))}
    </div>
  );
};

export const OpaqueButtons = (args) => {
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
        <Button key={variant.color} color={variant.color} {...args}>
          {variant.children}
        </Button>
      ))}
    </div>
  );
};

export const TextButtons = (args) => {
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
        <Button key={variant.color} color={variant.color} {...args}>
          {variant.children}
        </Button>
      ))}
    </div>
  );
};

export const Sizes = (args) => {
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

export const IconButton = (args) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    >
      <Button {...args}>
        <AddCart />
      </Button>
      <Button {...args}>
        <AddCart />
        <span>Add To Cart</span>
      </Button>

      <Button {...args}>
        <span>Add To Cart</span>
        <AddCart />
      </Button>
    </div>
  );
};

const commonArgs = {
  color: "primary",
};

Default.args = {
  onPress: () => console.log("Hii"),
  children: "Hello",
};

DefaultButtons.args = {
  type: "default",
};

DefaultButtons.parameters = {
  docs: {
    storyDescription: "I am default",
  },
};

OutlinedButtons.args = {
  type: "outlined",
};

OpaqueButtons.args = {
  type: "opaque",
};

TextButtons.args = {
  type: "text",
};

Variants.args = {
  ...commonArgs,
};

Sizes.args = {
  ...commonArgs,
};

FullWidth.args = {
  ...commonArgs,
};

IconButton.args = {
  ...commonArgs,
};
