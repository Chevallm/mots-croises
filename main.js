import { initUI } from './ui-manager';
import { importLevel } from './importLevel';
import './style.css';
import { resolve } from './game-solver';

const { grid, words } = await importLevel('example1');
initUI(grid, words);

resolve(grid, words);
