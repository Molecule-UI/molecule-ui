import { AddCart } from "@moleculeui/icons";
import React from "react";

import { InputField } from "../index";

export default {
  component: InputField,
  title: "Components/InputField",
};

const Template = (args) => (
  <div style={{ width: "500px", boxSizing: "border-box" }}>
    <InputField {...args}></InputField>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  placeHolder: "johndoe@example.com",
  type: "text",
  labelOptions: {
    label: "Email",
    labelId: "Email",
  },
  allowPasswordShow: true,
  isPasswordVisible: true,
  onIconClick: (isPasswordVisible) => {
    console.log(isPasswordVisible);
  },
};
