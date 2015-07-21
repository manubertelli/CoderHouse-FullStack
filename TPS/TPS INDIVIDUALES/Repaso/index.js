//////////////////
// 	  strings	//
//////////////////

// *Ejercicio 1* //
// Hacer una función que reciba dos parámetros del tipo string.
//La función deberá retornar la cantidad de apariciones que tiene el segundo parámetro en el primer parámetro.
//Ejemplo:
// console.log(contarOcurrencias("sarasa", "a")); // imprime 3
// console.log(contarOcurrencias("sarasa", "z")); // imprime 0

// recibir dos parametros mediante una función
// recorrer el primer parámetro comparandolo con el segundo
// devolver la cantidad de veces que aparece el segundo parameto dentro del primero 



// function contarOcurrencias(param1, param2){
// 	if (String(param1) !== param1 || String(param2) !== (param2)) {	// filtro que comprueba que ambos parámetros sean del tipo string
// 		throw new Error("Alguno de los parámetros ingresados no es un 'string'!!!");
// 	}
// 	var cantApariciones = 0;
// 	for (var i = 0; i < param1.length; i++) {
// 		if (param1[i] === param2[0]){
// 			cantApariciones++;
// 		}	
// 	};
// 	return cantApariciones;
// }
// console.log(contarOcurrencias("sarasa", 3));	//compruba que funcione el filtro
// console.log(contarOcurrencias("sarasa", "a"));




// *Ejercicio 2* //
// Hacer una función que reciba una string y retorne la misma string pero agregando después de cada caracter su índice correspondiente.
// Es decir, que retorne la misma string transformada de la siguiente forma:
// Ejemplo:
// console.log(agregarIndice("kawabonga")); // imprime "k0w1a2b3o4n5g6a7"
// console.log(agregarIndice("casa")); // imprime "c0a1s2a3"

// recibir un parámetro string mediante una función
// recorrer el string obtenindo el indice de cada elemento del string
// devolver un string formado por cada elemento junto a su indice



// function agregarIndice(str){
// 	if (String(str) !== str) {	// filtro que comprueba que el parámetro es del tipo string
// 		throw new Error("El parámetro ingresado no es un 'string'!!!");
// 	}
// 	var newStr = "";
// 	for (var i = 0; i < str.length; i++) {		
// 		newStr += str[i] + i;
// 	};
// 	return newStr;
// }
// console.log(agregarIndice(52651239));	// comprueba que el filtro fuciona
// console.log(agregarIndice("manu"));




//////////////////
// 	  Arrays	//
////////////////// 

// *Ejercicio 1* //
// Hacer una función que reciba un array de strings y retorne una string igual a la concatenación de todos sus elementos.
//Ejemplo:
// console.log(concatenar(["s","a","r","a","s","a"])); // imprime "sarasa"
// console.log(concatenar(["h","o","l","a"])); // imprime "hola"

// recibir un array con elementos string mediante una función
// recorrer el array e ir sumando todos los elementos de este array
// devolver un string con la acumulación de los strings elementos del array



// function concatenar(myArr){
// 	if (Array.isArray(myArr) == false) {	// filtro que comprueba que el parámetro ingresado sea un array
// 		throw new Error("El parámetro ingresado NO es un 'array'!!!");
// 	};
// 	myArr.forEach(function(curEl){		// filtro que comprueba que todos los elementos del array sean del tipo string
// 		if (String(curEl) !== curEl) {
// 			throw new Error("Alguno de los elementos ingresados en el array no es un 'string'!!!");
// 		}
// 	});
// 	var myStr = "";
// 	for (var i = 0; i < myArr.length; i++) {
// 		myStr += myArr[i];
// 	};
// 	return myStr;
// }
// console.log(concatenar({ a: "f", b: true}));	// comprueba que el filtro del parámetro fuciona
// console.log(concatenar(["m","a","n","u",3,"l"]));	// comprueba que el filtro del array fuciona
// console.log(concatenar(["m","a","n","u","e","l"]));




// *Ejercicio 2* //
// Hacer una función que reciba un array y retorne otro array con la misma cantidad de elementos,
// pero qué cada elemento sea el tipo de dato del array original.
// Ejemplo:
// console.log(transformarATipos([1,"casa", {}])); // imprime ["number", "string", "object"]
// console.log(transformarATipos([function(){}, true]); // imprime ["function", "boolean"]

