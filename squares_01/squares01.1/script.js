
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const counter = document.querySelector('#counter');


canvas.width = (window.innerWidth - 35);
canvas.height = (window.innerHeight - 50);


const widthUnit = Math.floor((canvas.width * 10) / 1000);
const heightUnit = Math.floor((canvas.height * 10) / 1000);

const getRandomX = () => {return Math.floor(Math.random() * 90)};
const getRandomY = () => {return Math.floor(Math.random() * 90)};

const randomColor = () => {
	let str = '';
	for (let i = 0; i < 3; i++) {
		let num = Math.floor(Math.random() * 90) + 10;
		str += num;
	}
	let ranCol = `#${str}`;
	return ranCol;
}



class Square {
	constructor (width, height, x, y, color) {
		this.width	= width * widthUnit;
		this.height = height * heightUnit;
		this.x = x * widthUnit;
		this.y = y * heightUnit;
		this.color = color;
	}
}

class randomSquare {
	constructor (width, height) {
		this.width	= width * widthUnit;
		this.height = height * heightUnit;
		this.x = getRandomX() * widthUnit;
		this.y = getRandomY() * heightUnit;
		this.color = randomColor();
	}
}



const drawSquare = (obj) => {
	ctx.fillStyle = obj.color;
	ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
};



const clearSquare = (obj) => ctx.fillRect(obj.x, obj.y, obj.width, obj.height);



let greenSquare = new Square(10, 10, 45, 45, '#00ff00');
let redSquare = new Square(5, 5, getRandomX(), getRandomY(), '#ff0000')

//let ranColPosSquare = new randomSquare(10, 10);

let xVel = 0;
let yVel = 0;

document.body.addEventListener('keydown', (ev) => {
	if (ev.key == 'ArrowUp'){
		console.log('U');
		yVel = -5;
		xVel = 0;
	}
	if (ev.key == 'ArrowDown'){
		console.log('D');
		yVel = 5;
		xVel = 0;
	}
	if (ev.key == 'ArrowLeft'){
		console.log('L');
		yVel = 0;
		xVel = -5;
	}
	if (ev.key == 'ArrowRight'){
		console.log('R');
		yVel = 0;
		xVel = 5;
	}
});

document.body.addEventListener('keyup', (ev) => {
	xVel = 0;
	yVel = 0;
});

let colCount = 0;
//fugly but works
const collision = (obj1, obj2) => {
	if (obj1.x + obj1.width > obj2.x && (obj2.x + obj2.width) > obj1.x && obj1.y + obj1.height > obj2.y && (obj2.y + obj2.height) > obj1.y) {
		colCount++;
		counter.innerHTML = colCount;

		obj1.color = '#ff0000';
		obj2.color = randomColor();

	} 
	// i suppose this is not the right way to do this
	else {
		obj1.color = '#00ff00';
		obj2.color = '#ff0000';
	}
};


setInterval(() => {
	let countBuf = colCount;
	ctx.clearRect(0, 0, 5000, 5000);
	//let ranColPosSquare = new randomSquare(1, 1);
	greenSquare.x += xVel;
	greenSquare.y += yVel;
	drawSquare(greenSquare);
	drawSquare(redSquare);
	//drawSquare(ranColPosSquare);
	collision(greenSquare, redSquare);
}, 50)




