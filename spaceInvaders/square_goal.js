const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


canvas.width = (window.innerWidth - 50);
canvas.height = (window.innerHeight - 70);


let ship = '}-o-{';
let bullet = '.';

// rn is at center of screen
let origin = [(Math.floor(canvas.width / 2)), (Math.floor(canvas.height / 2))];
let xVel = 0;
let yVel = 0;
let x = origin[0];
let y = origin[1];


// arrow keys event listeners
document.body.addEventListener('keydown', (ev) => {
	if (ev.key == 'ArrowUp'){
		yVel = -1;
		xVel = 0;
	}
	if (ev.key == 'ArrowDown'){
		yVel = 1;
		xVel = 0;
	}
	if (ev.key == 'ArrowLeft'){
		xVel = -1;
		yVel = 0;
	}
	if (ev.key == 'ArrowRight'){
		xVel = 1;
		yVel = 0;
	}
});


// this prints the ship at origin
//ctx.fillStyle = '#00ff00';
//ctx.fillText(ship, origin[0], origin[1]);
//ctx.clearRect(x, y, 100, 100);


//border
function drawBorder() {
ctx.strokeStyle = '#ff0000';
ctx.strokeRect(10, 10, (canvas.width - 20), (canvas.height - 20));
}
//ctx.fillStyle = '#aaaaaa';
//ctx.fillRect(10, 10, (canvas.width - 20), (canvas.height - 20));
ctx.clearRect(10, 10, (canvas.width - 20), (canvas.height - 20));


ctx.strokeStyle = '#00ff00';

// collision with border
//
function borderCollision(x, y) {
	if (x < 10 || (x + 28) > (canvas.width - 20)) {
		console.log("X collision!");
	}else if (y < 10 || (y + 15) > (canvas.height -20)) {
		console.log("Y collision!");
	}
}

// draw walls

function drawWalls() {
	ctx.strokeStyle = '#ffffff';
	// wall at x center, y 10(border), width 10, height 10
	ctx.strokeRect(origin[0], 10, 10, 100);
	ctx.strokeRect(origin[0], 110, 100, 10);
	ctx.strokeRect((origin[0] + 100), 110, 100, 10);
	ctx.strokeRect((origin[0] + 200), 110, 100, 10);
	ctx.strokeRect((origin[0] + 300), 110, 10, 100);
	ctx.strokeRect((origin[0] + 400), 110, 10, 100);
	ctx.strokeRect((origin[0] + 400), 10, 10, 100);
	ctx.strokeRect((origin[0] + 500), 110, 10, 100);
	ctx.strokeRect((origin[0] + 500), 210, 10, 100);
	ctx.strokeRect((origin[0] + 400), 310, 100, 10);
	ctx.strokeRect((origin[0] + 300), 310, 100, 10);
	ctx.strokeRect((origin[0] + 300), 210, 10, 100);
	//ctx.strokeRect(origin[0], (origin[1] + 50), 10, 100);
}

// goal region 
 
 function drawGoal() {
	ctx.strokeStyle = "#30aa30";
	ctx.strokeRect(10, 10, 100, 100);
 }

 function checkGoal(x, y) {
	if (10 < x && 10 < y && 110 > x && 110 > y) {
		ctx.fillStyle = "#ffffff";
		ctx.fillText("Nice!", origin[0], (canvas.height - 15));
		
	}
 }

 
// collision with walls
function wallCollision() {}

function game() {
	ctx.clearRect(10, 10, (canvas.width - 20), (canvas.height - 20));
	const hitbox = [x, (y - 10), 28, 15];
	ctx.fillStyle = '#000000';
	//ctx.fillRect(x, (y - 10), 28, 15);
	ctx.fillRect(hitbox[0], hitbox[1], hitbox[2], hitbox[3]);
	//ctx.strokeRect(hitbox[0], hitbox[1], hitbox[2], hitbox[3]);
	x += xVel;
	y += yVel;
	ctx.strokeStyle = '#00ff00';
	ctx.strokeText(ship, x, y);
	drawBorder();
	//drawWalls();
	drawGoal();
	checkGoal(hitbox[0], hitbox[1]);
	borderCollision(hitbox[0], hitbox[1]);
}

setInterval(game, 1);


