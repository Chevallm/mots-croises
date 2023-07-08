export async function importLevel(filename) {
  const file = await fetch(filename);
  const text = await file.text();
  const array = text.split('\r\n');
  const [gridWidth, gridHeight, nbOfWords] = array[0].split(',').map(Number);
  const grid = array.slice(1, 1 + gridHeight);
  const words = array.slice(1 + gridHeight);
  return { grid, words };
}

