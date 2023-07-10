export function resolve(grid, words) {
  loopOnGrid(grid, words);
}

function loopOnGrid(grid, words) {
  for (let line in grid) {
    let row = grid[line];
    for (let col in row) {
      const char = grid[line][col];
      const actualPosition = [line, col].map(Number);
      const wordsThatStartsWithChar = words.filter((word) =>
        word.startsWith(char)
      );
      wordsThatStartsWithChar.forEach((word) => {
        const directions = [
          [-1, 0],
          [-1, 1],
          [0, 1],
          [1, 1],
          [1, 0],
          [1, -1],
          [0, -1],
          [-1, -1],
        ];
        let lettersFound = 1;
        for (let direction of directions) {
          console.log(direction);
          const wordFound = findWord(
            grid,
            word,
            lettersFound,
            actualPosition,
            direction
          );
          if (wordFound) {
            continue;
          }
        }
      });
    }
  }
}

function findWord(grid, word, lettersFound, position, direction) {
  const nextPos = nextPosition(position, direction);
  try {
    let charAtNextPosition = grid[nextPos[0]][nextPos[1]];
    console.log(charAtNextPosition);
  } catch (error) {}
}

function nextPosition(position, direction) {
  return [position[0] + direction[0], position[1] + direction[1]];
}
