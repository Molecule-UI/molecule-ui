import { AddCart } from "@moleculeui/icons";
import React from "react";

import { InputField } from "../index";

export default {
  component: InputField,
  title: "Components/InputField",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

const Template = (args) => (
  <div style={{ width: "500px", boxSizing: "border-box" }}>
    <InputField {...args}></InputField>
  </div>
);

export const Default = Template.bind({});

export const TextField = Template.bind({});

export const PasswordField = Template.bind({});

Default.args = {
  placeholder: "My Text Field",
};

TextField.args = {
  type: "text",
  placeholder: "Text field",
  labelOptions: {
    label: "Enter Text",
    labelId: "text",
  },
};

PasswordField.args = {
  type: "password",
  placeholder: "Password",
  allowPasswordShow: true,
  labelOptions: {
    label: "Password",
    labelId: "Pass",
  },
};
