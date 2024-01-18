const gridContainer = document.querySelector('#gridContainer');

for (i = 0; i < 256; i++ ) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.classList.add('square');
    content.textContent = ("A!");
    gridContainer.appendChild(content);
}
