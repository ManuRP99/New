
const content1 = document.getElementById('1');
const content2 = document.getElementById('2');
const content3 = document.getElementById('3');
const content4 = document.getElementById('4');

let counter = 0; 
const titleContent = document.getElementById('title');

const charArray = ['\\', '|', '^', '¨', 'ç', 'ª', 'º', '"', '!', '¡', ' ', '|', '^', '¨', 'ç', 'ª', 'º', '"', '!', '¡', '\n'];

	


function something() {
	counter += 1; 
	let randomNumber = Math.floor(Math.random() * 21);
	titleContent.innerText += charArray[randomNumber];
	for (let i = 1; i < 5; i++) {
		let target = document.getElementById(i);
		let diffRandomNumber = Math.floor(Math.random() * 21);
		let randomChar = charArray[diffRandomNumber];
		target.innerText += randomChar;
	} 
}


const forever = setInterval(something,50);

