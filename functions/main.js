"use strict";

console.log(`Задание №1. Корни квадратного уравнения\n `);

function getSolutions (a, b, c) {
	
	let result = {};
	let D = Math.pow(b, 2) - 4 * a * c;
	
	let x1;
	let x2;

	if (D > 0) {
		x1 = +((-b - Math.sqrt(D)) / (2 * a)).toFixed(3);
		x2 = +((-b + Math.sqrt(D)) / (2 * a)).toFixed(3);
		
		result.roots = [x1, x2];
		result.D = D;
		
	} else if (D === 0) {
		x1 = +(-b / 2 * a).toFixed(2);
		
		result.roots = [x1];
		result.D = D;	
		
	} else {
		result.D = D;
	}
	
	return result;
}
//getSolutions(7, 20, -3);


function showSolutionsMessage (a, b, c) {
	let result = getSolutions( a, b, c );
	
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	
	if (result.D > 0) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	} else if (result.D === 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	} else {
		console.log(`Уравнение не имеет вещественных корней.`);
	}
	
	return result;
}

showSolutionsMessage(7, 20, -3);

// *******************************************************************************

console.log(`\nЗадание №2. Журнал успеваемости\n `);

let data ={
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	music: [2, 2, 6],
	english: [4, 4, 3],
	poetry: [5, 3, 4, 5],
	chemistry: [2],
	french: [4, 4]
}

// data.physics.push(5, 4);
// data.chemistry.push(5, 4);
// data.french.push(5, 4);
// data.literature = [5, 4, 3, 5];
// data.physicalTraining = [5, 5, 4, 5];
// data.art = [2, 3, 5, 5];
// data.crafts = [3, 4, 5, 5];
// data.mathematics = [3, 4, 5, 5];


function getAverageMark (mas) {
	let sum = 0;

	for (let i = 0; i < mas.length; i++) {
		sum += mas[i];
	}

	return Number((sum / mas.length).toFixed(3));
}

//console.log(getAverageMark(data.algebra));


function getAverageScore(obj) {

	let masScore = {};

	for (let key in obj) {
		masScore[key] = getAverageMark(obj[key]);
	}

	let score = 0;
	let sum = 0;
	
		for (let j in masScore) {
			score += 1;
			sum += masScore[j];
		}
	
		masScore.average = Number((sum / score).toFixed(3));
	

	console.log(masScore);

	return masScore;
}

getAverageScore(data);


// ******************************************************************************* 

console.log(`\nЗадание №3. Расшифровка данных\n `);

let secretData = {
	aaa: 0,
	bbb: 1
}

function getString (x) {
    return  (x === 0) ? "Эмильо" : "Родриго";
}

function getPersonData (obj) {

	let discriptSecretData = {};

	discriptSecretData.firstName = getString(obj.aaa);
	discriptSecretData.lastName = getString(obj.bbb);

	//console.log(discriptSecretData);
	return discriptSecretData;
}


getPersonData(secretData);

console.log(getPersonData(secretData));




// *********************** Старое решение второй задачи

/*
function getAverageMark(obj) {
//Средняя оценка по предметам:
	
	for (let key in obj) {
			let sum = 0;
		for (let j = 0; j < obj[key].length; j++) {
			sum += (obj[key][j]);
		}
		obj[key] = Number((sum / obj[key].length).toFixed(3));
//		console.log(`${key}: ${(sum / data[key].length).toFixed(2)}`);
	}
	
	return obj;
}
getAverageMark(data);


function getAverageScore(averageMark) {
//Средняя оценка по всем предметам:
	let score = 0;
	let sum = 0;
	
		for (let key in averageMark) {
			score += 1;
			sum += averageMark[key];
		}
	
	averageMark.average = Number((sum / score).toFixed(3));
	
	return averageMark;
}
getAverageScore(data);
console.log(data);
*/