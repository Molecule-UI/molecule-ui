import React from "react";
import cx from "classnames";

export const Theme = React.createContext({});

export type colorPalette = {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
};

export interface Props {
  userTheme: colorPalette;
}

const MoleculeProvider: React.FC<Props> = (props) => {
  const { children, userTheme } = props;

  return <Theme.Provider value={userTheme}>{children}</Theme.Provider>;
};

export default MoleculeProvider;
