

/*
*   Add: adjust width and height of grid depending on input
*   Mouse Listener
*   
*/
const container = document.querySelector('#container');
let input = prompt();

if (input >= 100) {
    input = 100;
}

for (let i = 1; i <= input; i++) { //create parents
    const parent = document.createElement('div');
    parent.classList.add('parent');

    for (let j = 1; j <= input; j++) { //create child in parent
        const child = document.createElement('div');
        child.classList.add('child');
        parent.appendChild(child);
    }
    container.appendChild(parent);
}