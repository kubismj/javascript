'use strict';

var imiona = ["Monika", "Krystian", "Łukasz"];
console.log(imiona);

imiona[3] = "Maria";
console.log(imiona);

imiona[2] = "Ela";
console.log(imiona);

var ileElementow = imiona.push("Geralt");
console.log(imiona);
console.log(ileElementow);

var usunietyElement = imiona.pop();
console.log(imiona);
console.log(usunietyElement);

console.log(imiona.unshift("Robert"));
console.log(imiona);

console.log(imiona.shift());
console.log(imiona);

console.log("ilosc elemetow w tablicy: " + imiona.length)

var imie = "Adam";
console.log(imie[0]);


console.log("===================");
console.log(imiona);
console.log(imiona.join(" - "));
// domyslnie rozdziela przecinkiem ale możemy dopisać " - "

console.log("===================");
console.log(imiona.reverse());

console.log("===================");
imiona.sort();
console.log(imiona);

var imionaMeskie = ['Wojtek', 'Michał', 'Andrzej']
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);
console.log("Tablica imiona meskie: " + imionaMeskie);

console.log(zbiorImion.indexOf('Michał'));
//zwraca index pod którym znajduje się wartość

console.log(Array.isArray(zbiorImion));
//potwierdza czy zbior jest talicą

console.log(zbiorImion.slice(2,5))
//zbior od 2 do 5 (bez 5) <2,5)
console.log(zbiorImion);

zbiorImion.splice(2, 3, 'Zenek', 'Ania', 'Tomasz', 'Jedrzej');
//po splice usuwa elementy po 2 to (2); od 2 trzy elementy to (2, 3); jeżeli tylko "Zenek" to wstawi w pierwszy usunięty a jak podamy kolejne to zamieni kolejne, jeżeli podamy za dużo to dostawi nowe
console.log(zbiorImion);

console.log(zbiorImion.toString())
//to samo co join tylko nie podajemy czym rozdzielać i będzie po rzecinku






















