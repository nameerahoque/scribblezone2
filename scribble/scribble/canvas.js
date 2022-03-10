//DEVELOPER: Nameera Hoque, IS117-001, Fall 2020

var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
var pos = {x: 100, y: 100 };

function position(z) {
  pos.x = z.clientX;
  pos.y = z.clientY;
}

function draw(z) {
if (z.buttons !== 1) return;
var color = document.getElementById("hex").value;
var width = document.getElementById("size").value;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(pos.x, pos.y);
    position(z);
    ctx.lineTo(pos.x, pos.y);
    ctx.closePath();
    ctx.stroke();
}

document.addEventListener("mousemove", draw);
document.addEventListener("mouseup", position);
document.addEventListener("mousedown", position);
document.addEventListener("mouseenter", position);