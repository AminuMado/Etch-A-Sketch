let gridCount = 0;



const gridSizeSlider = document.getElementById("gridSizeSlider");
console.log(gridSizeSlider);
let gridSize = gridSizeSlider.value;
const mainContainer = document.getElementsByClassName("main-container")[0];
const displayGridSizeValue = document.getElementsByClassName("displayGridSizeValue")[0];
function displayGridSize(){
    displayGridSizeValue.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`; 
}
displayGridSize();
gridSizeSlider.addEventListener("input",displayGridSize);

for( let i = 0; i<256;i++){
    const createDiv = document.createElement("div");
    mainContainer.appendChild(createDiv);
    createDiv.classList.add("grid-cell");
}