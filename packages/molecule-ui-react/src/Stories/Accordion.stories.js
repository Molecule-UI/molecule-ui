import { AddFill } from "@moleculeui/icons";
import React from "react";
import { useState } from "react";
import Button from "../Buttons/Button";

import { Accordion } from "../index";

export default {
  component: Accordion,
  title: "Components/Accordion",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (isOpen) => setIsOpen(isOpen);

  return (
    <div style={{ width: "500px" }}>
      <Accordion onClick={onClick} {...args} isOpen={isOpen}>
        Hey, Thanks for Opening me.
      </Accordion>
    </div>
  );
};

export const Default = Template.bind({});
export const DefaultAccordions = () => {
  const title = "Open Me";
  const data = [
    { color: "success", isOpen: true },
    { color: "warning", isOpen: false },
    { color: "danger", isOpen: true },
    { color: "primary", isOpen: false },
  ];

  return (
    <div>
      {data.map((el) => {
        return (
          <div style={{ marginBottom: "10px" }}>
            <Accordion isOpen={el.isOpen} title={title} color={el.color}>
              Thanks for Opening me!!!
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};

export const WithoutBorder = Template.bind({});

export const RealWorldUseCase = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClick = (isOpen) => setIsOpen(isOpen);

  return (
    <div style={{ width: "500px" }}>
      <Accordion onClick={onClick} {...args} isOpen={isOpen}>
        Hey, Thanks for Opening me.
        <div style={{ marginTop: 10 }}>
          <Button color="success" variant="capsule">
            Learn More
          </Button>
        </div>
      </Accordion>
    </div>
  );
};

Default.args = {
  title: "Please Open Me",
  color: "success",
};

WithoutBorder.args = {
  title: "Please Open Me",
  color: "success",
  sideBorder: false,
};

RealWorldUseCase.args = {
  title: "Please Open Me",
  color: "success",
};
