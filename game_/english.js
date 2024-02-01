const prompt = require('prompt-sync')({sigint: true});
const cleanterm = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
const welcome = 'Welcome to the game. The objective is to escape. \nRemember to use look to check where you are.\n\n';

const descArray = [
	"You are in a forest. It looks like nobody else is here. There are a lot of trees to the North.\n",
	'The trees are very close together here. Moving is difficult but you can make it in every direction except South.\n',
	'This area is filled with no more than rocks and the ocasional black bush. There are mountains to the east.\n',
	'This part of the forest has been burned. You can see thin columns of smoke rising from some of the charred trees. There is a river to the west.\n'
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
const mapSize = 9;
const emptyCell = ' ';

let playerLocation = [4, 4];


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
		if (playerLocation[1] === 4) {
			console.log('You escaped.');
			gameOver = true;
		} else {
			console.log('A rock is blocking the way.');
		}
		
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

//this sets the starting position to always 0
mapArray[4][4] = 0;
//console.table(mapArray);

// console.log(currentDescription);
// console.log(currentPosition);

//console.log(descArray[currentPosition]);
console.log(cleanterm);
console.log(welcome);
console.log(descArray[mapArray[playerLocation[0]][playerLocation[1]]]);

let gameOver = false;

while (!gameOver) {
	
	let currentPosition = mapArray[playerLocation[0]][playerLocation[1]];
	let currentDescription = descArray[currentPosition];
	//console.log(currentDescription);
	
	let playerCommand = prompt('Enter command > ');
	if (playerCommand === 'north') {
		if (currentPosition != 0) {
			console.log(cleanterm);
			moveNorth();
			
		} else {
			console.log("You can't go throught there.");
		}
		
	} else if (playerCommand === 'south') {
		if (currentPosition != 1) {
			console.log(cleanterm);
			moveSouth();
		} else {
			console.log('The trees are too tight together.')
		}
		
	} else if (playerCommand === 'east') {
		if (currentPosition != 2) {
			console.log(cleanterm);
			moveEast();

		} else {
			console.log("You can't move through rocks.")
		}
		
	} else if (playerCommand === 'west') {
		if (playerCommand != 3) {
			console.log(cleanterm);
			moveWest();

		} else {
			console.log('You should learn how to swim first.');
		}
		
		
	} else if (playerCommand === 'look') {
		console.log(cleanterm);
		console.log(currentDescription);
		
	} else if (playerCommand === 'search') {
		console.log(cleanterm);
		search();
		
	} else if (playerCommand === 'inv') {
		console.log(cleanterm);
		showInventory();
		
	} else if (playerCommand === 'secret') {
		console.table(mapArray);
		console.log('Player is at ' + playerLocation);
	} else {
		console.log('Unavailabe. Available commands: north, south, east, west, look, search, inv.\n Press Ctrl + c to exit.\nsecret: debugging');
		//console.log(playerLocation);
	}
	

}

