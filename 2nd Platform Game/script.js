let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

// prettier-ignore
var GAME_LEVELS = [`                                                    
................................................................................
................................................................................
................................................................................
................................................................................
................................................................................
................................................................................
..................................................................###...........
...................................................##......##....##+##..........
....................................o.o......##..................#+++#..........
.................................................................##+##..........
...................................#####..........................#v#...........
............................................................................##..
..##......................................o.o................................#..
..#.....................o....................................................#..
..#......................................#####.............................o.#..
..#..........####.......o....................................................#..
..#..@.......#..#................................................#####.......#..
..############..###############...####################.....#######...#########..
..............................#...#..................#.....#....................
..............................#+++#..................#+++++#....................
..............................#+++#..................#+++++#....................
..............................#####..................#######....................
................................................................................
................................................................................
`,`                                                                     
................................................................................
................................................................................
....###############################.............................................
...##.............................##########################################....
...#.......................................................................##...
...#....o...................................................................#...
...#................................................=.......................#...
...#.o........################...................o..o...........|........o..#...
...#.........................#..............................................#...
...#....o....................##########.....###################....##########...
...#..................................#+++++#.................#....#............
...###############....oo......=o.o.o..#######.###############.#....#............
.....#...............o..o.............#.......#......#........#....#............
.....#....................#############..######.####.#.########....########.....
.....#.............########..............#...........#.#..................#.....
.....#..........####......####...#####################.#..................#.....
.....#........###............###.......................########....########.....
.....#.......##................#########################......#....#............
.....#.......#................................................#....#............
.....###......................................................#....#............
.......#...............o...........................................#............
.......#...............................................o...........#............
.......#########......###.....############.........................##...........
.............#..................#........#####....#######.o.........########....
.............#++++++++++++++++++#............#....#.....#..................#....
.............#++++++++++++++++++#..........###....###...####.o.............#....
.............####################..........#........#......#.....|.........#....
...........................................#++++++++#......####............#....
...........................................#++++++++#.........#........@...#....
...........................................#++++++++#.........##############....
...........................................##########...........................
................................................................................
`,`
......................................#++#........................#######....................................#+#..
......................................#++#.....................####.....####.................................#+#..
......................................#++##########...........##...........##................................#+#..
......................................##++++++++++##.........##.............##...............................#+#..
.......................................##########++#.........#....................................o...o...o..#+#..
................................................##+#.........#.....o...o....................................##+#..
.................................................#+#.........#................................###############++#..
.................................................#v#.........#.....#...#........................++++++++++++++##..
.............................................................##..|...|...|..##............#####################...
..............................................................##+++++++++++##............v........................
...............................................................####+++++####......................................
...............................................#.....#............#######........###.........###..................
...............................................#.....#...........................#.#.........#.#..................
...............................................#.....#.............................#.........#....................
...............................................#.....#.............................##........#....................
...............................................##....#.............................#.........#....................
...............................................#.....#......o..o.....#...#.........#.........#....................
...............#######........###...###........#.....#...............#...#.........#.........#....................
..............##.....##.........#...#..........#.....#.....######....#...#...#########.......#....................
.............##.......##........#.o.#..........#....##...............#...#...#...............#....................
.....@.......#.........#........#...#..........#.....#...............#...#...#...............#....................
....###......#.........#........#...#..........#.....#...............#...#####...######......#....................
....#.#......#.........#.......##.o.##.........#.....#...............#.....o.....#.#.........#....................
++++#.#++++++#.........#++++++##.....##++++++++##....#++++++++++.....#.....=.....#.#.........#....................
++++#.#++++++#.........#+++++##.......##########.....#+++++++##+.....#############.##..o.o..##....................
++++#.#++++++#.........#+++++#....o.................##++++++##.+....................##.....##.....................
++++#.#++++++#.........#+++++#.....................##++++++##..+.....................#######......................
++++#.#++++++#.........#+++++##.......##############++++++##...+..................................................
++++#.#++++++#.........#++++++#########++++++++++++++++++##....+..................................................
++++#.#++++++#.........#++++++++++++++++++++++++++++++++##.....+..................................................
`,`
..............................................................................................................
..............................................................................................................
..............................................................................................................
..............................................................................................................
..............................................................................................................
........................................o.....................................................................
..............................................................................................................
........................................#.....................................................................
........................................#.....................................................................
........................................#.....................................................................
........................................#.....................................................................
.......................................###....................................................................
.......................................#.#.................+++........+++..###................................
.......................................#.#.................+#+........+#+.....................................
.....................................###.###................#..........#......................................
......................................#...#.................#...oooo...#.......###............................
......................................#...#.................#..........#......#+++#...........................
......................................#...#.................############.......###............................
.....................................##...##......#...#......#................................................
......................................#...#########...########..............#.#...............................
......................................#...#...........#....................#+++#..............................
......................................#...#...........#.....................###...............................
.....................................##...##..........#.......................................................
......................................#...#=.=.=.=....#............###........................................
......................................#...#...........#...........#+++#.......................................
......................................#...#....=.=.=.=#.....o......###.......###..............................
.....................................##...##..........#.....................#+++#.............................
..............................o...o...#...#...........#.....#................##v........###...................
......................................#...#...........#..............#.................#+++#..................
.............................###.###.###.###.....o.o..#++++++++++++++#...................v#...................
.............................#.###.#.#.###.#..........#++++++++++++++#........................................
.............................#.............#...#######################........................................
.............................##...........##.........................................###......................
..###.........................#.....#.....#.........................................#+++#................###..
..#.#.........................#....###....#..........................................###.................#.#..
..#...........................#....###....#######........................#####.............................#..
..#...........................#...........#..............................#...#.............................#..
..#...........................##..........#..............................#.#.#.............................#..
..#.......................................#.......|####|....|####|.....###.###.............................#..
..#................###.............o.o....#..............................#.........###.....................#..
..#...............#####.......##..........#.............................###.......#+++#..........#.........#..
..#...............o###o.......#....###....#.............................#.#........###..........###........#..
..#................###........#############..#.oo.#....#.oo.#....#.oo..##.##....................###........#..
..#......@..........#.........#...........#++#....#++++#....#++++#....##...##....................#.........#..
..#############################...........#############################.....################################..
..............................................................................................................
..............................................................................................................
`,`
..................................................................................................###.#.......
......................................................................................................#.......
..................................................................................................#####.......
..................................................................................................#...........
..................................................................................................#.###.......
..........................o.......................................................................#.#.#.......
.............................................................................................o.o.o###.#.......
...................###................................................................................#.......
.......+..o..+................................................#####.#####.#####.#####.#####.#####.#####.......
.......#.....#................................................#...#.#...#.#...#.#...#.#...#.#...#.#...........
.......#=.o..#............#...................................###.#.###.#.###.#.###.#.###.#.###.#.#####.......
.......#.....#..................................................#.#...#.#...#.#...#.#...#.#...#.#.....#.......
.......+..o..+............o..................................####.#####.#####.#####.#####.#####.#######.......
..............................................................................................................
..........o..............###..............................##..................................................
..............................................................................................................
..............................................................................................................
......................................................##......................................................
...................###.........###............................................................................
..............................................................................................................
..........................o.....................................................#......#......................
..........................................................##.....##...........................................
.............###.........###.........###.................................#..................#.................
..............................................................................................................
.................................................................||...........................................
..###########.................................................................................................
..#.........#.o.#########.o.#########.o.##................................................#...................
..#.........#...#.......#...#.......#...#.................||..................#.....#.........................
..#..@......#####...o...#####...o...#####.....................................................................
..#######.....................................#####.......##.....##.....###...................................
........#=..................=................=#...#.....................###...................................
........#######################################...#+++++++++++++++++++++###+++++++++++++++++++++++++++++++++++
..................................................############################################################
..............................................................................................................
`];

