
//////////////////////////////////////////////////////////////////////////////////////////////////////
//																									//
//	Realizar una función que reciba una función operación e infinitos operandos, y que devuelva un 	//
//	array con los resultados de haber aplicado la operación en todos los argumentos, operando 		//
//	siempre con el argumento actual y el siguiente. Esta función también tiene que validar los 		//
//	parámetros y lanzar un error en caso que estos no cumplan con las condiciones pedidas. 			//
//	El ejercicio debe realizarse utilizando el método de array: reduce 								//
// 																									//
//	Ejemplo: 																						//
//	> ObtenerResultados(multiplicar, 2, 5, 3, 3, 2, 4) 												//
//	< [10, 9, 8] 																					//
//																									//
//////////////////////////////////////////////////////////////////////////////////////////////////////


function multiplicar(elem1, elem2) {
	var resultado;
	resultado = elem1*elem2;
	return resultado;
}
function dividir(elem1, elem2) {
	var resultado;
	resultado = elem1/elem2;
	return resultado;
}

function sumar(elem1, elem2) {
	var resultado;
	resultado = elem1+elem2;
	return resultado;
}

function restar(elem1, elem2) {
	var resultado;
	resultado = elem1-elem2;
	return resultado;
}




function obtenerResultados(funcion, arr){
	var myArr= Array.prototype.slice.call(arguments, 1);
	// console.log(myArr);

	for(i = 0; i < myArr.length; i++ ) {
		if (typeof myArr[i] !== "number"){ //comprueba que es un número
			throw new Error (
				"alguno de los operadores NO es numérico o está vacio"
				);
		}
	}
	var arrayResultado =[];
    myArr.reduce(function(valorPrevio, valorActual, indice, array) {
        // console.log(valorPrevio, valorActual) // comprueba el funcionamiento del reduce()
        arrayResultado.push(funcion(valorPrevio, valorActual));
        return valorActual;
    });
    return arrayResultado;

}


console.log(obtenerResultados( multiplicar, 1, 2, 3, 4, 5)); // recibe una función y los operando de la misma
console.log(obtenerResultados( dividir, 72, 24, 6, 3, 3)); // recibe una función y los operando de la misma
console.log(obtenerResultados( sumar, 1, 2, 3, 4, 5)); // recibe una función y los operando de la misma
console.log(obtenerResultados( restar, 5, 4, 3, 2, 1)); // recibe una función y los operando de la misma





