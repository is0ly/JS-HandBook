let counter = 1;
let timerID;

function timer() {
	timerID = setTimeout(timer, 1000);
	console.log(counter);
	if (counter == 10) {
		clearTimer();
	}
	counter++;
}

function clearTimer() {
	clearTimeout(timerID);
	console.log("Таймер остановлен");
}

timer();
