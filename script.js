let isMouseDown = false;
let currentMode = "paint";

const gridArea = document.querySelector('.grid-container');
const paintBtn = document.querySelector('.paint-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const clearBtn = document.querySelector('.clear-btn');
const hideBtn = document.querySelector('.hide-btn');
const colorPicker = document.querySelector('.color-picker');
const slider = document.querySelector('.slider');
const gridValue = document.querySelector('.grid-value');



document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});



function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}



function paintCell(e) {
    if (e.type === "mousedown" || isMouseDown) {

        switch (currentMode) {
            case "paint":
                e.target.style.backgroundColor = colorPicker.value;
                break;

            case "eraser":
                e.target.style.backgroundColor = "#ffffff";
                break;

            case "rainbow":
                e.target.style.backgroundColor = getRandomColor();
                break;
        }
    }
}



function createGrid() {
    const size = Number(slider.value);

    gridArea.innerHTML = "";

    gridArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");

        cell.addEventListener('mousedown', paintCell);
        cell.addEventListener('mouseover', paintCell);

        gridArea.appendChild(cell);
    }
}



slider.addEventListener('input', () => {
    const size = Number(slider.value);

    gridValue.textContent = `${size} x ${size}`;
    createGrid();
});



paintBtn.addEventListener('click', () => {
    currentMode = "paint";
});



eraserBtn.addEventListener('click', () => {
    currentMode = "eraser";
});



rainbowBtn.addEventListener('click', () => {
    currentMode = "rainbow";
});




clearBtn.addEventListener('click', () => {
    createGrid();
});



hideBtn.addEventListener('click', () => {
    gridArea.classList.toggle('hide-grid');
});



createGrid();