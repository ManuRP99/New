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

ctx.strokeStyle = '#00ff00';
function game() {
	ctx.fillStyle = '#000000'
	ctx.fillRect(x, (y- 50), 200, 200);
	x += xVel;
	y += yVel;
	ctx.strokeText(ship, x, y);
}

setInterval(game, 3);


