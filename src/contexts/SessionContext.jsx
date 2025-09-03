import React, { createContext, useContext, useEffect, useState } from "react";

const SessionContext = createContext();
export function useSession() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const [models, setModels] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [model, setModel] = useState(null);
  const [template, setTemplate] = useState(null);
  const [params, setParams] = useState({ temperature: 0.7, maxTokens: 150 });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch("/data/models.json").then((r) => r.json()),
      fetch("/data/templates.json").then((r) => r.json()),
    ])
      .then(([m, t]) => {
        setModels(m.data || []);
        setTemplates(t.data || []);
        setModel(m.data?.[0]?.id || null);
        setTemplate(t.data?.[0]?.id || null);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const addChat = (item) => setChat((prev) => [item, ...prev]);

  return (
    <SessionContext.Provider
      value={{
        loading,
        error,
        models,
        templates,
        model,
        setModel,
        template,
        setTemplate,
        params,
        setParams,
        chat,
        addChat,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}
