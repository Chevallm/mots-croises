import { markWordsFound } from './ui-manager';

export function resolve(grid, words) {
  const timerStart = new Date().getTime();
  const wordsFound = loopOnGrid(grid, words);
  const timerEnd = new Date().getTime() - timerStart;
  return { wordsFound, time: timerEnd };
}

function loopOnGrid(grid, words) {
  const wordsFound = [];
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
          const wordFound = findWord(
            grid,
            word,
            lettersFound,
            actualPosition,
            direction
          );
          if (wordFound) {
            wordsFound.push(word);
            markWordsFound([word]);
            if (wordsFound.length === words.length) {
              return wordsFound;
            }
            continue;
          }
        }
      });
    }
  }
  return wordsFound;
}

function findWord(grid, word, lettersFound, position, direction) {
  if (word.length === lettersFound) {
    return true;
  }
  const nextPos = nextPosition(position, direction);
  const charToFind = word[lettersFound];
  try {
    let charAtNextPosition = grid[nextPos[0]][nextPos[1]];
    if (charAtNextPosition === charToFind) {
      return findWord(grid, word, ++lettersFound, nextPos, direction);
    } else {
      return false;
    }
  } catch (error) {}
}

function nextPosition(position, direction) {
  return [position[0] + direction[0], position[1] + direction[1]];
}
