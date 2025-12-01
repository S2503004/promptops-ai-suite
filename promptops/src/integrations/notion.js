/**
 * Notion integration stubs.
 * Use official Notion SDK to create pages/blocks.
 */

async function createPrdPage(prdMarkdown) {
  console.log("Notion.createPrdPage stub called");
  return { ok: true, id: "stub-notion-id" };
}

module.exports = { createPrdPage };
