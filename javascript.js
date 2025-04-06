/* Fix width and height scaling of child div after 10x10 grid
*/

const container = document.querySelector('#container');

button.addEventListener("click", () => {

    let input = prompt();
    if (input >= 100) {
        input = 100;
    }

    removeGrid();

    buildGrid(input);
});

function buildGrid (input) {

    for (let i = 1; i <= input; i++) {
        const parent = document.createElement('div');
        parent.classList.add('parent');
    
        for (let j = 1; j <= input; j++) {
            const child = document.createElement('div');
            child.classList.add('child');
            child.style.width = '100px';
            child.style.height = '100px';
            parent.appendChild(child);
        }
        container.appendChild(parent);
    }

    const allChild = document.querySelectorAll('.child');

    allChild.forEach((div) => {
        div.addEventListener("mouseover", (event) => {
            event.target.style.background = "black";
        });
    });
}

function removeGrid () {
    const parentElement = document.getElementById('container');
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

buildGrid(5);


