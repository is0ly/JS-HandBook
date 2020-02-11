function random(n) {
    return Math.round(Math.random() * n);
}

const arr = [];

for (let i = 0; i < 10; i += 1) {
    arr.push(random(10));
}

console.log(arr);

const obj = {};

arr.map((item, idx) => {
    obj.item = item;
});

console.log(obj);

// TODO  - Функция принимает а вход массив чисел и возвращает объект вида {"число":"количество вхождений"}
// TODO  - Например arr = [2,2,3,4,5,5,6]  => {"2":2, "3":1, "4":1,"5":2, "6":1}
