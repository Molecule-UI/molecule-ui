import React, { CSSProperties } from "react";
import cx from "classnames";
import Styles from "./Style/InputFieldStyles";
import { InputHTMLAttributes } from "react";

export interface Props {
  className?: string;
  style?: CSSProperties;
  type?: string;
}

const InputField: React.FC<Props> = (props) => {
  const { className, style, type } = props;

  const componentStyle = Styles();

  const classes = cx(className);
  const IconMap = {};
  return (
    <div style={style}>
      <input />
    </div>
  );
};

export default InputField;
