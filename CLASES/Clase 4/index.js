//PRIMER EJERCICIO
/*var numero = Number(prompt ("ingresa un número"));
if (numero%2===0){
    alert("El número "+numero+" es par!!");
}
else{
    alert("El número "+numero+" es impar!!");
}*/

//SEGUNDA OPCION DEL PRIMER EJERCICIO
/*var parImparMensaje = numero % 2 === 0? "par" : "impar";
alert("El número "+numero+" es "+ parImparMensaje+"!!");*/

//TEERCER EJERCICIO
/*var i = 0;
while (i<10){
	console.log(i);
	i++;
}*/

//CUARTO EJERCICIO
/*var numero = 0;
while (numero<1001){
	var parImpar = numero % 2 === 0? "par" : "impar";
	console.log("El número "+ numero +" es "+ parImpar+"!!");
	numero++;
}*/

//EJEMPLO DECRECIENTE DESDE EL promp
var numero = Number(prompt ("hasta que número deseas saber"));
while (numero >= 0){
	var parImpar = numero % 2 === 0? "par" : "impar";
	console.log("El número "+ numero +" es "+ parImpar+"!!");
	numero--;
}