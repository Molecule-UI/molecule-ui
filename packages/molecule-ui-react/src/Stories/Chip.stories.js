import React from "react";

import { Chip } from "../index";

export default {
  component: Chip,
  title: "Components/Chip",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

const Template = (args) => <Chip {...args}>JavaScript</Chip>;

export const Default = Template.bind({});

export const withCloseIcon = Template.bind({});

export const withNotification = Template.bind({});

export const withCloseIconAndNotification = Template.bind({});

Default.args = {
  color: "primary",
};

withCloseIcon.args = {
  color: "primary",
  closeIcon: true,
};

withNotification.args = {
  color: "primary",
  notificationCount: 7,
};

withCloseIconAndNotification.args = {
  color: "primary",
  notificationCount: 7,
  closeIcon: true,
};
