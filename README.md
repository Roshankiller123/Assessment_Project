
## 1. Research

### Platforms Reviewed
- **OpenAI Playground**: Test AI prompts in real-time.  
- **Hugging Face Spaces**: Share AI demos with ready-made UIs.  
- **Microsoft Copilot Lab**: AI suggestions inside apps/IDE.  

### Features Chosen for Design
- Model selection dropdown  
- Adjustable parameters (temperature, max tokens)  
- Prompt editor with save/load templates  
- Interactive chat output with copy & download  
- Light/Dark theme toggle  

---

## 2. Design

### Conceptual Design
The UI was designed with **user experience and clarity** in mind:  

- **Model Selector**: Simple dropdown at the top for switching AI models quickly.  
- **Parameters Panel**: Sliders for temperature and max tokens allow fine-tuning AI responses.  
- **Prompt Editor**: Large textarea with “Run” and “Save Template” buttons for efficient prompt management.  
- **Chat Output**: Scrollable chat area displaying prompts and AI responses, with copy and download actions.  
- **Theme Toggle**: Switch between light and dark modes for better accessibility and user comfort.  

> **Note on Figma Mockup:**  
> A visual Figma mockup was not created for this project.
> I have not previously used Figma, and learning it from scratch would have taken approximately 1–2 days.
> Given the limited timeframe for this assessment,
> I focused on implementing a **clean, functional, and responsive frontend design directly in code**,
> following best UI/UX practices. The conceptual design ensures clarity, modularity, and scalability for future enhancements.

## 3. Development

### Implementation Notes
- **ChatOutput**: Shows chat messages, copy & download functionality.  
- **ModelSelector**: Choose AI models, shows loading state.  
- **ParametersPanel**: Adjust temperature & max tokens via sliders.  
- **PromptEditor**: Write prompts, run (mocked), save/load templates.  
- **ThemeToggle**: Switch light/dark mode, saves preference locally.  

### Known Limitations
- Prompt responses are mocked (no real AI calls).  
- Components need `SessionContext` to work fully.  


