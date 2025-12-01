# **PromptOps – AI-Powered Product Ops Suite**

AI-driven suite that generates PRDs, user stories, personas, acceptance criteria, Trello boards, Notion docs, and Figma-ready UX microcopy — all through structured prompt engineering and multi-step orchestration.

Built for modern product teams who want to move fast **without** sacrificing structure.

---

## ✨ **Key Features**

* **AI PRD Generator**
  Multi-step process that produces outlines → full PRDs → refined drafts.

* **Persona & User Story Generator**
  Creates personas, user journeys, and actionable acceptance criteria.

* **Trello Integration (JSON-ready)**
  Converts PRDs into Epics → Stories → Cards.

* **Notion Exporter**
  Auto-builds PRD pages using Notion block structures.

* **Figma UX Copy Generator**
  Generates CTAs, labels, microcopy, and annotations.

* **Modular Prompt Orchestrator**
  Versioned templates with controlled reasoning for consistent outputs.

* **Sample Outputs Included**
  Check `sample_outputs/` for generated PRDs and outlines.

---

## 📁 **Project Structure**

```
promptops/
│── src/
│   ├── orchestrator/
│   │   ├── prdPrompt.js
│   │   ├── personaPrompt.js
│   │   └── trelloPrompt.js
│   ├── integrations/
│   │   ├── trello.js
│   │   ├── notion.js
│   │   └── figma.js
│   ├── engine/
│   │   └── aiEngine.js
│   └── cli/
│       └── generate_prd.js
│
├── sample_outputs/
│   └── prd_sample.md
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

---

## 🚀 **Getting Started**

### **1. Clone the repository**

```bash
git clone https://github.com/<your-username>/promptops-ai-suite
cd promptops-ai-suite
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Set up environment variables**

Copy `.env.example` → `.env` and fill in:

```
OPENAI_API_KEY=
TRELLO_API_KEY=
TRELLO_TOKEN=
NOTION_API_KEY=
FIGMA_PERSONAL_TOKEN=
```

### **4. Run a sample PRD generation**

```bash
node src/cli/generate_prd.js
```

### **5. Review outputs**

Generated files appear in:

```
sample_outputs/
```

---

## 🧠 **How It Works**

### **1. Input**

You provide a short requirement brief.

### **2. Prompt Orchestration**

The engine selects a prompt template and runs:

* Outline generation
* Expansion to full PRD
* Refinement + structure validation

### **3. Validation Layer**

Ensures:

* JSON cleanliness
* No hallucinated sections
* Tool-compatible formatting

### **4. Integration Layer**

Depending on your settings, PromptOps can:

* Build Trello boards/cards
* Create Notion PRD pages
* Generate UX copy for Figma

### **5. Outputs**

PRDs, personas, stories, acceptance criteria, microcopy, and tool integrations.

---

## 💡 **Why This Project Exists**

Product teams spend hours documenting instead of building.
PromptOps automates the repetitive parts — PRDs, tickets, personas, UX copy — so teams can focus on strategy and execution.

This project demonstrates:

* Advanced prompt engineering
* Real-world product workflow automation
* Clean architecture
* API integrations
* Practical AI tooling for PMs and designers

---

## 🛠️ **Tech Stack**

* **Node.js**
* **OpenAI API**
* **Notion API**
* **Trello REST API**
* **Figma REST API**
* **Modular Prompt Engine**

---

## 📌 **Roadmap**

* Web dashboard (Next.js)
* OAuth for Trello/Notion/Figma
* Prompt version diffing
* PRD quality scoring
* Slack integration for approvals
* Multi-model support (Anthropic, Mistral, Llama)
* Automated UX wireframe generation

---

## 🤝 **Contributing**

Contributions and ideas are welcome.
Open issues, submit PRs, or propose new integrations!


If you want, I can also generate **badges**, **screenshots**, **a banner**, or a **GIF demo section** for your README.
