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


console.log(`\nЗадание №2. Журнал успеваемости\n `);

let data ={
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	music: [2, 2, 6],
	english: [4, 4, 3],
	poetry: [5, 3, 4],
	chemistry: [2],
	french: [4, 4]
}
//data.physics.push(5, 4);
//data.chemistry.push(5, 4);
//data.french.push(5, 4);
//data.literature = [5, 4, 3, 5];
//data.physicalTraining = [5, 5, 5, 5];
//data.art = [2, 3, 5, 5];
//data.crafts = [4, 4, 5, 5];
//data.mathematics = [4, 4, 5, 3];


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


console.log(`\nЗадание №3. Расшифровка данных\n `);

let secretData = {
	aaa: 1,
	bbb: 0
}

function getPersonData( donKnow ) {
		
	console.log(donKnow);
	
	return function(donKnow) {
		
		for (let prop in donKnow) {
			for (let j = 0; j < donKnow[prop].length; j++) {
				
				if (donKnow[prop][j] == 0) {
					donKnow[prop][j] = ("Родриго");
				} else if (donKnow[prop][j] == 1) {
					donKnow[prop][j] = ("Эмильо");
				}
				
				console.log(donKnow);
				//console.log({firstName: donKnow[key][j], lastName: donKnow[key][j]});
			}
		}
		
	}
		
}


getPersonData( secretData );


/*

if (secretData.aaa === 0) {
			secretData.aaa = "Родриго";
		} else if (secretData.aaa === 1) {
			secretData.aaa = "Эмильо";
		} 
		
		if (secretData.bbb === 0) {
			secretData.bbb = "Родриго";
		} else if (secretData.bbb === 1) {
			secretData.bbb = "Эмильо";
		} 
		
		console.log(secretData);
		
*/