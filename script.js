const body = document.querySelector('body');
const checkMe = document.querySelector('button');
const colors = ["blue", "green", "yellow", "gray", "red", "marron", "pink", "purple", "black", "white", "teal", "orange", "silk", "gold"];
    
body.style.backgroundColor = "Green";


checkMe.addEventListener('click', changeColor);

function changeColor() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];

}