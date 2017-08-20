'use strict';

var jsosOsoby = {
	"osoby": [
		{
			imie: "Krystian",
			nazwisko: "Dziopa",
			wzrost: 180,
			zainteresowania: [
				{nazwa: "podroze"},
				{nazwa: "gotowanie"}
			]
		},
				{
			imie: "Marek",
			nazwisko: "Kubis",
			wzrost: 180,
			zainteresowania: [
				{nazwa: "meblarstwo"},
				{nazwa: "sport"}
			]
		},
		{
			imie: "Wojtek",
			nazwisko: "Potocki",
			wzrost: 180,
			zainteresowania: [
				{nazwa: "spanie"},
				{nazwa: "jedzenie"}
			]
		}
	]
}

console.log(jsosOsoby);

jsosOsoby.osoby[2].zainteresowania.forEach(function(e, i) {
										   console.log(e.nazwa);
										   });

jsosOsoby.osoby.forEach(function(e, i) {
	console.log(e.nazwisko);
});




















