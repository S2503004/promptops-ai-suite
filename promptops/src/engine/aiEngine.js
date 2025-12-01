/**
 * Minimal OpenAI wrapper example using the `openai` npm package.
 * This file is intentionally small — replace with your project's orchestration logic.
 */

const { Configuration, OpenAIApi } = require('openai');

function getClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY missing in env");
  const configuration = new Configuration({ apiKey });
  return new OpenAIApi(configuration);
}

async function generateFromPrompt(prompt, maxTokens=800) {
  const client = getClient();
  const res = await client.createChatCompletion({
    model: "gpt-4o-mini", // replace as needed
    messages: [{ role: "user", content: prompt }],
    max_tokens: maxTokens
  });
  return res.data.choices?.[0]?.message?.content || "";
}

module.exports = { generateFromPrompt };
