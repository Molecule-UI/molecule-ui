import React from "react";

import { InputField } from "../index";

export default {
  component: InputField,
  title: "Components/InputField",
};

const Template = (args) => <InputField {...args}></InputField>;

export const Default = Template.bind({});
