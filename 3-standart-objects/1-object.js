const user = {
    name: "Ivan",
    surname: "Petrov",
    age: 22,
    hasCar: true,
    "listen music": true,
    getInfo: function() {
        return `${this.name} ${this.surname} is ${this.age} year old`;
    }
};

user["sity"] = "Moscow";

console.log(user);
console.log(user.getInfo());
