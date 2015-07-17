
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

	//	*VALIDACIÓN DE CANTIDAD PAR DE OPERANDOS*	//
	//				 *console.log()*				//

    if (myArr.length%2 !== 0) {
    	console.log("falto ingresar un operando para obtener el último resultado, si quieres obtenerlo por favor agregalo!!")
    }

    //	*VALIDACIÓN DE CANTIDAD PAR DE OPERANDOS*	//
	//				 *throw new Error*				//

    // if (myArr.length%2 !== 0) {
    // 	throw new Error ("falto ingresar un operando para obtener el último resultado, si quieres obtenerlo por favor agregalo y sino borra el operando que sobra!!")
    // }

	//	*VALIDACIÓN DE QUE TODOS LOS ELEMENTOS SEAN NUMÉRICOS*	//
	for(i = 0; i < myArr.length; i++ ) {
		if (typeof myArr[i] !== "number"){ //comprueba que es un número
			throw new Error ("alguno de los operadores NO es numérico, por favor arreglalo!!");
		}
	}

	//	*APLICACIÓN DEL MÉTODO reduce*	//
	var arrayResultado =[];
    myArr.reduce(function(valorPrevio, valorActual, indice, array) {
        // console.log(valorPrevio, valorActual) 	// comprueba el funcionamiento del reduce() imprimiendo las parejas
        											// de valores a los que se le aplicara la función

    	if ((indice%2) !==0) {   //	si el indice es impar aplica el push
        arrayResultado.push(funcion(valorPrevio, valorActual)); // pushea el resultado de aplicar la función a valorPrevio y valorActual como nuevo elemento de arrayResultado
    	};
        return valorActual;
    });
    return arrayResultado;
    
    if (myArr.length%2 !== 0) {
    	console.log("falto ingresar un operando para obtener el último resultado, si quieres obtenerlo por favor agregalo!!")
    }
}


console.log(obtenerResultados( multiplicar, 1, 2, 3, 4, 2)); // recibe una función y los operando de la misma
console.log(obtenerResultados( dividir, 72, 24, 6, 3, 3, 3)); // recibe una función y los operando de la misma
console.log(obtenerResultados( sumar, 1, 2, 3, 4, 5)); // recibe una función y los operando de la misma
console.log(obtenerResultados( restar, 5, 4, 3, 2, 1)); // recibe una función y los operando de la misma

// var myArr=[3,4,6,5];
// var arrEnPares = [];
// var arrFinal = [];
// var i=0;
// var arrFinal = [myArr[i], myArr[i+1]]; // devuelve: [undefined,undefined]
// arrEnPares.push(myArr[i], myArr[i+1]); // devuelve un array arrEnPares con el 1° y 2° elementos de myArr
// // arrFinal=[arrEnPares]; // devuelve: [Array[2]]
// // for(i = 0; i < myArr.length; i++ ){
// 	// arrEnPares.push(myArr[i], myArr[i+1]) // devuelve el 1° y 2° elementos del array
// // }

// // arrFinal.push(arrEnPares); // devuelve: [Array[2]]
// // arrFinal.push(arrEnPares.push(myArr[i], myArr[i+1])) // devuelve: [2] que es igual a arrEnPares.length


// // arrEnPares = myArr.slice(0,2); //devuelve un array arrEnPares con el 1° y 2° elementos de myArr

// function obtenerResultados(funcion, arr){
// 	var myArr= Array.prototype.slice.call(arguments, 1);
// 	// console.log(myArr);
// }
// var Final = [];
// 	 arrFinal.reduce(function(valorPrevio, valorActual, indice, array) {
//     console.log(valorPrevio, valorActual) // comprueba el funcionamiento del reduce()
//     Final.push(funcion(valorPrevio, valorActual));
//     return valorActual;
//     });; // devuelve: [Array[2]]

// // arrEnPares;  //tieneque ser igual a un array con el 1° y 2° elementos de myArr
// // arrFinal;    //tiene que ser igual a un array que contenga a aarEnPares
// console.log(myArr);
// console.log(arrEnPares);
// console.log(Final);


