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
		} else if (ch == '|') {
			return new Lava(pos, new Vec(0, 2));
		} else if (ch == 'v') {
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

let level1 = new Level(simpleLevelPlan);
console.log(level1);
