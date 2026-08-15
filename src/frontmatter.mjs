export function parseFrontmatter(content, filePath = "SKILL.md") {
  if (!content.startsWith("---\n")) {
    throw new Error(`${filePath}: frontmatter must start on the first line.`);
  }
  const end = content.indexOf("\n---\n", 4);
  if (end === -1) throw new Error(`${filePath}: frontmatter is not closed.`);

  const raw = content.slice(4, end);
  const data = {};
  let mappingKey = null;

  for (const line of raw.split("\n")) {
    if (!line.trim()) continue;
    const nested = line.match(/^\s{2}([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (nested && mappingKey) {
      data[mappingKey][nested[1]] = unquote(nested[2]);
      continue;
    }
    const match = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (!match) throw new Error(`${filePath}: unsupported YAML line "${line}".`);
    const [, key, value] = match;
    if (!value) {
      data[key] = {};
      mappingKey = key;
    } else {
      data[key] = unquote(value);
      mappingKey = null;
    }
  }

  return { data, body: content.slice(end + 5) };
}

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}
