/** @type {HTMLCanvasElement} */
let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');
// if you have h/w css settings, MATCH them here
// otherwise, anything inside the canvas will be skewed
canvas.height = 800;
canvas.width = 800;

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

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.lineWidth = 1;
for (let y = 100; y < 200; y += 10) {
	ctx.moveTo(10, y);
	ctx.lineTo(110, y);
}
ctx.stroke();

// draw shape --> use lines, but close shape and fill it
ctx.beginPath();
ctx.moveTo(150, 100); // starting position ... moveTo(here)
ctx.lineTo(200, 100); // draws a lineTo(here)
ctx.lineTo(175, 150); //draws a lineTo(here)
// final line of shape is implied
// but could use ctx.closePath() to explicity close shape
ctx.fill(); // fills the lines IF the shape can be closed

// quadratic curve lines
ctx.beginPath();
ctx.moveTo(250, 100);
// the first two numbers are control, this point attracts the line, but it doesn't go there...
// the second two numbers are goal, similar to lineTo
ctx.quadraticCurveTo(275, 140, 300, 100);
ctx.lineTo(275, 150);
ctx.closePath();
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(350, 100);
ctx.quadraticCurveTo(475, 140, 400, 150);
ctx.closePath();
ctx.stroke();

ctx.strokeStyle = 'purple';
ctx.beginPath();
ctx.moveTo(250, 250);
ctx.quadraticCurveTo(110, 160, 300, 250);
ctx.lineTo(275, 180);
ctx.closePath();
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(400, 200);
ctx.quadraticCurveTo(210, 110, 450, 200);
ctx.lineTo(425, 250);
ctx.closePath();
ctx.stroke();

// bezier curve
ctx.strokeStyle = 'orange';
ctx.beginPath();
ctx.moveTo(10, 300); // lower left corner starting point
// different from quadratic in that bezier has TWO control points
ctx.bezierCurveTo(10, 180, 90, 280, 80, 300); // the curve
ctx.lineTo(110, 200); //diagonal right line
ctx.lineTo(10, 200); // upper horizontal line
ctx.closePath(); // back down left vertical line to start
ctx.stroke();

// arc curve
ctx.strokeStyle = 'pink';
ctx.beginPath();
// arc takes a center point (150,300), a radius (50), and an angle in radians (go 0 to 2PI(6.28) for full circle)
ctx.arc(150, 300, 50, 0, 7);
ctx.arc(300, 300, 50, 0, 1);
// starts at end of last arc, draws a line to 300,300, then starts creating a 50 radius circle of 0 to 1 radian
//ctx.closePath();
ctx.stroke();

// pie chart moved to bottom for text excercise
const results = [
	{ name: 'Satisfied', count: 1043, color: 'lightblue' },
	{ name: 'Neutral', count: 563, color: 'lightgreen' },
	{ name: 'Unsatisfied', count: 510, color: 'pink' },
	{ name: 'No Comment', count: 175, color: 'silver' },
];

let total = results.reduce((sum, { count }) => sum + count, 0);
// start at the top
let currentAngle = -0.5 * Math.PI;
for (let result of results) {
	let sliceAngle = (result.count / total) * 2 * Math.PI;
	ctx.beginPath();
	// center= 100,425
	// from currentAngle, clockwise by sliceAngle
	ctx.arc(100, 425, 50, currentAngle, currentAngle + sliceAngle);
	currentAngle += sliceAngle;
	ctx.lineTo(100, 425);
	ctx.fillStyle = result.color;
	ctx.fill();
}

// adding text to canvas
ctx.font = '12pt Georgia';
ctx.fillStyle = 'fuchsia';
ctx.fillText('I can draw text, too!', 320, 50);
// can use text.Align and textBaseline to arrange text location

//adding image to canvas
let img = new Image();
img.src = 'img/sprites.png';
img.addEventListener('load', () => {
	ctx.drawImage(img, 175, 400); // img.src, dx, dy
	ctx.drawImage(img, 175, 425, 104, 40); // src, dx, dy, dw, dh
	ctx.drawImage(img, 0, 0, 20, 40, 275, 400, 20, 40); // src, sx, sy, sw, sh, dx, dy, dw, dh
});

// to animate a sprite on canvas
let sprite = new Image();
sprite.src = 'img/player.png';
let spriteW = 24;
let spriteH = 30;
sprite.addEventListener('load', () => {
	let cycle = 0;
	setInterval(() => {
		ctx.clearRect(300, 400, spriteW, spriteH);
		ctx.drawImage(sprite, cycle * spriteW, 0, spriteW, spriteH, 300, 400, spriteW, spriteH);
		cycle = (cycle + 1) % 8; //cycles through first 8 frames of sprite (running)
	}, 120);
});

