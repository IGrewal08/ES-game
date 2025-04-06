const container = document.querySelector('#container');

button.addEventListener("click", () => {
    removeGrid();
    let userInput;
    do {
        userInput = prompt('Enter Grid-Size');
    } while ((userInput < 2) || (userInput > 100))
    buildGrid(userInput);
});


function buildGrid (userInput) {
    const totalDiv = userInput * userInput;
    const dimension = 640/userInput;

    for (let i = 1; i <= totalDiv; i++) {
        const child = document.createElement('div');
        child.classList.add('child');
        child.style.width = `${dimension}px`;
        child.style.height = `${dimension}px`;
        container.appendChild(child);
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
    const childElement = document.getElementById('container');
    while (childElement.firstChild) {
        childElement.removeChild(childElement.firstChild);
    }
}

function getRGB () {
    return [Math.round((Math.random() * (255)))
        , Math.round((Math.random() * (255)))
        , Math.round((Math.random() * (255)))];
}

buildGrid(50);


