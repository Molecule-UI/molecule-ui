import React from "react";

import { Alert } from "../index";

export default {
  component: Alert,
  title: "Components/Alert",
};

const Template = (args) => <Alert {...args}></Alert>;

export const Default = Template.bind({});

Default.args = {
  message: "Hi i am an Alert",
  showIcon: true,
};
