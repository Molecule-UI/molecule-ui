import React from "react";

import { Wrapper } from "../index";

export default {
  component: Wrapper,
  title: "Components/Wrapper",
};

const Template = (args) => (
  <Wrapper {...args}>
    <div>One</div>
    <div>two</div>
    <div>Three</div>
    <div>Three</div>
  </Wrapper>
);

export const Default = Template.bind({});

Default.args = {
  //   padding: "lg",
  //   elevation: 3,
  display: "grid",
  cols: "2",
  gap: 10,

  //   verticalAlign: "middle",
  //   horizontalAlign: "center",
};
