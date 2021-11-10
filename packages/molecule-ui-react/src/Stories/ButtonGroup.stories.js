import React from "react";
import { Button, ButtonGroup } from "../index";
import { Send } from "@molecule-ui/icons";
export default {
  component: ButtonGroup,
  title: "Components/ButtonGroup",
};

const Template = (args) => (
  <ButtonGroup {...args}>
    <Button color="primary" elevated>
      One
    </Button>
    <Button color="primary" elevated>
      Two
    </Button>
    <Button color="primary" elevated>
      Three
    </Button>
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  direction: "row",
};

export const ColumnView = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button color="primary" elevated>
        One
      </Button>
      <Button color="primary" elevated>
        Two
      </Button>
      <Button color="primary" elevated>
        Three
      </Button>
    </ButtonGroup>
  );
};

export const OutlineButtonGroup = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button type="outlined" color="primary" elevated>
        One
      </Button>
      <Button type="outlined" color="success" elevated>
        Two
      </Button>
      <Button type="outlined" color="danger" elevated>
        Three
      </Button>
    </ButtonGroup>
  );
};

export const OpaqueButtonGroup = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button type="opaque" color="primary" elevated>
        One
      </Button>
      <Button type="opaque" color="success" elevated>
        Two
      </Button>
      <Button type="opaque" color="danger" elevated>
        Three
      </Button>
    </ButtonGroup>
  );
};
ColumnView.args = {
  direction: "column",
};
