;
/*
console.log("Задание №1");
console.log("\n");

let algebra = 5, geography = 4, physics = 4;

let average = (algebra + geography + physics) / 3;

console.log("Средний бал равен ученика равен: " + average.toFixed(2));
console.log("\n");

console.log("Задание №2");
console.log("\n");

let name = "Геннадий";

let message = `Привет Мир! Меня зовут ${name}.`;

console.log(message);

// Альтернативное решение Задания №2
// let name = prompt('Как Вас зовут?', 'Гость');

// concole.log(`Привет Мир! Меня зовут ${name}`);
console.log("\n");

console.log("Задание №3");
console.log("\n");

let x = 2, y = 22, z = 0;

let result = (x * y + 5 * z + x - 1);
// let result = (x * (y + 5) * (z + x - 1));
// let result = (x * y + 5) * (z + (x - 1));

console.log(`Результат вычисления равен: ${result}.`);*/


// Начало альтернативного решения Задания №1

let jornalPerson = {
    algebra: 5,
    geography: 4,
    physics: 4,
     paint: 5,
	   music: 3,
	   bilogy: 4
}

let arr = [];

for (let i in jornalPerson) {
  arr.push(jornalPerson[i]);
}
//console.log(arr);

let count = 0;
let sum = 0;
let average1 = 0;

for (let i = 0; i < arr.length; i++) {
  count+=1;
  sum += arr[i];
  average1 = sum / count;
}
console.log(`Средний бал равен ученика равен: ${average1.toFixed(2)}`);

console.log("\n");


// Конец альтернативного решения Задания №1