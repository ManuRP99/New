const prompt = require('prompt-sync')({sigint: true});

// manos, monton y baraja son arrays, cartas son objects

const spacer = '\n\n\n';

//let playerNum = prompt('Número de jugadores: ');
let playerNum = 2;
// let playerNames = [];
// prompt for player names at beginning and store them for display with each hand
let manos = [];
let monton = [];
let baraja = [];
let buffer = [];
let currMentira = '';
let currVerdad = '';

let game = true;


// crear manos 

for (let i = 0; i < playerNum; i++) {
	manos[i] = new Array;
//	manos[i] += String(i + 1);
}


// mostrar mano

function mostrarMano(player) {
	console.log('\n\n' + 'Mano de ' + player + ': \n')
	let bufferMost = [];
	// format log
	for (let i = 0; i < manos[player].length; i++) {
		let numCarta = manos[player][i].numero;
		bufferMost += (numCarta + '\t');
	}
	// log hand
	console.log(bufferMost);
}

function mostrarMonton() {
	console.log('\n\n' + 'Monton ' + ': \n');
	let bufferMost = [];
	// format log
	for (let i = 0; i < monton.length; i++) {
		let numCarta = monton[i].numero;
		bufferMost += (numCarta + '\t');
	}
	// log monton
	console.log(bufferMost);
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
			baraja[i].colorProp = 'rojo';
			baraja[i].numero = i;
		}
	}
	if (mult === 1) {

		for (let i = 0; i < 10; i++) {
			baraja[10 + i].colorProp = 'amarillo';
			baraja[10 + i].numero = i;
		}
	}

	if (mult === 2) {

		for (let i = 0; i < 10; i++) {
			baraja[20 + i].colorProp = 'azul';
			baraja[20 + i].numero = i;
		}
	}

	if (mult === 3) {

		for (let i = 0; i < 10; i++) {
			baraja[30 + i].colorProp = 'verde';
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

// añade las cartas al monton, pero no las quita de la mano 
//

function tirarCartas(player, number, lie) {
	let rightMano = manos[player];
	for (let i = 0; i < rightMano.length; i++) {
		if (rightMano[i].numero == number) {
			currVerdad = rightMano[i].numero;
			monton.push(rightMano[i]);
			rightMano.splice(i, 1);
			currMentira = lie;
			break;
		}
	}
}
	
	//mostrarMano(player);



// levantar o no
//
function levantar() {
	console.log('Lo que se ha dicho: ' + currMentira);
	console.log('Carta: ' + currVerdad);
	
}


// interfaz para el turno
function jugarTurno(player) {
	mostrarMano(player);
	let levantarSel = prompt('Quieres levantar?: s/n  ')
	if (levantarSel === 's') {
		levantar();
	}
	// let numCartas = prompt('Elije cuantas cartas vas a tirar: ');
	let numSel = prompt('Elije un numero para tirar:  ');
	// let colSel = prompt('Elije un color para tirar: ');
	let mentiraRaw = prompt('Elije lo que vas a decir que es:  ');

	let numClean = Number(numSel);
	let colorClean;
	let mentiraClean = Number(mentiraRaw);
	currMentira = mentiraClean;
	
	// let cleanAction = [Number(numCartas), Number(cartasSel), Number(mentiraRaw)];
	// let log = numCartas + ' ' + cartasUse + ' ' + mentiraRaw + '\n' + player;
	// console.log(cleanAction);
	

	tirarCartas(player, numClean, mentiraRaw);
	console.log(monton, buffer);
	mostrarMano(player);
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
// console.log('Manos: ');
// console.log(manos);
// console.log(baraja);



while (game) {
	for (let i = 0; i < playerNum; i++) {
		jugarTurno(i);
		console.log(spacer);
		mostrarMonton();
	}

}

// jugarTurno(0);
// jugarTurno(1);
// jugarTurno(0);
// jugarTurno(1);
