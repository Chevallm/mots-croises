export function createGrid(grid) {
  const tableElement = document.createElement('table');
  for (let line of grid) {
    const tableRoweElement = document.createElement('tr');
    for (let column of line) {
      const tableDataCell = document.createElement('td');
      tableDataCell.textContent = column.toUpperCase();
      tableRoweElement.appendChild(tableDataCell);
    }
    tableElement.appendChild(tableRoweElement);
  }
  return tableElement;
}

export function createWordList(words) {
  const definitionList = document.createElement('dl');
  for (let word of words) {
    const definitionDef = document.createElement('dd');
    definitionDef.textContent = word.toUpperCase();
    definitionList.appendChild(definitionDef);
  }
  return definitionList;
}
