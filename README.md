# mots-croises

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-emkbo3)

## Goal

With this project, I wanted to see what is the most efficient way to find all words in a list within a grid.

## Methods

### Iterate over each cell of the grid

The first method that came to my mind is to iterate over each letter on the grid, to filter the word list to get those who starts by the current letter. Then, we try to get next character in 8 directions and if we have it we continue recursively on the same direction until we find the whole word. If word is not on this direction, we try the next one (if there is a direction left) else we iterate on the next grid cell. This way, we are sure to find every words, but there is no optimisation.

### Iterate over the word list

The second method that I tried, was to iterate in the word list, this way we should be able to do less operations. We first iterate over each cell to register letters positions. Then we take each word, get the first letter, and for each letter position in the grid, try to find the word with the 8 directions. We do this until there is no word left in the list.


## Results

The following results are calculated for a 20x20 grid with a list of 33 words to find.

| Method               | Number of operations |
|----------------------|----------------------|
| Iterate on grid      | 5263                 |
| Iterate on word list | 5147                 |