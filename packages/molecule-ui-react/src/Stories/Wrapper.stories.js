import React from "react";

import { Wrapper } from "../index";

export default {
  component: Wrapper,
  title: "Components/Wrapper",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
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
export const Grid = Template.bind({});

Default.args = {
  display: "flex",
  verticalAlign: "middle",
  horizontalAlign: "center",
};

Grid.args = {
  display: "grid",
  cols: "2",
  gap: 10,
};
