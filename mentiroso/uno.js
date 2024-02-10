const prompt = require('prompt-sync')({sigint: true});

// manos, monton y baraja son arrays, cartas son objects

//let playerNum = prompt('Número de jugadores: ');
let playerNum = 4;
// let playerNames = [];
// prompt for player names at beginning and store them for display with each hand
let manos = [];
let monton = [];
let baraja = [];
let buffer = [];


// crear manos 

for (let i = 0; i < playerNum; i++) {
	manos[i] = new Array;
//	manos[i] += String(i + 1);
}


// mostrar mano

function mostrarMano(player) {
	console.log('\n\n' + 'Mano de ' + player + ': \n')
	for (let i = 0; i < manos[player].length; i++) {
		console.log(manos[player][i].color + ' ' + manos[player][i].numero);
	}
}



// crear baraja de 40 objects

for (let i = 0; i < 40; i++) {
	baraja[i] = {};
	baraja[i].carta = i;
	//baraja[i].libre = true;
}


// asignar color a las cartas(4 * 10)

function colores(mult) {

	if (mult === 0) {

		for (let i = 0; i < 10; i++) {
			baraja[i].color = 'rojo';
			baraja[i].numero = i;
		}
	}
	if (mult === 1) {

		for (let i = 0; i < 10; i++) {
			baraja[10 + i].color = 'amarillo';
			baraja[10 + i].numero = i;
		}
	}

	if (mult === 2) {

		for (let i = 0; i < 10; i++) {
			baraja[20 + i].color = 'azul';
			baraja[20 + i].numero = i;
		}
	}

	if (mult === 3) {

		for (let i = 0; i < 10; i++) {
			baraja[30 + i].color = 'verde';
			baraja[30 + i].numero = i;
		}
	}
}



function scrambleFirst() {
		for (let i = 0; i < 40; i++) {
			let coin = Math.floor(Math.random() * 2);
			if (coin === 0) {
				let card = baraja.pop();
				buffer.push(card);
				// console.log('pop');
			}
			if (coin === 1) {
				let card = baraja.shift();
				buffer.push(card);
				// console.log('shift');
			}
		}
}




// barajar y repartir 

function scramble(players) {
	while (buffer.length > 0) {
		for (let i = 0; i < playerNum; i++) {
			let coin = Math.floor(Math.random() * 2);
			if (coin === 0) {
				let card = buffer.pop();
				manos[i].push(card);
			}
			if (coin === 1) {
				let card = buffer.shift();
				manos[i].push(card);
			}
		}
	}
}





// interfaz para el turno
function jugarTurno(player) {
	console.log(manos[player]);
	let numCarta = prompt('Elije numero: ');
	let colorCarta = prompt('Elije color: ');
	let cleanAction = Number(numCarta) + ' ' + colorCarta;
	console.log(cleanAction);	
	// tirarCarta(player, cleanaction);
}


// console.log('');


colores(0);
colores(1);
colores(2);
colores(3);
// console.log('Baraja: ');
// console.log(baraja);
scrambleFirst();
// console.log('Buffer: ');
// console.log(buffer);
scramble(playerNum);
// mostrarMano(0);
// mostrarMano(1);
// mostrarMano(2);
// mostrarMano(3);
// console.log('Manos: ');
// console.log(manos);
// console.log(baraja);
jugarTurno(0);
