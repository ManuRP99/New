const prompt = require('prompt-sync')({sigint: true});
// we have a board, a player than can't move and mobs appearing and dissapearing.
// would be cool to be able to 1 move 2 keep count of the mobs its eaten in the number.
// can add another player and put them against each other in a very complicated coinflip.
//
// needs a welcome text and ascii logo, but do that AFTER it works.
//



// Board and strings to print

const board = [];
const boardSize = 9;

const nothing = ' ';
let playerNumber = 0;
let player = '#';
const mob = "'";



// things...

let game = false;
let playerPos = [4,4];


// tabs and empty lines 
const clearScreen = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
const spacer = '\n\n\n\n\n\n';
const tab = '\t\t\t\t\t';


// Generate the board

function genMap(size) {
	for (i = 0; i < size; i++) {
		board[i] = new Array;
		for (j = 0; j < size; j++) {
			board[i][j] = nothing;
		}
	}
}

// Print board

function printMap(size) {
	for (i = 0; i < size; i++) {
		let string = String(board[i])
		console.log(tab + string);
	}
}


//makes the little dots randomly adding and deleting where there is no player

function genEnemy() {
	let row = Math.floor(Math.random() * boardSize);
	let col = Math.floor(Math.random() * boardSize);
	// if not player and not mob, make mob
	if (board[row][col] !== board[playerPos[0]][playerPos[1]] && board[row][col] !== mob) { 
		board[row][col] = mob;
	// if player 
	} else if (board[row][col] === board[playerPos[0]][playerPos[1]]) {
		//console.log('collision');
		playerNumber++;
		game = false;
	// if mob, kill it 
	} else {
		board[row][col] = nothing;
	}
}



function begin() {
	//ascii thing here maybe??

	//console.log(beginText);
	board[playerPos[0]][playerPos[1]] = player;
	printMap(boardSize);
	console.log(spacer);
	let firstCommand = prompt('Start game?  y/n: ');
	if (firstCommand === 'y') {
		game = true;
	}
}

// when game launches

console.log(clearScreen)
genMap(boardSize);
begin();

//game

setInterval(() => {
	console.log(clearScreen);
	genEnemy();
	printMap(boardSize);
	console.log(tab + 'Nº of collisions: ' + playerNumber);
	console.log(spacer);
	if (!game) {
		clearInterval();
	}
}, 50)






