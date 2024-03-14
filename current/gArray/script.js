const ui = document.getElementById("UI");

const center = 3; 
const fibo = [1, 1, 2, 3, 5, 8, 13, 21];
/*
for (let i = 0; i < 25; i++) {
        ui.innerHTML += "<div class=\"cell\"></div>";
}
*/

for (let i = 0; i < 7;i++) {
	for (let j = 0; j < 7;j++) {
        	ui.innerHTML += `<div class="cell" id="${i}-${j}"></div>`;
	}
}

const changePixel = (r, c) => {
	let target = document.getElementById(`${r}-${c}`);
	target.classList.toggle("active");
};

const spiral = () => {
    changePixel(3, 3);
    changePixel(3, 2);
    changePixel(4, 2);
    changePixel(5, 2);
    changePixel(5, 3);
    changePixel(5, 4);
    changePixel(5, 5);
    changePixel(4, 5);
    changePixel(3, 5);
    changePixel(2, 5);
    changePixel(1, 5);
    changePixel(1, 4);
    changePixel(1, 3);
    changePixel(1, 2);
    changePixel(1, 1);
    changePixel(1, 0);
    changePixel(2, 0);
    changePixel(3, 0);
    changePixel(4, 0);
    changePixel(5, 0);
    changePixel(6, 0);
};

const invert = () => {
    for (let i = 0; i < 7;i++) {
        for (let j = 0; j < 7;j++) {
            let target = document.getElementById(`${i}-${j}`);
            target.classList.toggle("active");
        }
    }
};

const main = () => {
    setInterval(invert, 300);
};
