import React from "react";
import "./Slider.css";

export default function Slider({
  label = "",
  min = 0,
  max = 1,
  step = 0.01,
  value = 0.5,
  onChange,
  showValue = true,
  disabled = false,
}) {
  return (
    <div className="slider-wrapper">
      {label && (
        <label className="slider-label">
          {label} {showValue && <span className="slider-value">{value}</span>}
        </label>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="slider-input"
      />
    </div>
  );
}
