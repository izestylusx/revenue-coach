import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("README visual assets and local links are valid", async () => {
  const readme = await fs.readFile(path.join(root, "README.md"), "utf8");
  assert.match(readme, /assets\/revenue-coach-hero\.svg/);
  assert.ok((readme.match(/```mermaid/g) ?? []).length >= 3);

  const destinations = [
    ...readme.matchAll(/(?:href|src)="([^"]+)"/g),
    ...readme.matchAll(/\]\(([^)]+)\)/g),
  ].map((match) => match[1]);

  for (const destination of destinations) {
    if (/^(?:https?:|#)/.test(destination)) continue;
    const localPath = destination.split("#", 1)[0];
    await assert.doesNotReject(
      fs.access(path.join(root, localPath)),
      `Missing README destination: ${destination}`,
    );
  }
});
