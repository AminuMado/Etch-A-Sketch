let gridCount = 0;



const gridSizeSlider = document.getElementById("gridSizeSlider");
console.log(gridSizeSlider);
let gridSize = gridSizeSlider.value;
const mainContainer = document.getElementsByClassName("main-container")[0];
const displayGridSizeValue = document.getElementsByClassName("displayGridSizeValue")[0];
function displayGridSize(){
    displayGridSizeValue.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`; 
}


function setGridSize(){
    mainContainer.style.gridTemplateColumns = `repeat(${gridSizeSlider.value},1fr)`
    mainContainer.style.gridTemplateRows = `repeat(${gridSizeSlider.value},1fr)`
}

function updateGrid(){
    displayGridSize();
    setGridSize();
    let grids = gridSizeSlider.value;
    let gridsSquare = grids*grids;
    
    for( let i = 0; i<gridsSquare;i++){
        const createDiv = document.createElement("div");
        mainContainer.appendChild(createDiv);
        createDiv.classList.add("grid-cell");    
    }
    
}
gridSizeSlider.addEventListener("input",updateGrid);
/* Initialization */
displayGridSize(); //This updates the text of the grid;
updateGrid();