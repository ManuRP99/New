const prompt = require('prompt-sync')({sigint: true});
const cleanterm = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
const welcome = 'Bienvenido al juego. El objetivo es escapar. \nRecuerda que mirar te permite saber donde estás.\n\n';

const descArray = [
	"Estás en un bosque. Parece que no hay nadie más. Al norte hay un muro de árboles.\n",
	'Hay muchos árboles muy juntos. Pese a la dificultad, puedes moverte en todas direcciones menos hacia el sur.\n',
	'Este área solo tiene piedras, con algún espino solitario entre ellas. Hay montañas hacia el este.\n',
	'El bosque está quemado. Puedes ver pequeñas columnas de humo saliendo de los troncos carbonizados. Hay un río al oeste.\n'
];
const objectArray = [
	'un palo',
	'un trozo de plástico',
	'un trozo de carbón',
	'algo de comida',
	'una piedra'
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
			console.log('Has escapado.');
			gameOver = true;
		} else {
			console.log('Las rocas te bloquean el paso.');
		}
		
	} else {
		playerLocation[0] -= 1;
		return playerLocation;
		
	}

}
function moveSouth() {
	
	if (playerLocation[0] === mapSize - 1) {
		console.log('Las rocas te bloquean el paso.');
	} else {
		playerLocation[0] += 1;
		return playerLocation;
	}
	
}
function moveWest() {
	
	if (playerLocation[1] === 0) {
		console.log('Las rocas te bloquean el paso.');
	} else {
		playerLocation[1] -= 1;
		return playerLocation;
	}

}
function moveEast() {
	
	if (playerLocation[1] === mapSize - 1) {
		console.log('Las rocas te bloquean el paso.');
	} else {
		playerLocation[1] += 1;
		return playerLocation;
	}
	
}

function search() {
	let objectNumber = Math.floor(Math.random() * 5);
	console.log('Has encontrado ' + objectArray[objectNumber] + '.');
	inventory += objectNumber;
}

function showInventory () {
	console.log('Tienes: ')
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
	
	let playerCommand = prompt('Introduce comando > ');
	if (playerCommand === 'norte') {
		if (currentPosition != 0) {
			console.log(cleanterm);
			moveNorth();
			
		} else {
			console.log("No puedes pasar.");
		}
		
	} else if (playerCommand === 'sur') {
		if (currentPosition != 1) {
			console.log(cleanterm);
			moveSouth();
		} else {
			console.log('Los árboles no te dejan pasar.')
		}
		
	} else if (playerCommand === 'este') {
		if (currentPosition != 2) {
			console.log(cleanterm);
			moveEast();

		} else {
			console.log("No puedes atravesar las piedras.")
		}
		
	} else if (playerCommand === 'oeste') {
		if (playerCommand != 3) {
			console.log(cleanterm);
			moveWest();

		} else {
			console.log('No sabes nadar.');
		}
		
		
	} else if (playerCommand === 'mirar') {
		console.log(cleanterm);
		console.log(currentDescription);
		
	} else if (playerCommand === 'buscar') {
		console.log(cleanterm);
		search();
		
	} else if (playerCommand === 'inv') {
		console.log(cleanterm);
		showInventory();
		
	} else if (playerCommand === 'mapa') {
		console.table(mapArray);
		console.log('Player is at ' + playerLocation);
	} else {
		console.log('Error. \nLista de comandos: norte, sur, este, oeste, mirar, buscar, inv.\nmapa: mostrar mapa\n Ctrl + c para salir del juego.');
		//console.log(playerLocation);
	}
	

}

