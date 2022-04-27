import React, { CSSProperties } from "react";
import cx from "classnames";
import Styles from "./Style/InputFieldStyles";
import { InputHTMLAttributes } from "react";
import {
  Eye,
  EyeCross,
  LockSolid,
  MailSolid,
  UserSolid,
} from "@moleculeui/icons";

type LabelOption = {
  labelClass?: string;
  labelStyle?: CSSProperties;
  labelId?: string;
  label?: string;
};

export interface InputFieldProps {
  className?: string;
  style?: CSSProperties;
  type: "password" | "text" | "email";
  placeholder?: string;
  iconColor?: string;
  allowPasswordShow?: boolean;
  isPasswordVisible?: boolean;
  labelOptions?: LabelOption;
  showIcon?: boolean;
  onIconClick?: (isPasswordVisible: boolean) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputLabelProps {
  label?: string;
  labelClass?: string;
  labelStyle?: CSSProperties;
  labelId?: string;
}

const InputLabel: React.FC<InputLabelProps> = (props) => {
  const { label, labelClass, labelStyle, labelId } = props;

  const componentStyle = Styles();

  const labelClasses = cx(
    labelClass,
    "font-body",
    componentStyle["label-root"]
  );
  return (
    <label className={labelClasses} style={labelStyle} htmlFor={labelId}>
      {label}
    </label>
  );
};

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    className,
    style,
    type,
    placeholder,
    iconColor,
    labelOptions,
    allowPasswordShow,
    isPasswordVisible,
    showIcon,
    onIconClick,
    onChange,
  } = props;

  const onIconClickHandle = () => {
    if (type === "password" && allowPasswordShow) {
      onIconClick(isPasswordVisible);
    }
  };

  const componentStyle = Styles(props);

  const wrapperClasses = cx(componentStyle["input-wrapper"]);

  const inputClasses = cx(
    className,
    componentStyle["input-root"],
    "font-button",
    "border-radius-10",
    "width-100"
  );

  const iconClasses = cx(componentStyle["icon-root"]);

  const IconMap = {
    text: UserSolid,
    email: MailSolid,
    password: LockSolid,
  };

  let IconComponent = IconMap[type];

  if (type === "password" && allowPasswordShow) {
    IconComponent = EyeCross;

    if (isPasswordVisible) {
      IconComponent = Eye;
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <>
      <InputLabel {...labelOptions} />
      <div className={wrapperClasses}>
        <input
          style={style}
          type={isPasswordVisible ? "text" : type}
          className={inputClasses}
          placeholder={placeholder}
          id={labelOptions?.labelId}
          onChange={onChangeHandler}
        />
        <div className={iconClasses}>
          {type && IconComponent && showIcon && (
            <IconComponent onClick={onIconClickHandle} fill={iconColor} />
          )}
        </div>
      </div>
    </>
  );
};

InputField.defaultProps = {
  allowPasswordShow: false,
  isPasswordVisible: false,
  type: "text",
  showIcon: true,
};

export default InputField;
