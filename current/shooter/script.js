
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


canvas.width = (window.innerWidth - 35);
canvas.height = (window.innerHeight - 50);

const playerColor = '#ffffff';

const player = '/<[]>\\';

let movement = 0;

// arrow keys event listeners
document.body.addEventListener('keydown', (ev) => {
	if (ev.key == 'ArrowLeft'){
        movement = -1;
	}
	if (ev.key == 'ArrowRight'){
        movement = 1;
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

let position = Math.floor(canvas.width / 2);

let height = canvas.height - 100;

const drawPlayer = (pos) => {
    ctx.clearRect(pos - 5, height - 20, 60, 30);
    ctx.font = '15px mono';
    ctx.fillStyle = playerColor;
    ctx.fillText(player, pos, canvas.height - 100);
};

const drawbullet = (pos) => {
    for (let i = canvas.height - 100; i > 0; i--) {
        ctx.clearRect(pos, i, 5, 5);
        ctx.fillRect(pos, i, 5, 5);
    }   
};




drawPlayer(position);

const frame = () => {
    /*ctx.clearRect(0, 0, canvas.width, canvas.height);*/
    position += movement;
    drawPlayer(position);
};

ctx.fillRect(0, 0, 10000, 10000);

setInterval(frame, 50);