// recibir un array mediante una función
// recorrerlo obteniendo el tipo de cada elemento del array
// agregar el tipo de cada elemento del array como elemento de un nuevo array
// devolver ese nuevo array



// function transformarATipos(arr){
// 	if (Array.isArray(arr) == false) {	// filtro que comprueba que el parámetro ingresado sea un array
// 		throw new Error("El parámetro ingresado NO es un 'array'!!!");
// 	};
// 	var newArr =[];
// 	for (var i = 0; i < arr.length; i++) {
// 		newArr.push(arr[i]);
// 	};
// 	return newArr;
// }
// console.log(transformarATipos({ a: "f", b: true}));	// comprueba que el filtro fuciona
// console.log(transformarATipos(["manu", 10, {}]));




//////////////////
// 	  Objetos	//
//////////////////

// *Ejercicio 1* //
// Hacer una función que reciba un objeto y retorne un array con todos los valores de sus propiedades cómo elementos. 
// Ejemplo:
// console.log(aArrayDeValores({ a: 1, b: "z", c: 3})); // imprime [1, "z",3]
// console.log(aArrayDeValores({ a: "f", b: true})); // imprime ["f", true]

// recibir un objeto mediante una función
// crear un array con sus keys como elmentos
// recorrer este array obteniendo el valor de cada key
// ingresar estos valores como elementos de un nuevo array
// devolver el nuevo array



// function aArrayDeValores(obj){
// 	var esObj = Object.prototype.toString.call(obj);
// 	if (esObj !== "[object Object]") {				// filtro que comprueba que el parámetro ingresado sea un objeto
// 		throw new Error("El parámetro ingresado NO es un 'objeto'");
// 	};
// 	var myKeys = Object.keys(obj);
// 	var newArr =[];
// 	myKeys.forEach(function(curEl){	// recorre cada elemento del array
// 		newArr.push(obj[curEl]);	// pushea el valor del objeto en la key del elemento del arr como elem de newArr
// 	});
// 	return newArr;
// }
// console.log(aArrayDeValores(["manu", 10, {}]));	// comprueba que el filtro fuciona
// console.log(aArrayDeValores({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}));




// *Ejercicio 2* //
// Hacer una función que reciba un objeto el cual posee propiedades con valores de string y
// retorne una string cómo resultado de la concatenación de todos los valores de las propiedades del objeto.
// Ejemplo:
// console.log(concatenarObj({ a: "h", b:"o",c:"l", d:"a"})); // imprime "hola"
// console.log(concatenarObj({ z: "sa", x:"ra", y:"sa"})); // imprime "sarasa"

// recibir un objeto con valores = a strings mediante una función
// crear un array con las keys del objeto recibido
// recorrer este array obteniendo el string valor de cada una de las keys
// acumular la suma de estos string
// devolver el string resultande de esta concatenación total



// function concatenarObj(obj){
// 	var esObj = Object.prototype.toString.call(obj);
// 	if (esObj !== "[object Object]") {					// filtro que comprueba que el parámetro ingresado sea un objeto
// 		throw new Error("El parámetro ingresado NO es un 'objeto'");
// 	};	
// 	for (var i = 0; i < obj.length; i++) {// filtro que comprueba que todos los elementos del array sean del tipo string
// 		if (typeof((Object.getPrototypeOf(obj)))!== "string"){
// 			throw new Error("Alguno de los elementos ingresados en el array NO es un 'string'!!!")
		
// 		}
// 	};
// 	var myKeys = Object.keys(obj);
// 	var str = "";
// 	myKeys.forEach(function(curEl){	// recorre cada elemento del array
// 				if (typeof(obj[curEl]) !== "string"){	// filtro que comprueba que cada elemento del objeto sea un string
// 			throw new Error("Alguno de los elementos ingresados en el array NO es un 'string'!!!")		
// 		}
// 		str += obj[curEl];			// acumula el valor del objeto en la key del elemento del arr en str concatenandolos
// 	});
// 	return str;
// }
// console.log(concatenarObj(["manu", 10, {}]));	// comprueba que el filtro fuciona
// console.log(concatenarObj({ aa: 0, a: "me ", b:"sa", c:"lió", d:"!!"}));	// comprueba que el filtro fuciona
// console.log(concatenarObj({ a: "me ", b:"sa", c:"lió", d:"!!"}));