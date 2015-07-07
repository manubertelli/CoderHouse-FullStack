//   //////////////////////////////
//  //* TP4 JS - PRIMERA PARTE *//
// //////////////////////////////


var cadena = prompt("Ingresa el texto que quieras invertir!!");
var ultimoCaracter = cadena.substr(cadena.length-posicion, cadena.length-posicion+1);
var cadenaInvertida = ultimoCaracter;
var caracter;
var posicion;

for (posicion = 0; posicion <= cadena.length; posicion++){
	caracter = cadena.substring(cadena.length-posicion, cadena.length-posicion+1);
	cadenaInvertida += caracter;
}
console.log(cadenaInvertida);


//   //////////////////////////////
//  //* TP4 JS - SEGUNDA PARTE *//
// //////////////////////////////

var arr= [];
var arrInvertido =[];
var elem;
var elemInvertido;
var elemArray = prompt("Ingresa un nuevo valor para tu array para terminar escribe 'BASTA'");

while (elemArray.toLowerCase() !== "basta"){
	arr.push(elemArray);
	elemArray = prompt("Ingresa un nuevo valor para tu array para terminar escribe 'BASTA'");
}
for (elem = 1; elem <= arr.length; elem++){
	elemInvertido = arr[(arr.length-elem)];
	arrInvertido.push(elemInvertido);
}

console.log(arrInvertido);