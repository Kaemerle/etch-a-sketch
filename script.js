'use strict';

const divContainer = document.querySelector('.divContainer');

function addRow() {
    const row = document.createElement('div');
    divContainer.appendChild(row);
    for(let i = 0; i < 16; i++) { 
        const column = document.createElement('div'); 
        column.textContent = 'column'
        column.style.background = 'lightblue';
        column.style.border = 'solid 1px black';
        column.style.marginTop = '1px';
        row.appendChild(column);

    }
};

function creatGrid() {
    for(let i = 0; i < 16; i++) {
        addRow();
    }
}
creatGrid();
