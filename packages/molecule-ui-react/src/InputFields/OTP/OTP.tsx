import React, { CSSProperties } from "react";
import cx from "classnames";
import Styles from "./Style/OTPStyles";
import { useRef } from "react";

export interface Props {
  className?: string;
  style?: CSSProperties;
  otpLength: Number;
  inputValues: Array<string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

interface InputBoxGenerator extends Props {}

const InputBoxGenerator: React.FC<InputBoxGenerator> = (props) => {
  const { inputValues, otpLength, onChange } = props;
  const componentStyle = Styles();
  const inputRef = useRef<Element | HTMLInputElement | null>();
  const inputClasses = cx(componentStyle["single-input"], "font-h4");

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    e.target.value.replace(/[^0-9]/g, "");

    const value = e.target.value;
    if (value.length > 1) {
      const next = e.target.form[index + 1];
      inputRef.current = next;
      (inputRef.current as HTMLInputElement)?.focus();
      return null;
    }

    if (
      index < inputValues.length &&
      (e.target.value.match(/[0-9]/) || e.target.value === "")
    ) {
      if (e.target.value !== "") {
        const next = e.target.form[index + 1];
        inputRef.current = next;
        (inputRef.current as HTMLInputElement)?.focus();
      } else {
        const next = e.target.form[index - 1];
        inputRef.current = next;
        (inputRef.current as HTMLInputElement)?.focus();
      }
      onChange(e, index);
    }
  };

  return (
    <form>
      {Array(otpLength)
        .fill(1)
        .map((input, index) => (
          <input
            key={index}
            value={inputValues[index]}
            className={inputClasses}
            onChange={(e) => onChangeHandler(e, index)}
            type="text"
          />
        ))}
    </form>
  );
};

const OTP: React.FC<Props> = (props) => {
  const { className, style, otpLength, inputValues, onChange } = props;

  const componentStyle = Styles();

  const classes = cx(className);

  return (
    <div style={style}>
      <InputBoxGenerator {...props} />
    </div>
  );
};

OTP.defaultProps = {
  otpLength: 4,
  inputValues: ["", "", "", ""],
};

export default OTP;
