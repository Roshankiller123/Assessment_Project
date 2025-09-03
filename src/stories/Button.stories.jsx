// Button.stories.jsx
import React from "react";
import Button from "../storyComponents/Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "button clicked!",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success"],
    },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    withIcon: { control: "boolean" },
    children: { control: "text" },
  },
};

const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: "Click me",
  variant: "primary",
  size: "md",
  disabled: false,
  fullWidth: false,
  withIcon: false,
};
