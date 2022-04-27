import React from "react";

import { MoleculeProvider } from "../index";

export default {
  component: MoleculeProvider,
  title: "Components/MoleculeProvider",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

const Template = (args) => <MoleculeProvider {...args}></MoleculeProvider>;
