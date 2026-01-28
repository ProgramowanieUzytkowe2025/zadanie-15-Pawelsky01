export const loadTSPFile = async (file) => {
  const text = await file.text();
  return text
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const [id, x, y] = line.split(/\s+/);
      return { id: Number(id), x: Number(x), y: Number(y) };
    });
};
