;

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

console.log(`Результат вычисления равен: ${result}.`);



/*// Альтернативное решение Задания №1

Добрый день! 
Вопрос такой: как можно решить данную задачу через задание обекта? Т.к. в школе больше трех предметов. и что, если нам понадобится вычислить средний бал не только по трем предметам, а например и по рисованию = 5, и по музыке = 3, и по биологии = 4...

let jornalPerson = {
  algebra: 5,
  geography: 4,
  physics: 4,
	paint: 5,
	music: 3,
	bilogy: 4
};

function average(number) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < number.length; i++) {
  count += 1;
  sum += number[i];
}
  return sum / count;
}

average(jornalPerson);

console.log(average);*/