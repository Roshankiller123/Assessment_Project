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
  const [chat, setChat] = useState([]); // newest first

  const fallbackModels = [
    { id: "gpt-3.5", name: "GPT-3.5", desc: "Fast, good for general tasks" },
    { id: "gpt-4", name: "GPT-4", desc: "Better reasoning and clarity" },
    { id: "custom-1", name: "Custom", desc: "Small demo model" },
  ];

  const fallbackTemplates = [
    { id: "t1", title: "Summarize", prompt: "Summarize the following text:" },
    { id: "t2", title: "Rewrite", prompt: "Rewrite this professionally:" },
  ];

  const fetchData = async () => {
    try {
      setLoading(true);

      const [mRes, tRes] = await Promise.all([
        fetch("/data/models.json"),
        fetch("/data/templates.json"),
      ]);

      if (!mRes.ok || !tRes.ok) {
        throw new Error("Failed to fetch files");
      }

      const m = await mRes.json();
      const t = await tRes.json();

      setModels(m.data || fallbackModels);
      setTemplates(t.data || fallbackTemplates);
      setModel(m.data?.[0]?.id || fallbackModels[0].id);
      setTemplate(t.data?.[0]?.id || fallbackTemplates[0].id);
    } catch (e) {
      setError(e.message);
      setModels(fallbackModels);
      setTemplates(fallbackTemplates);
      setModel(fallbackModels[0].id);
      setTemplate(fallbackTemplates[0].id);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
