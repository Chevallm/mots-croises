import { initUI } from './ui-manager';
import { importLevel } from './importLevel';
import './style.css';

const { grid, words } = await importLevel('example1.txt');
initUI(grid, words);
