/**
 * Simple CLI to demo PRD generation using the prompt orchestrator and AI engine.
 * Usage: node src/cli/generate_prd.js
 */

const fs = require('fs');
const path = require('path');
const { PRD_OUTLINE_PROMPT, PRD_FULL_PROMPT } = require('../orchestrator/prdPrompt');
const { generateFromPrompt } = require('../engine/aiEngine');

async function main() {
  const exampleContext = `
Problem: Improve onboarding completion for a mobile payments app.
Target users: young professionals (age 22-35).
Constraints: must not add more than 2 screens.
KPIs: onboarding completion rate, time to complete, drop-off rate.
  `;
  console.log("Generating PRD outline (this is a demo — requires OPENAI_API_KEY)...");
  try {
    const outlinePrompt = PRD_OUTLINE_PROMPT(exampleContext);
    const outline = await generateFromPrompt(outlinePrompt, 400);
    console.log("\n--- PRD OUTLINE ---\n");
    console.log(outline);
    // Save sample output
    fs.writeFileSync(path.resolve(__dirname, '../../sample_outputs/prd_sample_outline.md'), outline);
  } catch (err) {
    console.error("Error (likely missing API key or network):", err.message);
  }
}

main();
