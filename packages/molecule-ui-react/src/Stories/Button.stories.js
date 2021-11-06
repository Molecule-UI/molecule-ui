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
