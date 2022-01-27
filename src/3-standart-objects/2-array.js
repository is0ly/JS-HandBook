const userData = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  true,
  { id: 2 },
  'John Doe',
  (a, b) => a + b,
  function greet(name) {
    return `Hello ${name}`;
  },
];

// console.log(userData[10](3, 9));
// console.log(userData[11]('Ilya'));

// * Reduce

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default userData;
