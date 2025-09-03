import React from "react";
import { useSession } from "../contexts/SessionContext";

export default function ParametersPanel() {
  const { params, setParams } = useSession();

  function handleChange(e) {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: Number(value) }));
  }

  return (
    <div className="p-3 border rounded space-y-3">
      <div>
        <label className="text-sm block mb-1">
          Temperature: {params.temperature}
        </label>
        <input
          aria-label="temperature"
          type="range"
          name="temperature"
          min="0"
          max="1"
          step="0.05"
          value={params.temperature}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div>
        <label className="text-sm block mb-1">
          Max tokens: {params.maxTokens}
        </label>
        <input
          aria-label="maxTokens"
          type="range"
          name="maxTokens"
          min="10"
          max="1000"
          step="10"
          value={params.maxTokens}
          onChange={handleChange}
          className="w-full"
        />
      </div>
    </div>
  );
}
