/**
 * Figma integration stubs.
 * Use Figma REST API to push text/annotations or build simple frames.
 */

async function pushCopyToFigma(items) {
  console.log("Figma.pushCopyToFigma stub called");
  return { ok: true, id: "stub-figma-id" };
}

module.exports = { pushCopyToFigma };
