const {innerHeight, innerWidth} = window

const config = {
	type: Phaser.AUTO,
	width: innerWidth,
	height: innerHeight,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: {
		preload: preload,  
		create: create,
	},
};

const game = new Phaser.Game(config);
function preload() {
	this.load.setBaseURL("http://labs.phaser.io");

	this.load.image("alien-bg", "./assets/alien-landscape.jpg")
	this.load.image("sky", "assets/skies/space3.png");
	this.load.image("logo", "assets/sprites/phaser3-logo.png");
	this.load.image("red", "assets/particles/red.png");
}

function create() {
	let bg = this.add.image(0, 0, "alien-bg").setOrigin(0,0)

	const particles = this.add.particles("green");

	const emitter = particles.createEmitter({
		speed: 10,
		scale: { start: 1, end: 0 },
		blendMode: "ADD",
	});

	const logo = this.physics.add.image(400, 100, "logo");

	logo.setVelocity(100, 200);
	logo.setBounce(1, 1);
	logo.setCollideWorldBounds(true);

	emitter.startFollow(logo);
}
