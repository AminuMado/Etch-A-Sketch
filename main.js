
const gridSizeSlider = document.getElementById("gridSizeSlider");
const mainContainer = document.querySelector(".main-container");
const displayGridSizeValue = document.querySelector(".displayGridSizeValue");
let grids = gridSizeSlider.value;
let gridsSquare = '';
let userColor = 'blue';


function displayGridSize(){
    displayGridSizeValue.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`; 
    
    
}

function setGridSize(){
    mainContainer.style.gridTemplateColumns = `repeat(${gridSizeSlider.value},1fr)`
    mainContainer.style.gridTemplateRows = `repeat(${gridSizeSlider.value},1fr)`
}

function updateGrid(){
    gridsSquare = gridSizeSlider.value*gridSizeSlider.value;
    console.log(gridsSquare);
    setGridSize();
    clearContainer();
    createDiv();
    
}


function createDiv(){
    for( let i = 0; i<gridsSquare;i++){
        const createDiv = document.createElement("div");
        mainContainer.appendChild(createDiv);
        createDiv.classList.add("grid-cell");    
    }
    let innerGrids = document.querySelectorAll(".grid-cell");
    console.log(innerGrids);
    innerGrids.forEach(function(grid){
        grid.addEventListener('mouseover',function(){
            grid.style.background = `${userColor}`;
        })
    })
}
function clearContainer(){
    mainContainer.innerHTML=''; 
    
}
function changeColor(grid){
    grid.style.background = 'black';
}


gridSizeSlider.addEventListener("input",displayGridSize);
gridSizeSlider.addEventListener("change",updateGrid);

/* Initialization */
displayGridSize(); //This updates the text of the grid;
updateGrid(); // This sets the initial grid size;
