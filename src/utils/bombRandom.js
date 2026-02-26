export function generateBombs(totalCells, bombCount) {
  const bombs = new Set();

  while (bombs.size < bombCount) {
    const randomIndex = Math.floor(Math.random() * totalCells);
    bombs.add(randomIndex);
  }

  return bombs;
}