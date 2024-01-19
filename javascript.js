let gridNumber = 9;

const gridContainer = document.querySelector('#gridContainer');

const btn1 = document.querySelector('#btn1');

btn1.addEventListener("click", function() {
    getGridNumber();
});

function getGridNumber() {
    gridNumber = prompt("How many squares across? (MAX: 81)");
    if (gridNumber > 81) {
        alert ("INVALID ENTRY! MAX: 81");
        gridNumber = prompt("How many squares across? (MAX: 81)");
    }
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
      }
    createGrid (gridNumber);
}

createGrid (gridNumber);
function createGrid(gridNumber) {
    let squareWidth = 800/gridNumber-2;
    for (i = 0; i < (gridNumber ** 2); i++ ) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.classList.add('square');
        content.textContent = ("A!");
        content.style.width = squareWidth + 'px';
        content.style.height = squareWidth + 'px';
        gridContainer.appendChild(content);
        content.addEventListener('mouseover', function() {
            content.classList.add('yellow');
        });
    }
}