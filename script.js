"use strict";
// variables

const divContainer = document.querySelector(".divContainer");
const smllBtn = document.querySelector("#smllBtn");
const medBtn = document.querySelector("#medBtn");
const lrgBtn = document.querySelector("#lrgBtn");
const reset = document.querySelector("#resetBtn");

// functions

// runs two different for loops, one for rows one for columns

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    divContainer.appendChild(row);
    row.style.backgroundColor = " white";
    for (let j = 0; j < num; j++) {
      let column = document.createElement("div");
      column.classList.add("column");
      column.style.borderLeft = "1px black solid";
      column.style.borderTop = "1px black solid";
      // only adds a top and left border to prevent borders from stacking
      row.appendChild(column);
      column.addEventListener("mouseover", () => {
        column.style.backgroundColor = "black";
      });
    }
  }
}

//  default grid size
createGrid(24);

//  a function to clear the grid to use as a reset button and to use at the beggining of other grid resizing functions

function removeChildNodes() {
  while (divContainer.firstChild) {
    divContainer.firstChild.remove();
  }
}

// buttons and their event listeners

reset.addEventListener("click", () => {
  removeChildNodes();
});

smllBtn.addEventListener("click", () => {
  removeChildNodes();
  createGrid(16);
});

medBtn.addEventListener("click", () => {
  removeChildNodes();
  createGrid(32);
});

lrgBtn.addEventListener("click", () => {
  removeChildNodes();
  createGrid(64);
});
