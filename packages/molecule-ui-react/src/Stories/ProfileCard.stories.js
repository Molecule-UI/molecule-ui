import React from "react";
import { AddSolid } from "@moleculeui/icons";
import { ProfileCard } from "../index";

export default {
  component: ProfileCard,
  title: "Components/ProfileCard",
};

const Template = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});

export const Covered = Template.bind({});

const commonArgs = {
  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  title: "Rushil Dhinoja",
  icon: <AddSolid />,
  onIconClick: () => console.log("follow"),
};
Default.args = {
  ...commonArgs,
};

Covered.args = {
  ...commonArgs,
  type: "covered",
};
