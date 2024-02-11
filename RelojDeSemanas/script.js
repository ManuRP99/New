const semanaHtml = document.getElementById('semana');
const hh = document.getElementById('hora');
const mm = document.getElementById('minuto');
const ss = document.getElementById('segundo');
const dd = document.getElementById('dia');


//var date = d.getDate();
//var day = d.getDay();

//var weekOfMonth = Math.ceil((date - 1 - day) / 7);



function updateClock() {
	const currDate = new Date();
	const date = currDate.getDate();
	console.log(date);
	const seconds = currDate.getSeconds();
	const minutes = currDate.getMinutes();
	const hours = currDate.getHours();
	const days = currDate.getDay();
	console.log(days);
	const week = Math.ceil((date - 1 - days) / 7);

	hh.innerText = hours;
	mm.innerText = minutes;
	ss.innerText = seconds;
	semanaHtml.innerText = week;
}




setInterval(updateClock, 1000)

