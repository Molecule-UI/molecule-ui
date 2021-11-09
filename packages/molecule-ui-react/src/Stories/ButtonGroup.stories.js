import React from "react";
import { Button, ButtonGroup } from "../index";

export default {
  component: Button,
  title: "Components/ButtonGroup",
};

const Template = (args) => (
  <ButtonGroup {...args}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
);

export const Default = Template.bind({});
