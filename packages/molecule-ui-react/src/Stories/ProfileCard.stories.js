import React from "react";
import { AddCart } from "@moleculeui/icons";
import { ProfileCard } from "../index";

export default {
  component: ProfileCard,
  title: "Components/Cards/ProfileCard",
};

const Template = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  src:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  title: "Rushil Dhinoja",
  icon: <AddCart />,
  onIconClick: () => console.log("follow"),
};
