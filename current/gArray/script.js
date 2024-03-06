const ui = document.getElementById("UI");

const center = 3; 

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

changePixel(3, 3);

let complete = false;

const spiral = () => {
	while(!complete) {
		changePixel(center, center);

	}
};
