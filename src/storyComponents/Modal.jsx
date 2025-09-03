import React from "react";
import "./Modal.css"; // import CSS file

export default function Modal({
  show = false,
  onClose = () => {},
  title = "",
  size = "md",
  closable = true,
  showFooter = true,
  children,
}) {
  if (!show) return null;

  const sizeCls =
    size === "sm" ? "modal-sm" : size === "lg" ? "modal-lg" : "modal-md";

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal-container ${sizeCls}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3>{title}</h3>
          {closable && (
            <button className="modal-close" onClick={onClose}>
              ✕
            </button>
          )}
        </div>

        <div className="modal-body">{children}</div>

        {showFooter && (
          <div className="modal-footer">
            <button className="modal-btn" onClick={onClose}>
              Close
            </button>
            <button className="modal-btn modal-btn-primary">Save</button>
          </div>
        )}
      </div>
    </div>
  );
}
