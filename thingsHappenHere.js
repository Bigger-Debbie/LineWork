let container = document.querySelector("#container");
let columnLimit = 16;
let cellLimit = 16;

for( let i = 0; i < columnLimit; i++){
    let column = document.createElement('div');
    column.classList.add("column");
    container.appendChild(column);

    for(let i = 0; i < cellLimit; i++){
        let cell = document.createElement('div');
        cell.classList.add("cell");
        column.appendChild(cell);
    }
}
