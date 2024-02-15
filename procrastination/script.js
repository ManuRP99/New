const mainTitle = document.getElementById('main-title');

const colorArray = ['#60ffff', '#ffff60', '#ff60ff', '#aa90ff', '#ffaaff'];

const frames = ['.', 'o', 'O', '0', '0', 'O', 'o', '.'];

let frameTitle = 0;

function animateTitle() {
	let titleFrame = frames[frameTitle] + 'Procrastination' + frames[frameTitle];
	mainTitle.innerText = titleFrame;
	frameTitle++;
	if (frameTitle > 7) {
		frameTitle = 0;
	}
}

setInterval(animateTitle, 150);

const mainCanvas = document.getElementById('main-canvas');
const mainCtx = mainCanvas.getContext('2d');

mainCtx.lineWidth = 1;
mainCtx.strokeStyle = '#ff00ff';

// draw this rectangle for sizing reference
mainCtx.strokeRect(10, 3, 280, 135);



function squiggle() {
	let randomColor = Math.floor(Math.random() * 5);
	mainCtx.strokeStyle = colorArray[randomColor];
	mainCtx.clearRect(15, 15, 240, 120);
	mainCtx.moveTo(1, 1);
	mainCtx.beginPath();
	for (let i = 0; i < (Math.floor(Math.random() * 100)); i++) {
		let x = (Math.random() * 220) + 20;
		let y = (Math.random() * 100) + 20;
		mainCtx.lineTo(x,y);
	}
	mainCtx.stroke();	
}

setInterval(squiggle, 200);
