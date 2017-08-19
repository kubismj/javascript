'use strict';

var wzrostMateusz = 190;
var wzrostOlgi = 190;

/* Warunek if */

if (wzrostOlgi < wzrostMateusz) {
	console.log ("Olga jest niższa");
}

if (wzrostOlgi < wzrostMateusz) {
	console.log ("Olga jest niższa");
} else {
	console.log ("Olga jest wyższa");
}

// jezeli warunek nie jest spełniony to wyświetli -> else
//warunki są sprawdzane wszystkie lub do pierwszego false

/* Warunek if else if */

if (wzrostOlgi < wzrostMateusz) {
	console.log ("Olga jest niższa");
} else if (wzrostOlgi == wzrostMateusz) {
	console.log ("Olga jest tak wysoka jak Mateusz :)");
} else {
	console.log ("Olga jest wyższa");
}



var kolor = 'zielony';

switch (kolor) {
	case 'czerwony':
		console.log('Kolor czerwony');
		break;
	case 'zielony':
		console.log('Kolor zielony');
		break;
	case 'niebieski':
		console.log('Kolor niebieski');
		break;
		console.log('Inny kolor');
}

