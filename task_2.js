'use strict';


let ask = parseInt(prompt('Введите целое число от 0 до 999'));	

function getInt(ask) {
		
		if(isNaN(ask)) {
			console.log('Это не число');
			
		} else if(ask > 999) {
			console.log('Нужно ввести число от 0 до 999');
			
		} 
		
		return {
			hundreds: Math.floor(ask / 100),
			tens: Math.floor(ask / 10) % 10,
			units: ask % 10,
		}
}

console.log(getInt(ask));

