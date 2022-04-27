import React from "react";

import { Avatar } from "../index";

export default {
  component: Avatar,
  title: "Components/Avatar",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

const Template = (args) => <Avatar {...args}></Avatar>;

export const Default = Template.bind({});

Default.args = {};
