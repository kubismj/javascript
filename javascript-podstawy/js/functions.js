'use strict';

function multiply(param1, param2, param3) {
	var result = param1 * param2 * param3;
	return result;
	var x = param1 + param2;
}
//najczęściej return jest ostatnią wykonywaną komendą
//samo return bez result przerywa bez zwracania 

//multiply(3, 9, 10);
//multiply(3, 9, 1);
//multiply(2, 9, 10);
//multiply(2, 19, 10);

var wynik = multiply(3, 9, 10)
console.log(wynik);


var funkcja = function() {
	return "wynik :)";
}

console.log(funkcja);
console.log(funkcja());

