let gridSize = 16;
let draw = false;
let isMouseDown = false;

const container = document.querySelector('.container');
const gridArea = document.querySelector('.middle-place');
const buttons = document.querySelectorAll('.btn');
const paintBtn = document.querySelector('#paint-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const clearBtn = document.querySelector('#clear-btn');
const hideBtn = document.querySelector('#hide-btn');
const colorPicker = document.querySelector('.color-picker');
const slider = document.querySelector('.slider');
const gridValue = document.querySelector('.grid-value');

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

function paintCell(e) {
    if (e.type === "mousedown" || isMouseDown) {
        e.target.style.backgroundColor = colorPicker.value;
    }
}

function createGrid(){
    let size = Number(slider.value);

    gridArea.innerHTML = "";

    gridArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridArea.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size * size; i++){
        const cell = document.createElement('div');
        cell.classList.add("cell");

        cell.addEventListener('mousedown', paintCell);
        cell.addEventListener('mouseover', paintCell);

        gridArea.append(cell);
    }
}


createGrid();