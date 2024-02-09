//IT JUST FILL THE SCREEN LITTLE BY LITTLE I FOUND IT FUNNY


const prompt = require('prompt-sync')({sigint: true});
//
//

// Board and strings to print
const board = [];
const boardSize = 7;

const nothing = ' ';
const player = '#';
const mob = "'";

// things...



let game = false;
let playerPos = [3,3];



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


function genEnemy() {
	let row = Math.floor(Math.random() * boardSize);
	let col = Math.floor(Math.random() * boardSize);
	board[row][col] = mob;
}


function begin() {
	//ascii thing here maybe??
	//it'd be nice to calculate the center

	//console.log(beginText);
	board[playerPos[0]][playerPos[1]] = player;
	printMap(boardSize);
	console.log(spacer);
	let firstCommand = prompt('Start game?  y/n: ');
	if (firstCommand === 'y') {
		game = true;
		//console.log('Game should start now');
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
	console.log(spacer);

}, 1000)






// Logs
// genMap(boardSize);
// printMap(boardSize);