// TODO: Add green monsters ... can be killed if jumped upon
// TODO: DONE! add smaller w and h using Math.min in constructor below, and then center screen on player sprite, having game area scroll with him ... just like in Super Mario Bros
// TODO: On some screen sizes, the words and instructions are hidden behind the Canvas. Fix this
// TODO: Enable jump with mouseclick
const scale = 20;
const setLives = 100;

function flipHorizontally(context, around) {
	context.translate(around, 0);
	context.scale(-1, 1);
	context.translate(-around, 0);
}

let CanvasDisplay = class CanvasDisplay {
	constructor(level) {
		this.canvas = document.getElementById('canvas');
		this.canvas.width = Math.min(600, level.width * scale);
		this.canvas.height = Math.min(450, level.height * scale);
		//parent.appendChild(this.canvas);
		this.cx = this.canvas.getContext('2d');

		this.flipPlayer = false;

		this.viewport = {
			left: 0,
			top: 0,
			width: this.canvas.width / scale,
			height: this.canvas.height / scale,
		};
	}
};

CanvasDisplay.prototype.syncState = function (state) {
	this.updateViewport(state);
	this.clearDisplay(state.status);
	this.drawBackground(state.level);
	this.drawActors(state.actors);
};

CanvasDisplay.prototype.updateViewport = function (state) {
	let view = this.viewport,
		margin = view.width / 3;
	let player = state.player;
	let center = player.pos.plus(player.size.times(0.5));

	if (center.x < view.left + margin) {
		view.left = Math.max(center.x - margin, 0);
	} else if (center.x > view.left + view.width - margin) {
		view.left = Math.min(center.x + margin - view.width, state.level.width - view.width);
	}
	if (center.y < view.top + margin) {
		view.top = Math.max(center.y - margin, 0);
	} else if (center.y > view.top + view.height - margin) {
		view.top = Math.min(center.y + margin - view.height, state.level.height - view.height);
	}
};

