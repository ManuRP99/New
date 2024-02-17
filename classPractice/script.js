const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const outputText = document.querySelector('#text-output');

canvas.height = 500;
canvas.width = 500;



outputText.innerHTML = 'Test one twoooooo';

class regRect {

	constructor(x, y, color) {
		this.x = y;
		this.y = y;
		this.color = color;

		this.height = 25;
		this.width = 25;
	}

}

let regRectOne = new regRect(10, 10, 'red');

ctx.fillStyle = regRectOne.color;
ctx.fillRect(regRectOne.x, regRectOne.y, regRectOne.width, regRectOne.height);



outputText.innerHTML = `${regRectOne.width} ${regRectOne.width}`;

regRectOne.x += 50;
regRectOne.color = 'blue';
ctx.fillStyle = regRectOne.color;

ctx.fillRect(regRectOne.x, regRectOne.y, regRectOne.width, regRectOne.height);
