const container = document.querySelector('#container');

button.addEventListener("click", () => {

    let input = prompt();
    if (input >= 100 && input < 2) {
        input = prompt();
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
            parent.appendChild(child);
        }
        container.appendChild(parent);
    }

    const allChild = document.querySelectorAll('.child');

    allChild.forEach((div) => {
        div.addEventListener("mouseover", (event) => {
            const results = getRGB();
            event.target.style.background = `rgb(${results[0]}, ${results[1]}, ${results[2]})`;
        });
    });
}

function removeGrid () {
    const parentElement = document.getElementById('container');
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

function getRGB () {
    return [Math.round((Math.random() * (255)))
        , Math.round((Math.random() * (255)))
        , Math.round((Math.random() * (255)))];
}

buildGrid(80);


