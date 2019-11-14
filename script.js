/**
* @type {HTMLCanvasElement}
*/
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

const taborety = [
{
    x: 100,
    y: 100
},
{
    x: 500,
    y: 100
},
{
    x: 450,
    y: 320
}
]
function renderTaboret(taboret){
    ctx.fillStyle = "brown";
    ctx.fillRect(taboret.x, taboret.y, 50, 10);
    ctx.fillRect(taboret.x+5, taboret.y+10, 5, 90);
    ctx.fillRect(taboret.x+40, taboret.y+10, 5, 90);
    
}
function render(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    taborety.forEach(renderTaboret);
}
render();

function moveRight(howMuch) {
    taboret.x += howMuch;
    render();
}

window.addEventListener("keydown", (e)=>{
    let speed = 10;
    if(e.key ==="ArrowDown") taborety[0].y += speed;
    else if(e.key ==="ArrowUp") taborety[0].y -= speed;
    else if(e.key ==="ArrowLeft") taborety[0].x -= speed;
    else if(e.key ==="ArrowRight") taborety[0].x += speed;
    render();
})

canvas.addEventListener

