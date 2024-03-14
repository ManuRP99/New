const ui = document.getElementById("UI");

const center = 3; 
const fibo = [1, 1, 2, 3, 5, 8, 13, 21];

for (let i = 0; i < 11;i++) {
	for (let j = 0; j < 11;j++) {
        	ui.innerHTML += `<div class="cell" id="${i}-${j}"></div>`;
	}
}

const setCell = (pixel, row, col) => {
    const targetCell = document.getElementById(`${row}-${col}`);
    targetCell.innerText = pixel;
};

/*
for (let ii = 0; ii < 7; ii++) {
    if (ii % 2 == 0) {
        for (let i = 0; i < 7; i++) {
            if (i % 2 == 0) {
                setCell('#', ii, i);
            } else {
                setCell('#', ii + 1, i);
            }
        }
    }
}
*/


const checker = (pixel) => {
    for (let row = 0; row < 11; row++) {
        if (row % 2 == 0) {
            for (let col = 0; col < 11; col++) {
                if (col % 2 == 0) {
                    setCell(pixel, row, col);
                }
            }
        } else {
            for (let col = 0; col < 11; col++) {
                if (col % 2 != 0) {
                    setCell(pixel, row, col);
                }
            }
        }
    }
};


let player = {
    row: 5,
    col: 5,
};

let target = {
    row: 0,
    col: 0,
    content: 'dust',
};

const setPlayer = (instr) => {
    if (instr == 1) {
        setCell('@', player.row, player.col)
    } else if (instr == 0) {
        setCell(' ', player.row, player.col)
    }
};

//0U 1D 2L 3R



const movePlayer = (instr) => {
    if (player.row == target.row && player.col == target.col) {
        setPlayer(0);
        checker('#');
    } else { 
        if (instr == 0) {
            setPlayer(0);
            player.row--;
            setPlayer(1);

        }
        else if (instr == 1) {
            setPlayer(0);
            player.row++;
            setPlayer(1);
        }
        else if (instr == 2) {
            setPlayer(0);
            player.col--;
            setPlayer(1);
        }
        else if (instr == 3) {
            setPlayer(0);
            player.col++;
            setPlayer(1);
        }
    }
};



// arrow keys event listeners
document.body.addEventListener('keydown', (ev) => {
	if (ev.key == 'k'){movePlayer(0)}
	if (ev.key == 'j'){movePlayer(1)}
	if (ev.key == 'h'){movePlayer(2)}
	if (ev.key == 'l'){movePlayer(3)}
});

setPlayer(1);
setCell('=', target.row, target.col);
