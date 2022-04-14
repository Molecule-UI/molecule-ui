import React from "react"; 

import { MoleculeProvider } from "../index";

export default {
    component: MoleculeProvider,
    title: "Components/MoleculeProvider"
};

const Template = (args) => (
    <MoleculeProvider {...args}>
    </MoleculeProvider>
);

