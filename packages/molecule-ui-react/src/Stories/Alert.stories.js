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

export const DefaultAlerts = (args) => {
  const allVariants = [
    { color: "primary", message: "Info Alert" },
    { color: "success", message: "Success Alert" },
    { color: "danger", message: "Danger Alert" },
  ];

  return (
    <div style={{ display: "grid", gap: "10px" }}>
      {allVariants.map((variant) => (
        <Alert {...args} color={variant.color}>
          <Alert.Title>{variant.message}</Alert.Title>
        </Alert>
      ))}
    </div>
  );
};

export const OpaqueAlerts = (args) => {
  const allVariants = [
    { color: "primary", message: "Info Alert" },
    { color: "success", message: "Success Alert" },
    { color: "danger", message: "Danger Alert" },
  ];

  return (
    <div style={{ display: "grid", gap: "10px" }}>
      {allVariants.map((variant) => (
        <Alert {...args} color={variant.color}>
          <Alert.Title>{variant.message}</Alert.Title>
        </Alert>
      ))}
    </div>
  );
};

export const IconAlerts = (args) => {
  const allVariants = [
    { message: "Info Alert With Icon", showIcon: true },
    { message: "Info Alert Without Icon", showIcon: false },
    {
      message: "Info Alert With Icon and Close Icon",
      showIcon: true,
      showCloseIcon: true,
    },
    {
      message: "Info Alert Without Icon and Close Icon",
      showIcon: false,
      showCloseIcon: true,
    },
  ];

  return (
    <div style={{ display: "grid", gap: "10px" }}>
      {allVariants.map((variant) => (
        <Alert
          {...args}
          showCloseIcon={variant?.showCloseIcon}
          showIcon={variant.showIcon}
        >
          <Alert.Title>{variant.message}</Alert.Title>
        </Alert>
      ))}
    </div>
  );
};

export const AlertWithDescription = (args) => {
  return (
    <Alert {...args}>
      <Alert.Title>Alert Title</Alert.Title>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
        aliquam quasi ipsa facilis, ut fugit nobis eveniet distinctio, maxime
        praesentium itaque minima quaerat dolores est ad autem magni esse
        aperiam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Dignissimos porro facilis est iste debitis sit possimus ad officiis,
        totam voluptas quibusdam similique eius qui temporibus corporis autem
        quaerat ab expedita?
      </span>
    </Alert>
  );
};

Default.args = {};

DefaultAlerts.args = {
  type: "default",
};

OpaqueAlerts.args = {
  type: "opaque",
};

AlertWithDescription.args = {
  type: "default",
  color: "primary",
  showCloseIcon: true,
};

IconAlerts.args = {
  color: "primary",
};
