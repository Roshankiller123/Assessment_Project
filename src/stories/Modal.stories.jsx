import React, { useState, useEffect } from "react";
import Modal from "../storyComponents/Modal";

export default {
  title: "UI/Modal",
  component: Modal,
  argTypes: {
    onClick: {
      action: "Modal Opened!",
    },
    onClose: {
      action: "Modal Closed!",
    },
    show: { control: "boolean" },
    title: { control: "text" },
    size: { control: { type: "select", options: ["sm", "md", "lg"] } },
    closable: { control: "boolean" },
    showFooter: { control: "boolean" },
  },
};

const Template = (args) => {
  const [open, setOpen] = useState(args.show);
  useEffect(() => setOpen(args.show), [args.show]);

  return (
    <>
      <button
        onClick={(e) => {
          args.onClick(e);
          setOpen(true);
        }}
      >
        Open modal
      </button>
      <Modal
        {...args}
        show={open}
        onClose={(e) => {
          args.onClose(e); // logs in Actions
          setOpen(false); // actually close the modal
        }}
      >
        <p>This is sample modal content.</p>
      </Modal>
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  show: false,
  title: "Sample Modal",
  size: "md",
  closable: true,
  showFooter: true,
};
