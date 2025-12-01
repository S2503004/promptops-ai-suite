/**
 * Convert PRD into Trello-ready JSON (cards + lists).
 * This returns a JS object that is compatible with Trello REST API payloads.
 */

function prdToTrello(prd) {
  // prd is expected as structured data; here we show a simple converter stub.
  return {
    boardName: prd.summary?.title || "PRD Board",
    lists: [
      { name: "Backlog", cards: prd.backlog || [] },
      { name: "In Progress", cards: [] },
      { name: "Review", cards: [] },
      { name: "Done", cards: [] }
    ]
  };
}

module.exports = prdToTrello;
