import React from "react";

import { Alert } from "../index";

export default {
  component: Alert,
  title: "Components/Alert",
};

const Template = (args) => (
  <Alert {...args}>
    <Alert.Title>This is an Default Alert</Alert.Title>
  </Alert>
);

export const Default = Template.bind({});

export const AllColors = (args) => {
  const allVariants = [
    { color: "primary", message: "Info Alert" },
    { color: "success", message: "Success Alert" },
    { color: "danger", message: "Danger Alert" },
  ];

  return (
    <div style={{ display: "grid", gap: "10px" }}>
      {allVariants.map((variant) => (
        <Alert color={variant.color} {...args}>
          <Alert.Title>{variant.message}</Alert.Title>
        </Alert>
      ))}
    </div>
  );
};

Default.args = {};
