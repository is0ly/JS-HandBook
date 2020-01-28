// * JS has 7 data types

// ?  1 - number

let age = 34;
console.log(`age data type is -- ${typeof age}`);
console.log(`NaN - special number value -- ${1 * "dd"}`);

// ?  2 - string

let name = "Ilya";
console.log(`name data type is -- ${typeof name}`);

// ?  3 - boolean

let isLogged = true;
let isDead = false;

console.log(
    `isLogged data type is -- ${typeof isLogged} \nisDead data type is ${typeof isDead}`
);

// ?  4 - null

console.log(`null data type is -- ${typeof null}`);

// ?  5 - undefined

let mail;

console.log(`mail data type is -- ${typeof mail}`);

// ?  6 - object

let user = {
    name: "Egor",
    age: 26,
    isHere: true,
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

console.log(`user data type is -- ${typeof user}`);

// ?  7 - symbol

let id = Symbol("id");

console.log(`id data type is -- ${typeof id}`);
