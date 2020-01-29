let array = [
    1,
    3,
    6,
    7,
    1,
    3,
    6,
    7,
    "a",
    "b",
    "c",
    "a",
    "a",
    true,
    false,
    false,
    { name: "Ivan", age: 33 },
    { name: "Ivan", age: 33 }
];

let unique = array.filter((v, i, a) => a.indexOf(v) === i);

// x --> item in array
// i --> index of item
// a --> array reference, (in this case "array")

let uniqueItems = Array.from(new Set(array));

let uniqueItemsSpread = [...new Set(array)];

console.log(unique, uniqueItems, uniqueItemsSpread);
