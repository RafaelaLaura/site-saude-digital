const TITLES = new Set(["prof", "profa", "dr", "dra"]);

export function getInitials(fullName: string) {
  return fullName
    .split(/\s+/)
    .filter((word) => !TITLES.has(word.replace(".", "").toLowerCase()))
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}
