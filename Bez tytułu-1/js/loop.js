'use strict';

/* Pętla for */

for(var i = 0 ; i < 4; i++) {
	console.log(i);
}



var imiona = ['Wojtek', 'Adam', 'Zenek'];

for(var i = 0; i < imiona.length; i++) {
	console.log(imiona[i]);
}
imiona.forEach(function(element, index){
	console.log(index + ": " + element)
})

//pętla while
var i = 0;
while(i < 3) {
	console.log(i);
	i++;
}

//pętla do while

//var j = 10;
//do {
//	console.log(j);
//	j--;
//} while (j < 10)  - będzie się wykonywać w nieskończoność

var j = 10;
do {
	console.log(j);
	j++;
} while (j < 10)
	
	
for(var i = 0; i < 3; i++) {
	for(var j = 0; j < 3; j++) {
		console.log("i: " + i + "j:" + j);
		break;
//		break dotyczy pętli w której się znajduje - wychodzi z niej (z bloku)
	}
}


for(var i = 0; i < 3; i++) {
	for(var j = 0; j < 3; j++) {
		console.log("i: " + i + "j:" + j);
		if(j % 2 == 0) {
			continue;
		}
		console.log("Koniec obiegu")
	}
} 
//		continue dotyczy pętli w której się znajduje - zostaje w niej









