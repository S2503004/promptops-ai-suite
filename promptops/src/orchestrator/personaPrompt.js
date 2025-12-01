const PERSONA_PROMPT = (personaBrief) => `
Create a persona for the product. Brief:
${personaBrief}

Output: Markdown persona with name, goals, frustrations, tech-savviness, and acceptance criteria.
`.trim();

module.exports = PERSONA_PROMPT;
