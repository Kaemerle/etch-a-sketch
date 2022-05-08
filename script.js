'use-strict';
// variables

const container = document.querySelector('#grid-container');

// functions

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < size; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        };
    };
};

createGrid(16)