CanvasDisplay.prototype.clearDisplay = function (status) {
	if (status == 'won') {
		this.cx.fillStyle = 'rgb(68, 191, 255)';
	} else if (status == 'lost') {
		this.cx.fillStyle = 'rgb(44, 136, 214)';
	} else {
		this.cx.fillStyle = 'rgb(52, 166, 251)';
	}
	this.cx.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

var otherSprites = document.createElement('img');
otherSprites.src = 'img/sprites.png';

CanvasDisplay.prototype.drawBackground = function (level) {
	let { left, top, width, height } = this.viewport;
	let xStart = Math.floor(left);
	let xEnd = Math.ceil(left + width);
	let yStart = Math.floor(top);
	let yEnd = Math.ceil(top + height);

	for (let y = yStart; y < yEnd; y++) {
		for (let x = xStart; x < xEnd; x++) {
			let tile = level.rows[y][x];
			if (tile == 'empty') continue;
			let screenX = (x - left) * scale;
			let screenY = (y - top) * scale;
			let tileX = tile == 'lava' ? scale : 0;
			this.cx.drawImage(otherSprites, tileX, 0, scale, scale, screenX, screenY, scale, scale);
		}
	}
};

var playerSprites = document.createElement('img');
playerSprites.src = 'img/player.png';
var playerXOverlap = 4;

CanvasDisplay.prototype.drawPlayer = function (player, x, y, width, height) {
	width += playerXOverlap * 2;
	x -= playerXOverlap;
	if (player.speed.x != 0) {
		this.flipPlayer = player.speed.x < 0;
	}

	let tile = 8;
	if (player.speed.y != 0) {
		tile = 9;
	} else if (player.speed.x != 0) {
		tile = Math.floor(Date.now() / 60) % 8;
	}

	this.cx.save();
	if (this.flipPlayer) {
		flipHorizontally(this.cx, x + width / 2);
	}
	let tileX = tile * width;
	this.cx.drawImage(playerSprites, tileX, 0, width, height, x, y, width, height);
	this.cx.restore();
};

CanvasDisplay.prototype.drawActors = function (actors) {
	for (let actor of actors) {
		let width = actor.size.x * scale;
		let height = actor.size.y * scale;
		let x = (actor.pos.x - this.viewport.left) * scale;
		let y = (actor.pos.y - this.viewport.top) * scale;
		if (actor.type == 'player') {
			this.drawPlayer(actor, x, y, width, height);
		} else {
			let tileX = (actor.type == 'coin' ? 2 : 1) * scale;
			this.cx.drawImage(otherSprites, tileX, 0, width, height, x, y, width, height);
		}
	}
};

class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	plus(other) {
		return new Vec(this.x + other.x, this.y + other.y);
	}
	times(factor) {
		return new Vec(this.x * factor, this.y * factor);
	}
}

class Player {
	constructor(pos, speed) {
		this.pos = pos;
		this.speed = speed;
	}

	get type() {
		return 'player';
	}

	static create(pos) {
		return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
	}
}

Player.prototype.size = new Vec(0.8, 1.5);

class Lava {
	constructor(pos, speed, reset) {
		this.pos = pos;
		this.speed = speed;
		this.reset = reset;
	}

	get type() {
		return 'lava';
	}

	static create(pos, char) {
		if (char == '=') {
			return new Lava(pos, new Vec(2, 0));
		} else if (char == '|') {
			return new Lava(pos, new Vec(0, 2));
		} else if (char == 'v') {
			return new Lava(pos, new Vec(0, 3), pos);
		}
	}
}

