const deepFlatten = arr =>
    [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

const array = [
    1,
    2,
    3,
    [4, 5, [6, [7, 8], 9], 10],
    11,
    true,
    { name: "Elena", age: 25 },
    (a, b) => a + b
];

console.log(deepFlatten(array));
