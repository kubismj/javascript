'use strict';

/* Object Math */

console.log(Math.PI);
console.log(Math.cos(0));
console.log(Math.SQRT2);

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;

console.log(wynik);


console.log("krok 1: " + wynik); //3
console.log("krok 2: " + ++wynik); //4
console.log("krok 3: " + wynik); //4

liczba1 += 8; // to samo co - liczba1 = liczba1 + 8

var tekst = "Wojtek";

tekst += "Potocki";

console.log(tekst);


console.log('*******************');

console.log(liczba1 == liczba2);
console.log(liczba1 != liczba2);

var liczba = 10;
var tekst = "10";

console.log(liczba == tekst);
// == porónuje tyko wartość
console.log(liczba === tekst);
// === porónuje wartość i typ

console.log('*******************');

console.log(13 == 5 && 10 == "10");
console.log(13 == 5 || 10 == "10");



(2<5) ? console.log("tak") : console.log("nie");


































