const now = new Date();
const year = now.getFullYear(); // -> year
const month = now.getMonth() + 1; // -> month(0 - 11)
const date = now.getDate(); // -> date (1 - 31)
const hours = now.getHours(); // -> number (0 - 23)
const minutes = now.getMinutes(); // -> number (0 -59)
const seconds = now.getSeconds(); // -> number (0-59)

const dateParser = () =>
  `${date} - ${month} - ${year} ${hours}:${minutes}:${seconds}`;

export default dateParser;
