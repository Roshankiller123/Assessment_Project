import React, { useState, useEffect } from "react";
import Slider from "../storyComponents/Slider";

export default {
  title: "UI/Slider",
  component: Slider,
  argTypes: {
    label: { control: "text" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    value: { control: "number" },
    showValue: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "Slider changed" },
  },
};

const Template = (args) => {
  const [val, setVal] = useState(args.value);
  useEffect(() => setVal(args.value), [args.value]);

  return (
    <Slider
      {...args}
      value={val}
      onChange={(e) => {
        setVal(Number(e.target.value));
        args.onChange?.(e); // logs the action in the Actions panel
      }}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  label: "Temperature",
  min: 0,
  max: 1,
  step: 0.01,
  value: 0.6,
  showValue: true,
  disabled: false,
};
