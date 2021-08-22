
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
let rainbowSwitch =false;
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
            if (rainbowSwitch){
                grid.style.background= `hsl(${Math.random() * 360}, 100%, 50%)`;
            }else
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
eraser.addEventListener("click",()=> {userColor="white";
rainbowSwitch=false});
color.addEventListener("click",()=>{
    userColor= "black"
    rainbowSwitch = false;
} );
colorPicker.addEventListener("change",()=> {userColor = colorPicker.value
    rainbowSwitch = false;});
rainbow.addEventListener("click",()=> rainbowSwitch = true);
/* Initialization */
displayGridSize(); //This updates the text of the grid;
updateGrid(); // This sets the initial grid size;
