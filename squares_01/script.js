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
	ctx.clearRect(((whSqX - 1) * widthUnit),((whSqY - 1) * heightUnit),(12 * widthUnit),(12 * heightUnit));
	whSqX += whSqVX;
	whSqY += whSqVY;

	ctx.fillStyle = '#ffffff';
	// ctx.fillrect((),(),(),());
	ctx.fillRect((whSqX * widthUnit),(whSqY * heightUnit),(10 * widthUnit),(10 * heightUnit));
}

// declare the control divs and give them functions
const controlTL = document.querySelector('#ctrl-tl');
const controlTR = document.querySelector('#ctrl-tr');
const controlBL = document.querySelector('#ctrl-bl');
const controlBR = document.querySelector('#ctrl-br');


// change this to change what the controls do
// normal mode
let tlHover = () => moveWhSq(-1, -1);
let trHover = () => moveWhSq( 1, -1);
let blHover = () => moveWhSq(-1,  1);
let brHover = () => moveWhSq( 1,  1);

// slow mode
//let tlHover = () => moveWhSq(-0.3, -0.3);
//let trHover = () => moveWhSq( 0.3, -0.3);
//let blHover = () => moveWhSq(-0.3,  0.3);
//let brHover = () => moveWhSq( 0.3,  0.3);




// x and y are the directions in which it will me boved
const moveWhSq = (x, y) => {
	whSqVX = x;
	whSqVY = y;
	whiteSquare();
	whSqVX = 0;
	whSqVY = 0;
	if (whSqX < 0) {
		ctx.clearRect(((whSqX - 1) * widthUnit),((whSqY - 1) * heightUnit),(12 * widthUnit),(12 * heightUnit));
		whSqX = 45;
		whSqY = 45;
	}
	else if (whSqY < 0) {
		ctx.clearRect(((whSqX - 1) * widthUnit),((whSqY - 1) * heightUnit),(12 * widthUnit),(12 * heightUnit));
		whSqX = 45;
		whSqY = 45;
	}
	else if (whSqX > 90) {
		ctx.clearRect(((whSqX - 1) * widthUnit),((whSqY - 1) * heightUnit),(12 * widthUnit),(12 * heightUnit));
		whSqX = 45;
		whSqY = 45;
	} 
	else if (whSqY > 90) {
		ctx.clearRect(((whSqX - 1) * widthUnit),((whSqY - 1) * heightUnit),(12 * widthUnit),(12 * heightUnit));
		whSqX = 45;
		whSqY = 45;
	}
}


