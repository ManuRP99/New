const prompt = require('prompt-sync')({sigint:true});
const charList = [' ', "\\", '/', '.', ',', 'o', 'O'];
const spacer = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';

let interface = []

for  (let i = 0; i < 7; i++) {
	interface[i] = new Array;
	for (let j = 0; j < 12; j++) {
		interface[i][j] = charList[0];
	}
}

function renderRow(array) {
	let buff = '';
	for (let i = 0; i < array.length; i++) {
		buff += array[i];
	}
	console.log('\t\t' + buff);
}

function renderTable(array) {
	for (let i = 0; i < array.length; i++) {
		renderRow(array[i]);
	}
}

function addPixel(x, y, intensity) {
	interface[x][y] = charList[intensity];
}

function smallCross(inte) {
	addPixel(3, 6, inte); 
	addPixel(2, 6, inte); 
	addPixel(4, 6, inte); 
	addPixel(3, 5, inte); 
	addPixel(3, 7, inte); 
	renderTable(interface);
}

function corners(inte) {
	addPixel(0, 0, inte);
	addPixel(6, 0, inte);
	addPixel(0, 12, inte);
	addPixel(6, 12, inte);
}

function popPixel(x, y) {
let frame1 = addPixel(x, y, 0);
	renderTable(interface);
let frame2 = addPixel(x, y, 3);
	renderTable(interface);
let frame3 = addPixel(x, y, 5);
	renderTable(interface);
let frame4 = addPixel(x, y, 6);
	renderTable(interface);
let frame5 = addPixel(x, y, 0);
	renderTable(interface);
}


let flip = true;
let frameCount = 0;

function animation() {

	if (flip) {
		console.log(spacer);
		corners(3);
		smallCross(1);
		flip = false;
	} else if (!flip) {
		console.log(spacer);
		corners(4);
		smallCross(2);
		flip = true;
	}
}

function popAnimation() {
	console.log(spacer);
	if (frameCount == 0) {
		addPixel(6, 8, 0);
		renderTable(interface);
		frameCount +=1;
	}
	else if (frameCount == 1) {
		addPixel(4, 8, 3);
		renderTable(interface);
		frameCount +=1;
	}
	else if (frameCount == 2) {
		addPixel(4, 8, 5);
		renderTable(interface);
		frameCount +=1;	
	}
	else if (frameCount == 3) {
		addPixel(4, 8, 6);
		renderTable(interface);
		frameCount +=1;
	}
	else if (frameCount == 4) {
		addPixel(4, 8, 0);
		renderTable(interface);
		frameCount = 0;
	}
}

let question = prompt('1 or 2: ');
if (question === '1') {
	setInterval(animation, 500);
}
else if (question === '2') {
	setInterval(popAnimation, 500);
}
else {
	console.log('...');
}
// setInterval(animation, 500);
// setInterval(popAnimation, 500);