// transformation using scale()
// due to scaling, this causes images above to go off screen
/* ctx.strokeStyle = 'blue';
ctx.scale(3, 0.5); 
ctx.beginPath(0);
ctx.arc(100, 800, 40, 0, 7);
ctx.lineWidth = 3;
ctx.stroke(); */

function flipHorizontally(context, around) {
	context.translate(around, 0);
	context.scale(-1, 1); // for some reason, this flips BOTH calls to sprite, rather than just sprite2
	// error is fixed by calling .save() and .restore() as found below... However, see note below function
	context.translate(-around, 0);
}
// Furthermore, according to
// https://stackoverflow.com/questions/8168217/html-canvas-how-to-draw-a-flipped-mirrored-image
// it's insanely faster to just have a separate reversed sprite file

let sprite2 = new Image();
sprite2.src = 'img/player.png';
let sprite2W = 24;
let sprite2H = 30;
sprite2.addEventListener('load', () => {
	ctx.save();
	flipHorizontally(ctx, 350 + sprite2W / 2);
	ctx.drawImage(sprite2, 0, 0, sprite2W, sprite2H, 350, 400, sprite2W, sprite2H);
	ctx.restore();
});

function branch(length, angle, scale) {
	ctx.fillRect(0, 0, 1, length);
	if (length < 8) return;
	ctx.save();
	ctx.translate(0, length);
	ctx.rotate(-angle);
	branch(length * scale, angle, scale);
	ctx.rotate(2 * angle);
	branch(length * scale, angle, scale);
	ctx.restore();
}
ctx.fillStyle = 'brown';
ctx.save();
ctx.translate(250, 500);
branch(60, 0.5, 0.8);
ctx.restore();

// Exercise 1 p. 307

function trapezoid(x, y) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + 50, y);
	ctx.lineTo(x + 70, y + 50);
	ctx.lineTo(x - 20, y + 50);
	ctx.closePath();
	ctx.strokeStyle = 'red';
	ctx.stroke();
}
trapezoid(500, 400);

function diamond(x, y) {
	ctx.translate(x, y);
	ctx.rotate(Math.PI / 4);
	ctx.fillStyle = 'red';
	ctx.fillRect(-30, -30, 60, 60);
	ctx.resetTransform();
}
diamond(650, 420);

function zigzag(x, y) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	for (let i = 0; i < 8; i++) {
		ctx.lineTo(x + 80, y + i * 8 + 4);
		ctx.lineTo(x, y + i * 8 + 8);
	}
	ctx.stroke();
}
zigzag(500, 500);

function spiral(x, y) {
	let radius = 50,
		xCenter = x + radius,
		yCenter = y + radius;
	ctx.beginPath();
	ctx.moveTo(xCenter, yCenter);
	for (let i = 0; i < 300; i++) {
		let angle = (i * Math.PI) / 30;
		let dist = (radius * i) / 300;
		ctx.lineTo(xCenter + Math.cos(angle) * dist, yCenter + Math.sin(angle) * dist);
	}
	ctx.stroke();
}
spiral(600, 500);

function star(x, y) {
	let radius = 50,
		xCenter = x + radius,
		yCenter = y + radius;
	ctx.beginPath();
	ctx.moveTo(xCenter + radius, yCenter);
	for (let i = 1; i <= 8; i++) {
		let angle = (i * Math.PI) / 4;
		ctx.quadraticCurveTo(xCenter, yCenter, xCenter + Math.cos(angle) * radius, yCenter + Math.sin(angle) * radius);
	}
	ctx.fillStyle = 'gold';
	ctx.fill();
}
star(550, 620);

// Pie Chart with text

let total2 = results.reduce(function (sum, choice) {
	return sum + choice.count;
}, 0);

let currentAngle2 = -0.5 * Math.PI;
let centerX = 620,
	centerY = 175;

results.forEach(function (result) {
	let sliceAngle2 = (result.count / total2) * 2 * Math.PI;
	ctx.beginPath();
	ctx.arc(centerX, centerY, 100, currentAngle2, currentAngle2 + sliceAngle2);

	let middleAngle = currentAngle2 + 0.5 * sliceAngle2;
	let textX = Math.cos(middleAngle) * 120 + centerX;
	let textY = Math.sin(middleAngle) * 120 + centerY;
	ctx.textBaseLine = 'middle';
	if (Math.cos(middleAngle) > 0) {
		ctx.textAlign = 'left';
	} else {
		ctx.textAlign = 'right';
	}
	ctx.font = '15px sans-serif';
	ctx.fillStyle = 'black';
	ctx.fillText(result.name, textX, textY);

	currentAngle2 += sliceAngle2;
	ctx.lineTo(centerX, centerY);
	ctx.fillStyle = result.color;
	ctx.fill();
});
