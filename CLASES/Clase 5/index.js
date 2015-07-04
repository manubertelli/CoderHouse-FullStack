
//EJERCICIO 1//

/*var str1 = "foo";

var consonante = (
	str1[0] !== "a" ||
	str1[0] !== "e" ||
	str1[0] !== "i" ||
	str1[0] !== "o" ||
	str1[0] !== "u");

if (consonante) {
	console.log("El string comuenzo con una vocal!");
}
else {
	console.log("El string comuenzo con la consonante "+str1[0]);*/

/////////////////////////////////////////////////////////////////

//EJERCICIO 2//

/*var i;
var str = "cadena";

for(i = 0; i < str.length; i++) {
	console.log(str[i]);
}*/

/////////////////////////////////////////////////////////////////

//EJERCICIO 3//


//CON WHILE
/*var i = 0;
var str = prompt ("Ingresa una palabra");
var encontre = false;
var vocal;

while (i < str.length && !encontre) {
	vocal = (
	str[i] == "a" ||
	str[i] == "e" ||
	str[i] == "i" ||
	str[i] == "o" ||
	str[i] == "u");
	if (vocal){
		console.log("La primer vocal es el caracter n° " + (1 + i));
		encontre= true;
	}
	else {
		i++;
	}	
}
if (!encontre) {
	console.log("No hay vocales en tu palabra");
};*/


//CON FOR

/*var i = 0;
var str = prompt ("Ingresa una palabra");
var encontre = false;
var vocal;

for(i = 0; i < str.length; i++ ) {
	vocal = (
	str[i] == "a" ||
	str[i] == "e" ||
	str[i] == "i" ||
	str[i] == "o" ||
	str[i] == "u");
	if (vocal){
		console.log("La primer vocal es el caracter n° " + (1 + i));
		encontre= true;
		break;
	}
}*/

/*if (encontre) {
	console.log("No hay vocales en tu palabra");
};*/

/////////////////////////////////////////////////////////////////

//EJERCICIO 4//

/*var i = 0;
var str = prompt ("Ingresa una palabra");
var cantVocales = 0;
var encontre = false;

for(i = 0; i < str.length; i++) {
	if (str[i] == "a" ||
	str[i] == "e" ||
	str[i] == "i" ||
	str[i] == "o" ||
	str[i] == "u") {
		cantVocales++;
		encontre = true;
	};
}
if (encontre) {
	console.log("La palabra "+str+" tiene "+(cantVocales)+" vocales!!");
};*/


/////////////////////////////////////////////////////////////////

//EJERCICIO 5//

//CON WHILE

/*var i = 0;
var cadena = prompt("Ingresa una cadena de caracteres");
var numero = prompt("Ingresa un número");
var cantNumeros = 0;
var cantNumerosMayores = 0;

while( i < cadena.length) {
	if (!isNaN(Number(cadena[i]))) {
		cantNumeros++;
		if (Number(cadena[i]) > numero) {
			cantNumerosMayores++;
		}
	}
	i++;
}
console.log("La cadena: '"+ cadena + "' tiene "+ cantNumeros + " caracteres numéricos y " + cantNumerosMayores +" de ellos son mayores a " + numero + ".");var i = 0;
*/
//CON FOR

/*var cadena = prompt("Ingresa una cadena de caracteres");
var numero = prompt("Ingresa un número");
var cantNumeros = 0;
var cantNumerosMayores = 0;

for(i = 0; i < cadena.length; i++) {
	if (!isNaN(Number(cadena[i]))) {
		cantNumeros++;
		if (Number(cadena[i]) > numero) {
			cantNumerosMayores++;
		}
	}
}
console.log("La cadena: '"+ cadena + "' tiene "+ cantNumeros + " caracteres numéricos y " + cantNumerosMayores +" de ellos son mayores a " + numero + ".");*/

/////////////////////////////////////////////////////////////////

//EJERCICIO 6//

/*var cadena1 = prompt("Ingresa la 1er cadena de caracteres");
var cadena2 = prompt("Ingresa la 2da cadena de caracteres");
var primeraUltima = prompt("Ingresa: primera o ultima dependiendo que ubicación de de la 2da cadena quieres buscar (sin tildes)")
var posicion;
cadena1 = cadena1.toLowerCase();
cadena2 = cadena2.toLowerCase();



if (primeraUltima.toLowerCase(primeraUltima) === "primera") {
	posicion = cadena1.indexOf(cadena2);
}
else if (primeraUltima.toLowerCase(primeraUltima) === "ultima") {
	posicion = cadena1.lastIndexOf(cadena2);
}
else{
	console.log("Debes ingresar 'primera' o 'ultima' sin tildes!!")
}

if (posicion >= 0) {
console.log("La " + primeraUltima.toLowerCase(primeraUltima) + " posición en la que comienza tu 2da cadena incluida es "+posicion+".");
}
else{
	console.log("La 2da cadena no está incluida dentro de la 1er cadena.")
}*/


/////////////////////////////////////////////////////////////////

//EJERCICIO 7//


var arr = [];
var elemArray = prompt("Ingresa un nuevo valor para tu array");

while (elemArray.toLowerCase() !== "basta"){
	arr.push(elemArray);
	elemArray = prompt("Ingresa un nuevo valor para tu array");
}
console.log(arr);