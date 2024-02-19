
let spHover = () => redSquare();
// let wHover = () => moveWhSq( 0   , -0.3);
// let aHover = () => moveWhSq(-0.3 ,  0  );
// let sHover = () => moveWhSq( 0   ,  0.3);
// let dHover = () => moveWhSq( 0.3 ,  0  );

let wHover = () => moveWhSq( 0 ,-1 );
let aHover = () => moveWhSq(-1 , 0 );
let sHover = () => moveWhSq( 0 , 1 );
let dHover = () => moveWhSq( 1 , 0 );

document.body.addEventListener('keydown', (ev) => {
		if(ev.key == ' ') {
			console.log('spaceBar!');
			spHover();
		}
		if(ev.key == 'w') {
			console.log('w!');
			wHover();
		}
		if(ev.key == 'a') {
			console.log('a!');
			aHover();
		}
		if(ev.key == 's') {
			console.log('s!');
			sHover();
		}
		if(ev.key == 'd') {
			console.log('d!');
			dHover();
		}

	}
);
