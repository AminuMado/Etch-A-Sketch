
const gridSizeSlider = document.getElementById("gridSizeSlider");
const mainContainer = document.querySelector(".main-container");
const displayGridSizeValue = document.querySelector(".displayGridSizeValue");
const eraser = document.getElementById("eraser");
const clearBoard = document.getElementById("clear");
const rainbow = document.getElementById("random-color");
const color = document.getElementById("color");
const colorPicker = document.getElementById("color-picker");
let grids = gridSizeSlider.value;
let gridsSquare = '';
let userColor = 'black';

function displayGridSize(){
    displayGridSizeValue.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`; 
    
    
}

function setGridSize(){
    mainContainer.style.gridTemplateColumns = `repeat(${gridSizeSlider.value},1fr)`
    mainContainer.style.gridTemplateRows = `repeat(${gridSizeSlider.value},1fr)`
}

function updateGrid(){
    gridsSquare = gridSizeSlider.value*gridSizeSlider.value;
    setGridSize();
    mainContainer.innerHTML=''; 
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
            grid.style.background=`${userColor}`;
        })
    })
}
function clearContainer(){
    let innerGrids = document.querySelectorAll(".grid-cell");
    innerGrids.forEach(function(grid){
    grid.style.background=`white`;
    
    });
}



gridSizeSlider.addEventListener("input",displayGridSize);
gridSizeSlider.addEventListener("change",updateGrid);
clearBoard.addEventListener("click",clearContainer);
eraser.addEventListener("click",()=> userColor="white");
color.addEventListener("click",()=> userColor= "black");
colorPicker.addEventListener("change",()=> userColor = colorPicker.value);


/* Initialization */
displayGridSize(); //This updates the text of the grid;
updateGrid(); // This sets the initial grid size;
