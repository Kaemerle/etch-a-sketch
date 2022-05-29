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
    for (let j = 0; j < num; j++) {
      let column = document.createElement("div");
      column.classList.add("column");
      column.style.borderLeft = "1px black solid";
      column.style.borderTop = "1px black solid";
      // only adds a top and left border to prevent borders from stacking
      row.appendChild(column);
    }
  }
}
createGrid(16);
