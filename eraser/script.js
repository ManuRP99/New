console.log('Hello World!');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 1;
ctx.strokeStyle = '#ffff00';


let x = 60;
let y = 60;
let dx = 1;
let dy = 1;
let xRa = 60;
let yRa = 60;

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect((x -5), (y - 5),20,20);
	ctx.strokeRect(x, y, 10, 10);
	x += dx;
	y += dy;
	console.log(innerWidth);
	console.log(innerHeight);
	console.log(x);
	console.log(y);
	if(x > 160) {
		dx = -dx;
	} else if (y > 100) {
		dy = -dy;
	} else if(x < 5) {
		dx = -dx;
	} else if (y < 5) {
		dy = -dy;
	}
	/*
// the bounce is set to augment the velocity by a half
	if(x > 160) {
		dx = -(dx + (dx / 2));
	} else if (y > 100) {
		dy = -(dy + (dy / 2));
	} else if(x < 5) {
		dx = -(dx + (dx / 2));
	} else if (y < 5) {
		dy = -(dy + (dy / 2));
	}
	*/
}


function wanderer() {
	ctx.fillStyle = '#ff0000';
	ctx.clearRect((xRa -5), (yRa - 5),20,20);
	ctx.fillRect(xRa, yRa, 10, 10);
	let randomX = Math.floor((Math.random() * 3) - 1);
	let randomY = Math.floor((Math.random() * 3) - 1);
	xRa += randomX;
	yRa += randomY;
	if (xRa > 200) {
		xRa = 60;	
	} else if (xRa < 10) {
		xRa = 60;	
	} else if (yRa > 100) {
		yRa = 60;	
	} else if (yRa < 10) {
		yRa = 60;	
	}
}


setInterval(wanderer);
animate();
