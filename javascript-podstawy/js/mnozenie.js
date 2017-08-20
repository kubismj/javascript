'use stict'

//ay przejsc przez całą tablice musimy użyć pętli

function mnozenie(tablicaLiczb) {
	var iloczyn = 1;
	tablicaLiczb.forEach(
		function (element, index) {
			iloczyn *= element;
		});

	// element - dany element w taablicy, na którym obecnie zanjduje się pętla (dla pierwszego obiegu jest to pierwszy element, dla drugiego obiegu drugi element tablicy itd)

	// index - index danego elementu w tablicy, na którrym obecnie znajduje się pętla (dla pierwszegoobiegu jest to index 0, dla drugirgo obiegu jest to index 1)

	return iloczyn;
}

var tablica = [4, 5, 10, 8];

console.log(mnozenie(tablica));