// so far this moves very fast in diagonals, change the hatml div elements to change how it reacts

// ~/Desktop/webdev/pieces/bigcanvas
//
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


canvas.width = (window.innerWidth - 35);
canvas.height = (window.innerHeight - 50);


//
// make the buttons div same size as the canvas
const buttonsDiv = document.querySelector('#buttons-div');

buttonsDiv.width = (window.innerWidth - 35);
buttonsDiv.height = (window.innerHeight - 50);


//
// get width and height units for square sizes
const widthUnit = Math.floor(canvas.width * 10) / 1000;
const heightUnit = Math.floor(canvas.height * 10) / 1000;

//
// create white square

let whSqX = 45;
let whSqY = 45;
let whSqVX = 0;
let whSqVY = 0;

const whiteSquare = () => {
	ctx.clearRect(((whSqX - 1) * widthUnit),((whSqY - 1) * heightUnit),(7 * widthUnit),(7 * heightUnit));
	whSqX += whSqVX;
	whSqY += whSqVY;

	ctx.fillStyle = '#ffffff';
	// ctx.fillrect((),(),(),());
	ctx.fillRect((whSqX * widthUnit),(whSqY * heightUnit),(5 * widthUnit),(5 * heightUnit));
}
//
// green square for the player

let grSqX = 45;
let grSqY = 45;
const greenSquare = () => {
	//ctx.clearRect(((grSqX - 1) * widthUnit),((grSqY - 1) * heightUnit),(12 * widthUnit),(12 * heightUnit));
	ctx.fillStyle = '#00ff00';
	// ctx.fillrect((),(),(),());
	ctx.fillRect((grSqX * widthUnit),(grSqY * heightUnit),(10 * widthUnit),(10 * heightUnit));
}
const redSquare = () => {
	let randomX = Math.floor( (Math.random() * 80)  + 10 );
	let randomY = Math.floor( (Math.random() * 80)  + 10 );
	//ctx.clearRect(((grSqX - 1) * widthUnit),((grSqY - 1) * heightUnit),(12 * widthUnit),(12 * heightUnit));
	ctx.fillStyle = '#ff0000';
	// ctx.fillrect((),(),(),());
	ctx.fillRect((randomX * widthUnit),(randomY * heightUnit),(2 * widthUnit),(2 * heightUnit));
}


greenSquare();

// declare the control divs and give them functions

let points = 0;


const controlTL = document.querySelector('#ctrl-tl');
const controlTR = document.querySelector('#ctrl-tr');
const controlBL = document.querySelector('#ctrl-bl');
const controlBR = document.querySelector('#ctrl-br');


// change this to change what the controls do
// normal mode
//let tlHover = () => moveWhSq(-1, -1);
//let trHover = () => moveWhSq( 1, -1);
//let blHover = () => moveWhSq(-1,  1);
//let brHover = () => moveWhSq( 1,  1);

// slow mode
let tlHover = () => moveWhSq(-0.3, -0.3);
let trHover = () => moveWhSq( 0.3, -0.3);
let blHover = () => moveWhSq(-0.3,  0.3);
let brHover = () => moveWhSq( 0.3,  0.3);




// x and y are the directions in which it will me boved
const moveWhSq = (x, y) => {
	points += 1;
	whSqVX = x;
	whSqVY = y;
	whiteSquare();
	greenSquare();
	whSqVX = 0;
	whSqVY = 0;
	if (whSqX < 0) {
		ctx.clearRect(((whSqX - 1) * widthUnit),((whSqY - 1) * heightUnit),(7 * widthUnit),(7 * heightUnit));
		whSqX = 45;
		whSqY = 45;
		points = 0;
	}
	else if (whSqY < 0) {
		ctx.clearRect(((whSqX - 1) * widthUnit),((whSqY - 1) * heightUnit),(7 * widthUnit),(7 * heightUnit));
		whSqX = 45;
		whSqY = 45;
		points = 0;
	}
	else if (whSqX > 95) {
		ctx.clearRect(((whSqX - 1) * widthUnit),((whSqY - 1) * heightUnit),(7 * widthUnit),(7 * heightUnit));
		whSqX = 45;
		whSqY = 45;
		points = 0;
	} 
	else if (whSqY > 95) {
		ctx.clearRect(((whSqX - 1) * widthUnit),((whSqY - 1) * heightUnit),(7 * widthUnit),(7 * heightUnit));
		whSqX = 45;
		whSqY = 45;
		points = 0;
	}
}

// show points on screen and update them
//

const pointsTxt = document.querySelector('#points-txt');
const showPoints = () => pointsTxt.innerHTML = points;

setInterval(showPoints, 300);
//setInterval(redSquare, 3000);




