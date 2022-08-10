let container = document.querySelector("#container");
let button = document.querySelector("#btn");
let columnLimit = 32;
let cellLimit = 32;

for( let i = 0; i < columnLimit; i++){
    let column = document.createElement('div');
    column.classList.add("column");
    container.appendChild(column);

    for(let i = 0; i < cellLimit; i++){
        let cell = document.createElement('div');
        cell.classList.add("cell");
        column.appendChild(cell);

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    }
}

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = "grey";
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = "black";
});

button.addEventListener('click', () => {
    location.reload();
});

 

