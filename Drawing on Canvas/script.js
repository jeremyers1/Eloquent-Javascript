/** @type {HTMLCanvasElement} */
let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');
// if you have h/w css settings, MATCH them here
// otherwise, anything inside the canvas will be skewed
canvas.height = 500;
canvas.width = 500;

ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 50);

ctx.strokeStyle = 'blue';
ctx.strokeRect(150, 10, 50, 50);
ctx.lineWidth = 5;
ctx.strokeRect(250, 10, 50, 50);

// draw line(s)
ctx.beginPath();
ctx.lineWidth = 1;
for (let y = 100; y < 200; y += 10) {
	ctx.moveTo(10, 60); // starting position ... moveTo(here)
	ctx.lineTo(110, y); // starts at LAST position and draws a lineTo(here),
}
ctx.stroke(); // draws the lines

// draw shape --> use lines, but close shape and fill it
ctx.beginPath();
ctx.moveTo(150, 100); // starting position ... moveTo(here)
ctx.lineTo(200, 100); // draws a lineTo(here)
ctx.lineTo(175, 150); //draws a lineTo(here)
// final line of shape is implied
// but could use ctx.closePath() to explicity close shape
ctx.fill(); // fills the lines IF the shape can be closed

// shapes with curved lines
