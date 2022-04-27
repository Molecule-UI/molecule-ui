import React from "react";

import { Text } from "../index";

export default {
  component: Text,
  title: "Components/Text",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

const Template = (args) => <Text {...args}>I am a default Heading</Text>;

export const Default = Template.bind({});

export const H1 = Template.bind({});

H1.args = {
  size: "h1",
};

export const H2 = Template.bind({});

H2.args = {
  size: "h2",
};
export const H3 = Template.bind({});

H3.args = {
  size: "h3",
};
export const H4 = Template.bind({});

H4.args = {
  size: "h4",
};
export const H5 = Template.bind({});

H5.args = {
  size: "h5",
};
export const H6 = Template.bind({});

H6.args = {
  size: "h6",
};

export const Subtitle = Template.bind({});

Subtitle.args = {
  size: "subtitle",
};

export const body = Template.bind({});

body.args = {
  size: "body",
};

export const button = Template.bind({});

button.args = {
  size: "button",
};

export const Caption = Template.bind({});

Caption.args = {
  size: "caption",
};

export const Note = Template.bind({});

Note.args = {
  size: "note",
};
