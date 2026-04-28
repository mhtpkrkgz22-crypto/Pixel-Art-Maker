let isMouseDown = false;
let currentMode = "paint";

const container = document.querySelector('.container');
const gridArea = document.querySelector('.middle-place');
const buttons = document.querySelectorAll('.btn');
const paintBtn = document.querySelector('.paint-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const clearBtn = document.querySelector('.clear-btn');
const hideBtn = document.querySelector('.hide-btn');
const colorPicker = document.querySelector('#color-picker');
const slider = document.querySelector('#slider');
const gridValue = document.querySelector('.grid-value');

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

function paintCell(e) {
    if (e.type === "mousedown" || isMouseDown) {

        if (currentMode === "paint") {
            e.target.style.backgroundColor = colorPicker.value;
        }

        if (currentMode === "eraser") {
            e.target.style.backgroundColor = "#ffffff";
        }
    }
}

function createGrid(size){

    size = Number(slider.value);

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

slider.addEventListener('input', () => {
    let size = Number(slider.value);

    gridValue.textContent = `${size} x ${size}`;

    createGrid(size);
});

eraserBtn.addEventListener('click', () => {
    currentMode = "eraser";
})

paintBtn.addEventListener('click', () => {
    currentMode = "paint";
})

createGrid();