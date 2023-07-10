import { markWordsFound } from './ui-manager';

let nbOperations = 0;

const methods = [loopOnGrid, searchByFirstLetterOfWords];

export function resolve(grid, words) {
  const results = [];
  for (let method of methods) {
    nbOperations = 0;
    const timerStart = new Date().getTime();
    const wordsFound = method(grid, words);
    const timerEnd = new Date().getTime() - timerStart;
    results.push([
      method.name,
      `${(wordsFound.length / words.length) * 100}%`,
      nbOperations,
    ]);
  }
  return results;
}

const DIRECTIONS = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];

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
        let lettersFound = 1;
        for (let direction of DIRECTIONS) {
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
  nbOperations++;
  const nextPos = nextPosition(position, direction);
  const charToFind = word[lettersFound];
  try {
    let charAtNextPosition = grid[nextPos[0]][nextPos[1]];
    if (charAtNextPosition === charToFind) {
      return findWord(grid, word, ++lettersFound, nextPos, direction);
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

function nextPosition(position, direction) {
  return [position[0] + direction[0], position[1] + direction[1]];
}

function searchByFirstLetterOfWords(grid, words) {
  const wordsFound = [];
  const map = getLetterMap(grid);
  for (let word of words) {
    const firstLetterOfWord = word[0];
    const lettersInGrid = map.get(firstLetterOfWord);
    for (let letterInGrid of lettersInGrid) {
      for (let direction of DIRECTIONS) {
        const wordFound = findWord(grid, word, 1, letterInGrid, direction);
        if (wordFound) {
          wordsFound.push(word);
          markWordsFound([word]);
          if (wordsFound.length === words.length) {
            return wordsFound;
          }
        }
      }
    }
  }
  return wordsFound;
}

function getLetterMap(grid) {
  const mapOfLetter = new Map();
  for (let line in grid) {
    const row = grid[line];
    for (let col in row) {
      const char = grid[line][col];
      const position = [line, col].map(Number);
      const positions = mapOfLetter.get(char) ?? [];
      positions.push(position);
      mapOfLetter.set(char, positions);
    }
  }
  return mapOfLetter;
}
