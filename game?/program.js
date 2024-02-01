const prompt = require('prompt-sync')({sigint: true});
const cleanterm = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

const descArray = [
	"You are in a forest. It looks like nobody else is here.",
	'The trees are very close together here. Moving is difficult but you make it.',
	'This area is filled with no more than rocks and the ocasional black bush.',
	'This part of the forest has been burned. You can see thin columns of smoke rising from some of the charred trees.'
];
const objectArray = [
	'stick',
	'piece of plastic',
	'piece of coal',
	'bit of food',
	'cool rock'
];

let mapArray = [];
let inventory = [];
const mapSize = 5;
const emptyCell = ' ';

let playerLocation = [2, 2];


for (let i = 0; i < mapSize; i++) {
	mapArray[i] = new Array;
	for (let f = 0; f < mapSize;f++) {
		mapArray[i][f] = emptyCell;
		//console.log(i + ' ' + f);
	}
}

for (let i = 0; i < mapSize; i++) {
	for (let f = 0; f < mapSize;f++) {
		let randomLoc = Math.floor(Math.random() * 3 + 1)
		mapArray[i][f] = randomLoc;
	}
}






function moveNorth() {
	if (playerLocation[0] === 0) {
		console.log('A rock is blocking the way.');
	} else {
		playerLocation[0] -= 1;
		return playerLocation;
		
	}

}
function moveSouth() {
	
	if (playerLocation[0] === mapSize - 1) {
		console.log('A rock is blocking the way.');
	} else {
		playerLocation[0] += 1;
		return playerLocation;
	}
	
}
function moveWest() {
	
	if (playerLocation[1] === 0) {
		console.log('A rock is blocking the way.');
	} else {
		playerLocation[1] -= 1;
		return playerLocation;
	}

}
function moveEast() {
	
	if (playerLocation[1] === mapSize - 1) {
		console.log('A rock is blocking the way.');
	} else {
		playerLocation[1] += 1;
		return playerLocation;
	}
	
}

function search() {
	let objectNumber = Math.floor(Math.random() * 5);
	console.log('You found a ' + objectArray[objectNumber] + '.');
	inventory += objectNumber;
}

function showInventory () {
	console.log('In your inventory you have: ')
	for (let i = 0; i < inventory.length; i++) {
		console.log(objectArray[inventory[i]]);
	}
}
//0 is start text


mapArray[2][2] = 0;
//console.table(mapArray);

// console.log(currentDescription);
// console.log(currentPosition);

//console.log(descArray[currentPosition]);
console.log(cleanterm);
console.log(descArray[mapArray[playerLocation[0]][playerLocation[1]]]);

let gameOver = false;

while (!gameOver) {
	
	let currentPosition = mapArray[playerLocation[0]][playerLocation[1]];
	let currentDescription = descArray[currentPosition];
	//console.log(currentDescription);
	
	let playerCommand = prompt('Enter command > ');
	if (playerCommand === 'north') {
		console.log(cleanterm);
		moveNorth();
		
	} else if (playerCommand === 'south') {
		console.log(cleanterm);
		moveSouth();
		
	} else if (playerCommand === 'east') {
		console.log(cleanterm);
		moveEast();
		
	} else if (playerCommand === 'west') {
		console.log(cleanterm);
		moveWest();
		
	} else if (playerCommand === 'look') {
		console.log(cleanterm);
		console.log(currentDescription);
		
	} else if (playerCommand === 'search') {
		console.log(cleanterm);
		search();
		
	} else if (playerCommand === 'inv') {
		console.log(cleanterm);
		showInventory();
		
	} else {
		console.log('error. Available commands: north, south, east, west, look, search, inv.');
		//console.log(playerLocation);
	}
	
	
}

