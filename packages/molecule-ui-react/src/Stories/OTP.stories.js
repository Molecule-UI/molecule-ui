import React from "react";
import { useState } from "react";

import { OTP } from "../index";

export default {
  component: OTP,
  title: "Components/OTP",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

const Template = (args) => <OTP {...args}></OTP>;

export const Demo = (args) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const onChange = (e, index) => {
    const newOtp = [...otp];

    const value = e.target.value;
    newOtp[index] = value;

    setOtp(newOtp);
  };

  return <OTP otpLength={6} inputValues={otp} onChange={onChange}></OTP>;
};
