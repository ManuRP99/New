


//canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = (window.innerWidth - 35);
canvas.height = (window.innerHeight - 50);

const widthUnit = Math.floor(canvas.width * 10) / 1000;
const heightUnit = Math.floor(canvas.height * 10) / 1000;



// generate square objects

const white = new WhiteSquare(45, 45);
const green = new GreenSquare(0, 0);
const red = new RedSquare(30, 50);


//render objects
function render(obj) {
	ctx.clearRect( (obj.x * widthUnit), (obj.y * heightUnit), (obj.width), (obj.height));
	ctx.fillStyle = obj.color;
	ctx.fillRect( (obj.x * widthUnit), (obj.y * heightUnit), (obj.width), (obj.height));
}
//render(white);
//render(red);
//render(green);
function clearAll() {
	ctx.clearRect(0, 0, 5000, 5000);
}

//
//
//
//


// key functions
//
let vertSpeed = 0;
let horiSpeed = 0;

document.body.addEventListener('keydown', (ev) => {
	if (ev.key == 'ArrowUp'){
		vertSpeed = -10;
		horiSpeed = 0;
	}
	if (ev.key == 'ArrowDown'){
		vertSpeed = 10;
		horiSpeed = 0;
	}
	if (ev.key == 'ArrowLeft'){
		horiSpeed = -10;
		vertSpeed = 0;
	}
	if (ev.key == 'ArrowRight'){
		horiSpeed = 10;
		vertSpeed = 0;
	}
});





setInterval(interval = () => {

	moveSquare(green, horiSpeed, vertSpeed);
	render(green);
}, 50);









/*
// this whould stop the movement
document.body.addEventListener('keyup', (ev) => {
	console.log(ev.key);
});
*/







/*
ctx.fillStyle = white.color;
ctx.fillRect( (white.x * heightUnit), (white.y * widthUnit), white.height, white.width );


ctx.fillStyle = green.color;
ctx.fillRect( (green.x * heightUnit), (green.y * widthUnit), green.height, green.width );

ctx.fillStyle = red.color;
ctx.fillRect( (red.x * heightUnit), (red.y * widthUnit), red.height, red.width );
*/

// 
// console.log(white);
// moveSquare(white, 1, 1);
// console.log(white);
// 
