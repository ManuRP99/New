

setInterval(setClock, 1000) 



// const hourHand = document.querySelector('data-hour-hand');
// const minuteHand = document.querySelector('data-minute-hand');
// const secondHand = document.querySelector('data-second-hand');


const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');



function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360)
}

function setClock() {
	const currentDate = new Date();
	const secondsRatio = currentDate.getSeconds() / 60;
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
	console.log(currentDate);
	console.log(secondsRatio);
	console.log(minutesRatio);
	console.log(hoursRatio);

	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minutesRatio);
	setRotation(hourHand, hoursRatio);

	}


