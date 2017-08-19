'use strict';

/* 
var wojtek = {
	imie: "Wojtek",
	wzrost: 181,
	przedstawOsobe: function() {
		console.log('Cześć jestem ' + this.imie + ', mam ' + this.wzrost + ' wzrostu.');
	}
}
// this. odwołuje sie ezpośrednio do imię w danym osoba 

var kaja = {
	imie: "Kaja",
	wzrost: 181,
	przedstawOsobe: function() {
		console.log('Cześć jestem ' + this.imie + ', mam ' + this.wzrost + ' wzrostu.');
	}
}

console.log(wojtek.imie);
console.log(wojtek.wzrost);

wojtek.imie = 'Adam'

console.log(wojtek['imie']);
console.log(wojtek['wzrost']);

wojtek.przedstawOsobe()
//w przedstawOsobe jest wyswietlenie console.log('Cześć') więc wystarczy się odwołac do przedstawOsobe
console.log(wojtek.przedstawOsobe());
//jezeli wpiszemy jak powyżej najpierw wyświetli odwołanie a potem samo główne console.log(..) które jest już puste ponieważ juz było wywołane

console.log();

console.log(kaja.imie);
console.log(kaja.wzrost); 
*/

class Osoba {
	constructor(imie, nazwisko) {
		this.imie = imie;
		this.nazwisko = nazwisko;
		this.wzrost;
		this.oczy;
	}
	wyswietlInfo() {
		console.log('Imię: ' + this.imie + "\n"
					+ 'Nazwisko: ' + this.nazwisko + "\n"
					+ 'Wzrost: ' + this.wzrost + "\n"
					+ 'Oczy: ' + this.oczy + "\n");
	}
}

// "\n" - enter
// constructor()  - przypisuje do Osoby zawartość {..}
// constructor ma prarametry w (imie, nazwisko. ....)


var wojtek = new Osoba('Wojtek', 'Potocki');

wojtek.wzrost = 180;
wojtek.oczy = 'niebieskie';

console.log(wojtek);

var marek = new Osoba('Marek', 'Kubiś');

marek.wzrost = 190;
marek.oczy = 'szare';

console.log(marek);


wojtek.wyswietlInfo();
marek.wyswietlInfo();