Lava.prototype.size = new Vec(1, 1);

class Coin {
	constructor(pos, basePos, wobble) {
		this.pos = pos;
		this.basePos = basePos;
		this.wobble = wobble;
	}

	get type() {
		return 'coin';
	}

	static create(pos) {
		let basePos = pos.plus(new Vec(0.2, 0.1));
		return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
	}
}

Coin.prototype.size = new Vec(0.6, 0.6);

const levelChars = {
	'.': 'empty',
	'#': 'wall',
	'+': 'lava',
	'@': Player,
	o: Coin,
	'=': Lava,
	'|': Lava,
	v: Lava,
};

class Level {
	constructor(plan) {
		//first create an array of rows from plan
		let rows = plan
			.trim()
			.split('\n')
			.map(l => [...l]);
		// and get the measurements of it
		this.height = rows.length;
		this.width = rows[0].length;
		this.startActors = [];
		// then take the rows array, and turn it into an array of arrays, so we have x,y index coordinates for each point
		this.rows = rows.map((row, y) => {
			return row.map((char, x) => {
				// if the type is 'empty', 'wall', or 'lava', return the string
				let type = levelChars[char];
				if (typeof type === 'string') return type;
				// otherwise, push element to StartActors (only 4 Actors in level 1: Lava, Coin, Coin, Player)
				// the typeof these Actors are classes
				// (their literal typeof is 'function', but that's because classes are just constructor functions),
				// so the .create() method (NOT TO BE CONFUSED with the Object.create() method!!)
				// is called make an Actor, as it is defined in the static create() section of each class.
				// Frankly, since everything is an object in JS, it is VERY confusing for him to have written
				// a.create() method inside the Actors classes
				// Also, I am not fully sure why .create is used to make the Actors, rather than the constructor.
				// yet .create() includes the constructor in each class?? Very odd...
				// Here, new Vec is sent as first param, and char as second.
				// Only Lava needs the second 'char' parameter, as there are 3 types of lava
				this.startActors.push(type.create(new Vec(x, y), char));
				return 'empty';
			});
		});
	}
}

class State {
	constructor(level, actors, status) {
		this.level = level;
		this.actors = actors;
		this.status = status;
	}

	static start(level) {
		return new State(level, level.startActors, 'playing');
	}

	get player() {
		return this.actors.find(a => a.type == 'player');
	}
}

// Drawing the Level on the screen
/*
function elt(name, attrs, ...children) {
	let dom = document.createElement(name);
	for (let attr of Object.keys(attrs)) {
		dom.setAttribute(attr, attrs[attr]);
	}
	for (let child of children) {
		dom.appendChild(child);
	}
	return dom;
}

// prettier-ignore
 class DOMDisplay {
	constructor(parent, level) {
		this.dom = elt("div", { class: "game"}, drawGrid(level));
		this.actorLayer = null;
		parent.appendChild(this.dom);
	}
	clear() {
		this.dom.remove();
	}
} 

const scale = 20;
// prettier-ignore
function drawGrid(level) {
  return elt(
    "table", { class: "background", style: `width: ${level.width * scale}px` }, ...level.rows.map(row =>
      elt("tr", { style: `height: ${scale}px` }, ...row.map(type =>
        elt("td", { class: type }
      ))
    ))
  )
}

function drawActors(actors) {
	return elt(
		'div',
		{},
		...actors.map(actor => {
			let rect = elt('div', { class: `actor ${actor.type}` });
			rect.style.width = `${actor.size.x * scale}px`;
			rect.style.height = `${actor.size.y * scale}px`;
			rect.style.left = `${actor.pos.x * scale}px`;
			rect.style.top = `${actor.pos.y * scale}px`;
			return rect;
		})
	);
}

DOMDisplay.prototype.syncState = function (state) {
	if (this.actorLayer) this.actorLayer.remove();
	this.actorLayer = drawActors(state.actors);
	this.dom.appendChild(this.actorLayer);
	this.dom.className = `game ${state.status}`;
	this.scrollPlayerIntoView(state);
};

DOMDisplay.prototype.scrollPlayerIntoView = function (state) {
	let width = this.dom.clientWidth;
	let height = this.dom.clintHeight;
	let margin = width / 3;

	// the Viewport
	let left = this.dom.scrollLeft,
		right = left + width;
	let top = this.dom.scrollTop,
		bottom = top + height;

	let player = state.player;
	let center = player.pos.plus(player.size.times(0.5)).times(scale);

	if (center.x < left + margin) {
		this.dom.scrollLeft = center.x - margin;
	} else if (center.x > right - margin) {
		this.dom.scrollLeft = center.x + margin - width;
	}

	if (center.y < top + margin) {
		this.dom.scrollTop = center.y - margin;
	} else if (center.y > bottom - margin) {
		this.dom.scrollTop = center.y + margin - height;
	}
};
*/
// Collision and updating motion
Level.prototype.touches = function (pos, size, type) {
	let xStart = Math.floor(pos.x);
	let xEnd = Math.ceil(pos.x + size.x);
	let yStart = Math.floor(pos.y);
	let yEnd = Math.ceil(pos.y + size.y);

	for (let y = yStart; y < yEnd; y++) {
		for (let x = xStart; x < xEnd; x++) {
			let isOutside = x < 0 || x >= this.width || y < 0 || y >= this.height;
			let here = isOutside ? 'wall' : this.rows[y][x];
			if (here == type) return true;
		}
	}
	return false;
};

