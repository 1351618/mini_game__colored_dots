// const board = document.getElementById("board");
const board = document.querySelector("#board");

const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#008000",
    "#000080",
    "#FFC0CB",
    "#800000",
    "#008080",
    "#808000",
    "#800000",
    "#808080",
    "#F0F8FF",
    "#FAEBD7",
    "#7CFC00",
    "#D2691E",
];

const width = Math.round(board.offsetWidth / 12 - 1);
const height = Math.round(board.offsetHeight / 12 - 1);

const SQUARES_NUMBERR = width * height;

console.log("Ширина блока:", width);
console.log("Высота блока:", height);
console.log("Высота блока:", SQUARES_NUMBERR);

for (let i = 0; i < SQUARES_NUMBERR; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    board.append(square);

    square.addEventListener("mouseover", () => {
        setCollor(square);
    });
    square.addEventListener("mouseleave", () => {
        removeCollor(square);
    });
}

function setCollor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color},0 0 4px ${color},0 0 8px ${color},0 0 16px ${color}`;
}

function removeCollor(element) {
    element.style.backgroundColor = "#ffffff23";
    element.style.boxShadow = "0 0 2px #ffffff11";
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
