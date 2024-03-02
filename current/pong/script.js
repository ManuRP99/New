
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const streakText = document.getElementById("streak");

canvas.width = (window.innerWidth - 135);
canvas.height = (window.innerHeight - 150);


const origin = [(canvas.width / 2), (canvas.height / 2)];

let barsPosT = origin[0];
let barsPosB = origin[0];
let ballPosX = origin[0];
let ballPosY = origin[1];

let movement = 0;
let velX = 1;
let velY = 1;

let safe = true;
let streak = 0;

document.body.addEventListener('keydown', (ev) => {
	if (ev.key == 'ArrowLeft'){
		movement = -3;
	}
	if (ev.key == 'ArrowRight'){
		movement = 3;
	}
});


document.body.addEventListener('keyup', (ev) => {
	if (ev.key == 'ArrowLeft'){
		movement = 0;
	}
	if (ev.key == 'ArrowRight'){
		movement = 0;
	}
	
});



const updateScr = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	barsPosB += movement;
	barsPosT = ballPosX - 35;
	collisions();
	safety();
	drawBars();
	drawBall();
	streakText.innerText = streak;
};


const drawBars = () => {
	ctx.fillStyle = "#5555ff";
	ctx.fillRect(barsPosT, 30, 70, 20);
	ctx.fillRect(barsPosB, (canvas.height - 30), 70, 20);

	ctx.strokeStyle = "#aaffaa";
	ctx.moveTo(0, origin[1]);
	ctx.lineTo(canvas.width, origin[1]);
	ctx.stroke();
};

const drawBall = () => {
	if (!safe) {
		ctx.fillStyle = "#aaaaff";
	} else { 
		ctx.fillStyle = "#aaffaa";
	}
	ctx.fillRect(ballPosX, ballPosY, 10, 10);
};

const collisions = () => {
	if (ballPosX < 0 || (ballPosX + 10) > canvas.width) {
		velX = -velX;
		ballPosX = ballPosX + velX;
		ballPosY = ballPosY + velY;
	} else if (ballPosY < 50) {
		velY = -velY;
		ballPosY = ballPosY + velY;
	} else if ((ballPosY + 10) > (canvas.height - 30)) {
		if (safe) {
			velY = -velY;
			ballPosX = ballPosX + velX;
			ballPosY = ballPosY + velY;
			streak++;
		} else {
			ballPosX = origin[0];
			ballPosY = origin[1];
			streak = 0;
		}
	} else {
		ballPosX = ballPosX + velX;
		ballPosY = ballPosY + velY;
	}
}

const safety = () => {
	if (ballPosX > barsPosB && (ballPosX + 10) < (barsPosB + 70)) {
		safe = true;
	} else {
		safe = false;
	}
}

setInterval(updateScr, 5);
