'use strict';

const body = document.querySelector('body');
const container = document.querySelector('#container')
const box = document.querySelector('.box');
const header = document.createElement('div');
header.classList.add('header');
header.textContent = 'Etch-A-Sketch'
body.insertBefore(header, container)
const grid = document.createElement('div');
grid.classList.add('grid');
box.appendChild(grid);
grid.textContent = 'grid';
