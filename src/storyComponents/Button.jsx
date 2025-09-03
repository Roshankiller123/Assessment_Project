// Button.jsx
import React from "react";
import "./Button.css";

export default function Button({
  children = "Click me",
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  withIcon = false,
}) {
  const cls = `
    btn
    btn-${variant}
    btn-${size}
    ${fullWidth ? "btn-full" : ""}
  `;

    
  return (
    <button disabled={disabled} onClick={onClick} className={cls}>
      {withIcon && <span>★</span>}
      <span>{children}</span>
    </button>
  );
}