State.prototype.update = function (time, keys, mouse) {
	let actors = this.actors.map(actor => actor.update(time, this, keys, mouse));
	let newState = new State(this.level, actors, this.status);

	if (newState.status != 'playing') return newState;

	let player = newState.player;
	if (this.level.touches(player.pos, player.size, 'lava')) {
		// *** TODO: Can I make him jump when he touches lava?
		// new Player(player.pos, new Vec(0, -jumpSpeed));
		return new State(this.level, actors, 'lost');
	}

	for (let actor of actors) {
		if (actor != player && overlap(actor, player)) {
			newState = actor.collide(newState);
		}
	}
	return newState;
};

// prettier-ignore
function overlap(actor1, actor2) {
  return actor1.pos.x + actor1.size.x > actor2.pos.x &&
         actor1.pos.x < actor2.pos.x + actor2.size.x &&
         actor1.pos.y + actor1.size.y > actor2.pos.y &&
         actor1.pos.y < actor2.pos.y + actor2.size.y;
}

Lava.prototype.collide = function (state) {
	return new State(state.level, state.actors, 'lost');
};

Coin.prototype.collide = function (state) {
	let filtered = state.actors.filter(a => a != this);
	let status = state.status;
	if (!filtered.some(a => a.type == 'coin')) status = 'won';
	return new State(state.level, filtered, status);
};

// Updating the actors
Lava.prototype.update = function (time, state) {
	let newPos = this.pos.plus(this.speed.times(time));
	if (!state.level.touches(newPos, this.size, 'wall')) {
		return new Lava(newPos, this.speed, this.reset);
	} else if (this.reset) {
		return new Lava(this.reset, this.speed, this.reset);
	} else {
		return new Lava(this.pos, this.speed.times(-1));
	}
};

const wobbleSpeed = 8,
	wobbleDist = 0.07;

Coin.prototype.update = function (time) {
	let wobble = this.wobble + time * wobbleSpeed;
	let wobblePos = Math.sin(wobble) * wobbleDist;
	return new Coin(this.basePos.plus(new Vec(0, wobblePos)), this.basePos, wobble);
};

const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

let mouseClick = false;
window.addEventListener('click', () => {
	mouseClick = true;
});

Player.prototype.update = function (time, state, keys, mouse) {
	let xSpeed = 0;
	if (keys.ArrowLeft) xSpeed -= playerXSpeed;
	if (keys.ArrowRight) xSpeed += playerXSpeed;
	let pos = this.pos;
	let movedX = pos.plus(new Vec(xSpeed * time, 0));
	if (!state.level.touches(movedX, this.size, 'wall')) {
		pos = movedX;
	}
	let ySpeed = this.speed.y + time * gravity;
	let movedY = pos.plus(new Vec(0, ySpeed * time));
	if (!state.level.touches(movedY, this.size, 'wall')) {
		pos = movedY;
		mouseClick = false; //reset mouseClick to false when player touches wall
	} else if (keys.ArrowUp || keys.Enter || (keys[' '] && ySpeed > 0)) {
		ySpeed = -jumpSpeed;
	} else if (mouse) {
		ySpeed = -jumpSpeed;
	} else {
		ySpeed = 0;
	}
	return new Player(pos, new Vec(xSpeed, ySpeed));
};

