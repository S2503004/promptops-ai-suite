/**
 * PRD prompt templates (string literals).
 * These are starter templates that the orchestrator will inject user inputs into.
 */

const PRD_OUTLINE_PROMPT = (context) => `
You are an expert product manager. Given the following context, output a PRD outline only.

Context:
${context}

Output: markdown outline with sections: Summary, Background, Personas, User Stories, Functional Requirements, Non-functional Requirements, Success Metrics, Timeline.
`.trim();

const PRD_FULL_PROMPT = (context) => `
You are an expert product manager. Given the context below, generate a full PRD in markdown.

Context:
${context}

Output: Full PRD with the sections: Summary, Background, Personas, User Stories, Functional Requirements, Non-functional Requirements, Success Metrics, Timeline, Risks & Trade-offs.
`.trim();

module.exports = {
  PRD_OUTLINE_PROMPT,
  PRD_FULL_PROMPT
};
