const user = {
  name: 'Ivan',
  surname: 'Petrov',
  age: 22,
  hasCar: true,
  'listen music': true,
  getInfo() {
    return `${this.name} ${this.surname} is ${this.age} year old`;
  },
};

user.sity = 'Moscow';

const firstName = 'Ilya';

const b = { firstName };

const bb = {
  [firstName]: 'Osipov',
};

const c = {
  name: 'Ilya',
  surname: 'Osipov',
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(n) {
    console.log(n);
    const [name, surname] = n.split(' ');
    Object.assign(this, { name, surname });
  },
};

// c.fullName = 1;
c.fullName = 'Katya Chegrincova';

console.log(c);
console.log(c.fullName);
// console.log(b);
// console.log(bb);
// console.log(user);
// console.log(user.getInfo());

const { name, surname, fullName } = c;

console.log('name', name);
console.log('surname', surname);
console.log('fullName', fullName);

const { name: cName, ...rest } = c;

console.log(cName);
console.log(rest);
