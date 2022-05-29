"use-strict";
// variables -------------------

const container = document.querySelector("#grid-container");
const reset = document.querySelector("#reset-button");
const smallBtn = document.querySelector("#smallBtn");
const medBtn = document.querySelector("#medBtn");
const lrgBtn = document.querySelector("#lrgBtn");

// functions ------------------

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < size; j++) {
      let column = document.createElement("div");
      column.classList.add("column");
      column.style.borderLeft = " 1px black solid";
      column.style.borderTop = " 1px black solid";

      row.appendChild(column);
    }
  }
}

// this function deletes all the rows created by createGrid() using forEach into remove

function removeChildNodes() {
  let rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.remove();
  });
}

container.addEventListener("mouseover", function (e) {
  // Add the "draw" class to only divs with a "column" class
  if (e.target.matches(".column")) {
    e.target.classList.add("draw");
  }
});

// default grid size
createGrid(16);

reset.addEventListener("click", () => {
  removeChildNodes();
  createGrid(0);
});

smallBtn.addEventListener("click", () => {
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