// Running the Game
function runAnimation(frameFunc) {
	let lastTime = null;
	function frame(time) {
		if (lastTime != null) {
			let timeStep = Math.min(time - lastTime, 100) / 1000;
			if (frameFunc(timeStep) === false) return;
		}
		lastTime = time;
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
}

/* Old Version of runLevel and trackKeys ... kept for comparision/learning purposes
function runLevel(level, Display) {
	let display = new Display(document.body, level);
	let state = State.start(level);
	let ending = 1;
	return new Promise(resolve => {
		runAnimation(time => {
			state = state.update(time, arrowKeys);
			display.syncState(state);
			if (state.status == 'playing') {
				return true;
			} else if (ending > 0) {
				ending -= time;
				return true;
			} else {
				display.clear();
				resolve(state.status);
				return false;
			}
		});
	});
}

// Tracking Keys
function trackKeys(keys) {
	let down = Object.create(null);
	function track(event) {
		if (keys.includes(event.key)) {
			down[event.key] = event.type == 'keydown';
			event.preventDefault();
		}
	}
	window.addEventListener('keydown', track);
	window.addEventListener('keyup', track);
	return down;
}

*/

// To know when to stop and restart the animation, a level that is
// being displayed may be in three `running` states:
//
// * "yes":     Running normally.
// * "no":      Paused, animation isn't running
// * "pausing": Must pause, but animation is still running
//
// The key handler, when it notices escape being pressed, will do a
// different thing depending on the current state. When running is
// "yes" or "pausing", it will switch to the other of those two
// states. When it is "no", it will restart the animation and switch
// the state to "yes".
//
// The animation function, when state is "pausing", will set the state
// to "no" and return false to stop the animation.

function runLevel(level, Display) {
	// CanvasDisplay is passed in as Display here
	let display = new Display(level);
	let state = State.start(level);
	let ending = 1;
	let running = 'yes';

	return new Promise(resolve => {
		function escHandler(event) {
			if (event.key != 'Escape') return;
			event.preventDefault();
			if (running == 'no') {
				running = 'yes';
				runAnimation(frame);
			} else if (running == 'yes') {
				running = 'pausing';
			} else {
				running = 'yes';
			}
		}
		window.addEventListener('keydown', escHandler);
		const arrowKeys = trackKeys(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'Enter', ' ']);
		//window.addEventListener('keydown', (e) => console.log(e));

		function frame(time) {
			if (running == 'pausing') {
				running = 'no';
				return false;
			}

			state = state.update(time, arrowKeys, mouseClick);
			display.syncState(state);
			if (state.status == 'playing') {
				return true;
			} else if (ending > 0) {
				ending -= time;
				return true;
			} else {
				window.removeEventListener('keydown', escHandler);
				arrowKeys.unregister();
				resolve(state.status);
				return false;
			}
		}
		runAnimation(frame);
	});
}

function trackKeys(keys) {
	let down = Object.create(null);
	function track(event) {
		if (keys.includes(event.key)) {
			down[event.key] = event.type == 'keydown';
			event.preventDefault();
		}
	}
	window.addEventListener('keydown', track);
	window.addEventListener('keyup', track);
	down.unregister = () => {
		window.removeEventListener('keydown', track);
		window.removeEventListener('keyup', track);
	};
	return down;
}

const arrowKeys = trackKeys(['ArrowLeft', 'ArrowRight', 'ArrowUp']);

let livesLeft = document.querySelector('.lives');

// TODO: Keep score based on number of coins collected in a level.
// must restart level score if life is lost
async function runGame(plans, Display) {
	// CanvasDisplay is passed in as Display here
	let lives = setLives;
	for (let level = 0; level < plans.length && lives > 0; ) {
		livesLeft.textContent = `Lives Left: ${lives}`;
		let status = await runLevel(new Level(plans[level]), Display);
		if (status == 'won') level++;
		else lives--;
	}
	if (lives > 0) {
		livesLeft.textContent = 'You won! Keep going to improve your score.';
	} else {
		//Display.clear(); // doesn't work...
		const canvas = document.getElementById('canvas');
		canvas.remove();
		livesLeft.textContent = 'You ran out of lives and lost the game!';
		// TODO: Add a restart button
	}
}

/// lock and load
/* let simpleLevel = new Level(simpleLevelPlan);
let display = new DOMDisplay(document.body, simpleLevel);
display.syncState(State.start(simpleLevel)); */

runGame(GAME_LEVELS, CanvasDisplay);
