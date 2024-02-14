const canvasOne = document.getElementById("canvas-one");
const canvasTwo = document.getElementById("canvas-two");
const ctxOne = canvasOne.getContext("2d");
const ctxTwo = canvasTwo.getContext("2d");


function firstCanvas() {
	
	// Set line width
	ctxOne.lineWidth = 3;
	
	// Nested rectangles
	// strokeRect(marginleft, margintop, width, height)
	ctxOne.strokeRect(100, 5, 100, 100);
	ctxOne.strokeRect(110, 10, 80, 90);
	ctxOne.strokeRect(120, 15, 60, 80);
	ctxOne.strokeRect(130, 20, 40, 70);
	
	// fill rect
	
	ctxOne.fillStyle = '#ff1010';
	
	ctxOne.fillRect(140, 25, 20, 60);



}


firstCanvas();


function secondCanvas(seconds) {
	ctxTwo.fillRect(50, 0, 200, 100);
	ctxTwo.lineWidth = 2;
	ctxTwo.strokeStyle = '#222';
	ctxTwo.strokeRect(60, 10, 180, 80);
	ctxTwo.strokeStyle = '#444';
	ctxTwo.strokeRect(70, 20, 160, 60);
	ctxTwo.strokeStyle = '#666';
	ctxTwo.strokeRect(80, 30, 140, 40);
	ctxTwo.strokeStyle = '#888';
	ctxTwo.strokeRect(90, 40, 120, 20);


}


function drawCircle(target) {
	target.lineWidth = 5;
	target.strokeStyle = '#0000ff';
	target.beginPath();
	target.arc(150, 50, 40, 0, 2 * Math.PI);
	target.stroke();
}


function drawLines(target) {
	target.lineWidth = 3;
	target.strokeStyle= '#00ff00';
	target.moveTo(50, 0);
	target.lineTo(250, 100);
	target.moveTo(250, 0);
	target.lineTo(50, 100);
	target.stroke();
}


secondCanvas();
drawLines(ctxTwo);
drawCircle(ctxTwo);



// Wall
//ctx.strokeRect(75, 40, 150, 110);
// Door
//ctx.fillRect(130, 90, 40, 60);

/*
// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
*/
