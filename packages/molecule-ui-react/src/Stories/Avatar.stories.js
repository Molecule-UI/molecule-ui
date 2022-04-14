import React from "react";

import { Avatar } from "../index";

export default {
  component: Avatar,
  title: "Components/Avatar",
};

const Template = (args) => <Avatar {...args}></Avatar>;

export const Default = Template.bind({});

Default.args = {};
