let gridNumber = 16;

const gridContainer = document.querySelector('#gridContainer');

const btn1 = document.querySelector('#btn1');

btn1.addEventListener("click", function() {
    getGridNumber();
});

function getGridNumber() {
    gridNumber = prompt("How many squares would you like?");
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
      }
    createGrid (gridNumber);
}

createGrid (gridNumber);
function createGrid(gridNumber) {
    for (i = 0; i < (gridNumber ** 2); i++ ) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.classList.add('square');
        content.textContent = ("A!");
        gridContainer.appendChild(content);
        content.addEventListener('mouseover', function() {
            content.classList.add('yellow');
        });
    }
}