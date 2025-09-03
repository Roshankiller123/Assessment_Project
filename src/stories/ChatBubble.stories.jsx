import React from "react";
import ChatBubble from "../storyComponents/ChatBubble";

export default {
  title: "UI/ChatBubble",
  component: ChatBubble,
  argTypes: {
    text: { control: "text" },
    sender: { control: { type: "select", options: ["ai", "user"] } },
  },
};

const Template = (args) => (
  <div className="chat-container">
    <ChatBubble {...args} />
  </div>
);

export const AI = Template.bind({});
AI.args = {
  text: "Hello — this is an example AI reply.",
  sender: "ai",
};

export const User = Template.bind({});
User.args = {
  text: "User message example.",
  sender: "user",
};
