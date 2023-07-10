import { initUI, markWordsFound, setTimer } from './ui-manager';
import { importLevel } from './importLevel';
import './style.css';
import { resolve } from './game-solver';

console.clear();

const { grid, words } = await importLevel('hard');
initUI(grid, words);

const results = resolve(grid, words);
console.log(results);
