import { createGrid, createWordList } from './ui-manager';
import { importLevel } from './importLevel';
import './style.css';

const appElement = document.querySelector('#app');
const listElement = appElement.querySelector('#list');
const gridElement = appElement.querySelector('#grid');

const { grid, words } = await importLevel('example1.txt');
console.log(grid, words);

const tableElement = createGrid(grid);
const wordListElement = createWordList(words);

listElement.appendChild(wordListElement);
gridElement.appendChild(tableElement);
