// * JS has 7 data types

// ?  1 - number

const age = 37;
console.log(`age data type is -- ${typeof age}`);
console.log(`NaN - special number value -- ${1 * 'dd'}`);

// ?  2 - string

const name = 'Ilya';
console.log(`name data type is -- ${typeof name}`);

// ?  3 - boolean

const isLogged = true;
const isDead = false;

console.log(
  `isLogged data type is -- ${typeof isLogged} \nisDead data type is ${typeof isDead}`,
);

// ?  4 - null

console.log(`null data type is -- ${typeof null}`);

// ?  5 - undefined

let mail;

console.log(`mail data type is -- ${typeof mail}`);

// ?  6 - object

const user = {
  name: 'Egor',
  age: 26,
  isHere: true,
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

console.log(`user data type is -- ${typeof user}`);

// ?  7 - symbol

const id = Symbol('id');

console.log(`id data type is -- ${typeof id}`);
