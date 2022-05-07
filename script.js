'use strict';

const divContainer = document.querySelector('.divContainer');
function addRow() {
    const row = document.createElement('div');
    row.classList.add('row')
    divContainer.appendChild(row);
    for(let i = 0; i < 16; i++) { 
        const column = document.createElement('div'); 
        column.classList.add('column')
        row.appendChild(column);
        // this was to make sure my borders didnt double up
        if(i == 15) {
            column.style.borderBottom = '1px black solid';
        };
        // added the right most border through the DOM on google chrome
    }
};
function creatGrid() {
    for(let i = 0; i < 16; i++) {
        addRow()
    }
}
creatGrid();
const column = document.querySelectorAll('.column');
const row = document.querySelectorAll('.row')
