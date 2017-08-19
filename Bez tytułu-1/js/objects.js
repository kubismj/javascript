'use strict';

var osoba = {
	imie: "Wojtek",
	wzrost: 181,
	przedstawOsobe: function() {
		console.log('Cześć jestem ' + this.imie + ', mam ' + this.wzrost + ' wzrostu.');
	}
}
// this. odwołuje sie ezpośrednio do imię w danym osoba 

console.log(osoba.imie);
console.log(osoba.wzrost);

osoba.imie = 'Adam'

console.log(osoba['imie']);
console.log(osoba['wzrost']);

osoba.przedstawOsobe()
//w przedstawOsobe jest wyswietlenie console.log('Cześć') więc wystarczy się odwołac do przedstawOsobe
console.log(osoba.przedstawOsobe());
//jezeli wpiszemy jak powyżej najpierw wyświetli odwołanie a potem samo głóne console.log(..) które jest już puste ponieważ juz yło wywołane

console.log();