import React from "react";
import { useSession } from "../contexts/SessionContext";

export default function ModelSelector() {
  const { models, model, setModel, loading } = useSession();

  if (loading) return <div className="p-2">Loading models…</div>;

  return (
    <label className="block">
      <div className="text-sm font-medium mb-1">Model</div>
      <select
        aria-label="Select model"
        value={model || ""}
        onChange={(e) => setModel(e.target.value)}
        className="w-full p-2 rounded border text-black"
      >
        {models.length === 0 ? (
          <option disabled>Loading models…</option>
        ) : (
          models.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} — {m.desc}
            </option>
          ))
        )}
      </select>
    </label>
  );
}
