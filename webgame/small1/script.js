// console.log('Hello World!');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#ffffff';
//
// canvas true size
//
ctx.fillRect(0, 0, 300, 150)


let rectOne = {
	x: 1,
	y: 1,
	vx: 1,
	vy: 1,
	color: '#aaaaff'
}

let rectTwo = {
	x: 1,
	y: 125,
	vx: 1,
	vy: -1,
	color: '#ffaaaa'
}



function animObjOne() {
	ctx.fillStyle = rectOne.color;
	requestAnimationFrame(animateOne);
	ctx.clearRect((rectOne.x - 1), (rectOne.y - 1), 52, 27);
	ctx.fillRect(rectOne.x, rectOne.y, 50, 25)
	rectOne.x += rectOne.vx;
	rectOne.y += rectOne.vy;
	if (rectOne.x < 0|rectOne.x > 250) {
		rectOne.vx = -rectOne.vx;
	} else if (rectOne.y < 0|rectOne.y > 125) {
		rectOne.vy = -rectOne.vy;	
	}
}


function animObj(obj) {
	ctx.fillStyle = obj.color;
	ctx.clearRect((obj.x - 1), (obj.y - 1), 52, 27);
	ctx.fillRect(obj.x, obj.y, 50, 25);
	obj.x += obj.vx;
	obj.y += obj.vy;
	if (obj.x < 0|obj.x > 250) {
		obj.vx = -obj.vx;
		console.log('flip x')
	} else if (obj.y < 0|obj.y > 125) {
		obj.vy = -obj.vy;	
		console.log('flip y')
	}
	return obj;
}


//animObjOne();
// animObj(rectOne);
//animObj(rectTwo);

function animate() {
	animObj(rectOne);
	//animObj(rectTwo);
}



setInterval(animate, 50);


//
// with objects its a better way
//
let onex = 1;
let oney = 1;
let onevx = 1;
let onevy = 1;

let twox = 200;
let twoy = 75;
let twovx = -1;
let twovy = -1;

let threex = 200;
let threey = 1;
let threevx = -1;
let threevy = 1;

let fourx = 1;
let foury = 75;
let fourvx = 1;
let fourvy = -1;





function animateOne() {
	ctx.fillStyle = '#aaaaff';
	requestAnimationFrame(animateOne);
	ctx.clearRect((onex-1), (oney-1), 52, 27);
	ctx.fillRect(onex, oney, 50, 25)
	onex += onevx;
	oney += onevy;
	if (onex < 0|onex > 250) {
		onevx = -onevx;
	} else if (oney < 0|oney > 125) {
		onevy = -onevy;	
	}
}

function animateTwo() {
	ctx.fillStyle = '#ff7777';
	requestAnimationFrame(animateTwo);
	ctx.clearRect((twox-1), (twoy-1), 52, 27);
	ctx.fillRect(twox, twoy, 50, 25)
	twox += twovx;
	twoy += twovy;
	if (twox < 0|twox > 250) {
		twovx = -twovx;
	} else if (twoy < 0|twoy > 125) {
		twovy = -twovy;	
	}
}

function animateThree() {
	ctx.fillStyle = '#aaaaaa';
	requestAnimationFrame(animateThree);
	ctx.clearRect((threex-1), (threey-1), 52, 27);
	ctx.fillRect(threex, threey, 50, 25)
	threex += threevx;
	threey += threevy;
	if (threex < 0|threex > 250) {
		threevx = -threevx;
	} else if (threey < 0|threey > 125) {
		threevy = -threevy;	
	}
}

function animateFour() {
	ctx.fillStyle = '#77ff77';
	requestAnimationFrame(animateFour);
	ctx.clearRect((fourx-1), (foury-1), 52, 27);
	ctx.fillRect(fourx, foury, 50, 25)
	fourx += fourvx;
	foury += fourvy;
	if (fourx < 0|fourx > 250) {
		fourvx = -fourvx;
	} else if (foury < 0|foury > 125) {
		fourvy = -fourvy;	
	}
}


// animateOne();
// animateTwo();
// animateThree();
// animateFour();
