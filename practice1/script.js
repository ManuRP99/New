const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 1;
ctx.strokeStyle = 'white'

ctx.strokeRect(1, 1, 298, 148);

function makeRect(x, y) {
	ctx.fillRect(x, y, 50, 50);
}

function makeText(text) {
	ctx.fillText(text, 56, 112)
}

let color1 = '#ffffff';
let color2 = '#000000';
const gradient = ctx.createLinearGradient(0, 0, 25, 0);
gradient.addColorStop(0, color1);
gradient.addColorStop(1, color2);

ctx.fillStyle = '#99ff99';
makeRect(2, 98);

ctx.fillStyle = '#9999ff';
makeText('Hello World!');

ctx.fillStyle = gradient;
makeRect (2, 4)
