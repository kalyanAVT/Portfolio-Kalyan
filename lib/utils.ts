const COLORS = [
  { bg: "#fef3c7", fg: "#92400e" }, // amber
  { bg: "#dbeafe", fg: "#1e40af" }, // blue
  { bg: "#d1fae5", fg: "#065f46" }, // green
  { bg: "#fce7f3", fg: "#9d174d" }, // pink
  { bg: "#ede9fe", fg: "#4c1d95" }, // violet
  { bg: "#ffedd5", fg: "#9a3412" }, // orange
];

export function getInitialColor(name: string) {
  if (!name) return COLORS[0];
  const idx = name.charCodeAt(0) % COLORS.length;
  return COLORS[idx];
}