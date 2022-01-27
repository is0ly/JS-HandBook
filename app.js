const out = document.querySelector('.out');

let timerID;

function updateTime(k) {
  /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return `0${k}`;
  }
  return k;
}

function clearTimer() {
  clearTimeout(timerID);
  // console.log('Таймер остановлен');
}

function timer() {
  const now = new Date();
  const year = now.getFullYear(); // -> year
  let month = now.getMonth() + 1; // -> month(0 - 11)
  let date = now.getDate(); // -> date (1 - 31)
  let hours = now.getHours(); // -> number (0 - 23)
  let minutes = now.getMinutes(); // -> number (0 -59)
  let seconds = now.getSeconds(); // -> number (0-59)

  month = updateTime(month);
  date = updateTime(date);
  seconds = updateTime(seconds);
  minutes = updateTime(minutes);
  hours = updateTime(hours);

  const dateParser = () =>
    `${date}-${month}-${year}  ${hours}:${minutes}:${seconds}`;

  timerID = setTimeout(timer, 1000);

  if (hours === 22) {
    clearTimer();
  }
  out.innerHTML = `<p>${dateParser()}</p>`;
}

timer(out);
