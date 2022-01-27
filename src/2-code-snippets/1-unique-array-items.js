const array = [
  1,
  3,
  6,
  7,
  1,
  3,
  6,
  7,
  'a',
  'b',
  'c',
  'a',
  'a',
  true,
  false,
  false,
  { name: 'Ivan', age: 33 },
  { name: 'Ivan', age: 33 },
];

const unique = array.filter((v, i, a) => a.indexOf(v) === i);

// v --> item in array
// i --> index of item
// a --> array reference, (in this case "array")

const uniqueItems = Array.from(new Set(array));

const uniqueItemsSpread = [...new Set(array)];

// console.log(unique, uniqueItems, uniqueItemsSpread);
