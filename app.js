const canvas = document.getElementById("MC");
const ctx = canvas.getContext("2d");


var radius;

function getRandomColor() {
  // Generate random values for Red, Green, and Blue channels
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Combine RGB values into a CSS color string
  var color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}



function drawEwerything(){
var howManyCircles = Math.ceil( Math.random() * 30);



ctx.fillStyle = getRandomColor();
ctx.fillRect(0, 0, 300, 300);
ctx.fill();



for (let i = 0; i < howManyCircles; i++) {
  radius = +10;
  function drawcircle() {}
  ctx.lineWidth = Math.random() * 10;
  ctx.strokeStyle = getRandomColor();
  ctx.beginPath();
  ctx.arc(150, 150, radius * i, 0, 2 * Math.PI);
  ctx.stroke();
}
}//drawEwerything End



setInterval(drawEwerything, 500);