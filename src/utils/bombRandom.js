export function generateBombs(size, bombCount) {
  const bombs = new Set();

  while (bombs.size < bombCount) {
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);

    bombs.add(`${row}-${col}`);
  }

  return bombs;
}



