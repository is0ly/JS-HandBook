const array = [
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

console.log(array[10](3, 9));
console.log(array[11]('Ilya'));

// * Reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
