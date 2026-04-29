const gridArea = document.querySelector('.grid-container');
const paintBtn = document.querySelector('.paint-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const clearBtn = document.querySelector('.clear-btn');
const hideBtn = document.querySelector('.hide-btn');
const colorPicker = document.querySelector('#colorPicker');
const slider = document.querySelector('#slider');
const gridValue = document.querySelector('.grid-value');
const year = document.querySelector('.year');

year.textContent = new Date().getFullYear();
let isMouseDown = false;
let currentMode = "paint";
let gridSize = Number(slider.value);


function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}


function paintCell(e) {
    console.log(e);
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


function createGrid(gridSize) { 

    gridArea.innerHTML = ""; 

    gridArea.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridArea.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) { 
        const cell = document.createElement('div'); 
        
        cell.classList.add("cell"); 
        
        cell.addEventListener('mousedown', paintCell); 
        cell.addEventListener('mouseover', paintCell);

        gridArea.appendChild(cell); 
    } 
}



slider.addEventListener('input', () => {
    gridSize = Number(slider.value);

    gridValue.textContent = `${gridSize} x ${gridSize}`;

    createGrid(gridSize);
});


document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
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
    createGrid(gridSize);
});



hideBtn.addEventListener('click', () => {
    gridArea.classList.toggle('hide-grid');
});



createGrid(gridSize);