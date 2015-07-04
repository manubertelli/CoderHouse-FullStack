#JavaScript
##

**Porque nace *JavaScript*?**

Se necesitaba generar páginas dinámicas y reactivas al usuario, no como venía siendo `HTML`.

**Asicronismo**

`JavaSrip` no es asicrónico pero permite generar un contenido asicrónico


    alert("esta bloqueao") 
genera un popup que bloque tooooodo, ahora se dejó de utilizar y se usa un simulador en HTML.

Hoy en día la mayoría de los lenguajes se pueden convertir en JS

Las aplicaciones pueden desarrollarse sólo con `HTML CSS y JS`.

**Por que hoy aprendemos JavaScript y no otro?**

Porque nos permite desarrollar cualquier tipo de aplicación para todos los dispositivos.


`JavaScript` es un lenguaje en si mismo, cada extención o plataforma en la que corre tiene adaptaciones específicas que tienen funcionalidades y metodos específicos. Pero para esto se debe conocer a la perfección JavaScript así que es el lenguaje base de esto.

**bootstrap** es importante aprender a utilizarlo leer info  para poder realizar 
el TP integrador, es mejor flexbox pero bootstrap es neccesario por ser él más utilizados y requerido a la hora de trabajar en el día a día.
    
    getbootstrap.com

**Etiquetas** 

>Es importante saber que JS es key sensitive es decir que distingue entre mayúsculas y minúsculas.
    
    <script type="text/javascript"></script>
con esetá etiqueta podemos incluir `JS` dentro de `HTML` pero sólo se recomienda utilizar de esta manera cuando lo que queremos agregar es un código JS muy corto y no vale la pena incluir un `arcivo.js` para que sean asincrónicos.

Las etiquetas JS se corren según el orden en el que aparecen en el código, es decir que se respeta el orden en el que se escriben.

Por esto si queremos que se aplique el `CSS` en nuestro sitio antes de que se ejecute `JS` debemos si o si escribirlo antes en el código. Si quisieramos hacerlo de manera sincrónica deberiamos colocar las etiquetas `JS` ddebajo de todo en nuestro `<body></body>`

Los bloques de código que se ejecutan son funciones y pueden estar compuestas por muchos `statments`, todos o la gran mayoría finalizan con `;` es decir que es opcional pero también es necesario ya que la maquinaria de `JS` los colocara donde crea que deben ir para ejecutarse y probablemente esto haga que no funcione tal y como nosotros queremos. Estos `statments` cada una dde las líneas que se colocan en `JS`.

Las cadenas de texto se llaman `string` y siempre se colocan entre `""`.

    alert("esta bloqueao", otraFunción) 

dentro de una función se pueden colocar varios `statments` y combinarlos con `funciones`, `scrips`, etc.

La sintaxis correcta es la función, luego entre() van los valores, funcionalidades o strings.

Ej


    nombreFuncion("string", otraFunción, unValor)

Los valores permiten obtener información del usuario y se pueden pedir atravez de la etiqueta `prompt`

sintaxis:


    prompt("ingresa un valor, "este es el valor por default);

>**MDN** es la opción recomendada para sacarnos las dudas sobre que es y como usar los las etiquetas.

**_STRING_**

Los strings van siempre entre *comillas*, pero JS permite utilizar comillas dobles o simples. Lo bueno de esto es que se puede colocar *comillas* dentro del contenido del string. Dentro de `string` se puede colocar el valor que queramos.

Ej:

'La palabra 'hola' se utiliza para saludar' `ok`

"La palabra 'hola' se utiliza para saludar" `ok`

"La palabra "hola" se utiliza para saludar" `X`

"La palabra \"hola\" se utiliza para saludar" `ok`


Para saber de que tipo es cada cosa se utiliza `typeoff`

    Al ingresar:
	>  typeof "blablabla";
    Devuelve:
    <- "string"

La diferencia entre expression y statments. Una expression es el resultado devuelto por un statments, y el statments se devuelve a si mismo. Un truco para ver que es lo que se devuelve es el simbolito de la izquierda

**_NUMBERS_**

Todos los números son flotantes (decimales) por defecto y se coloca directamente el número sin comillas, sino sería un string. Sólo se permite colocar números para esta etiqueta

**_BOOULEANOS_**

Devuelve un valor `true` o `false` estos son los únicos dos valores posibles.

Estos casos siempre deviuelven `false`.

	>  Boolean("")
	<- false

	>  Boolean(0)
	<- false

	>  Boolean(undefined)
	<- false

	>  Boolean(null)
	<- false

	>  Boolean(NaN)
	<- false

**_NULL_**

Es un tipo de dato que representa la ausencia de objects (un tipo de dato) y tiene un sólo valor posible que es `null`. La diferencia entre `null` y un objeto vacío es que al objeto vacío se lo puede rellenar, pero a `null` no.

El typeof en `null` es complejo ya que no devuelve `null`, sino object.

	Al ingresar:
	>  typeof null;
    Devuelve:
    <- "object"

**_UNDEFINED_**

Es un tipo de dato que tiene un sólo valor posible que es `undefined`.


    Los tipos de datos son estos 5, cualquier otro dato es un object.


**VARIABLES**

Una variable nos permite acceder a una posicion de memoria. Las variables pueden ser modificadas y se les puede adjudicar valores distintos.

Es por esto que siempre se recomienda manejar el mismo tipo de datos para cada variable ya que no se tratan de la misma manera todos los datos. Los indicadores son los nombres de las variables, es recomendable que sean representativos y deben utilizarse letras, numeros y guion bajo. Por convención se utilizan las mayusculas o el guión bajo para separar las pabras nombreVariable o nombre_variable

Sintaxis:

    var nombreVariable= 3
    var nombreVariable= "pepe"

En este caso se declara una variable con un valor undefined

    myVar
	var myVar = undefined

La variable es un caso particular de `expression` que devuelve su contenido.

Como declarar variables:

	
	var nombreUsuario="pepe", myVar;
	es lo mismo que:
	var nombreUsuario="pepe";
	var myVar;

Se puede declarar muchas veces la misma variable, pero no es recomendable. Lo mejor es declara todas las variables al inicio y después ir utilizandolas.
    
    typeof var myVar
	da error ya que typeof sólo ve expressions y no statments

Ya que `typeof` mira primero lo que está a la derecha

	>  typeof myVar
	<- "undefined"  

	>  typeof myVar, 3
	<- 3
	porque no está devolviendo typeof 3 que sería "number" sino sólo 3.

	>  typeof myVar, typeof 3
	<- "number" 
	porque hace el del último y es lo mismo que:
	>  typeof (myVar, 3)
	<- "number"

**OPERACIONES**

_**SUMA:**_ es una expression que suma dos de datos que deben tener el mismo tipo.

Todos los tipos de datos tienen una función que se representa con mayúscula:

`String()` va a devolver **siempre** un string.

Ejemplos:

	> String(1)
	<- "1"
.

	> Number(false)
	<- "0"

	> Number(true)
	<- "1"

	> Number(undefined)
	<- "NaN" no es un número

	> Number(null)
	<- "NaN" no es un número
.
	>  typeof NaN
	<- "number"

	>  typeof Number(undefined)
	<- "number"


> los parametros de la funcion son expressions

	>  3 + true
	<- 4
	
Como el primer tipo es un numbre lo que hace es tomarlo como el tipo por default.

	>  false + true
	<- 1
	
Al no tener tipo suma le adjudica number como default.

	>  true + "3"
	<- 13
	
Siempre que haya un string siempre gana el string por lo que convierte todo a string aunque sea NaN.


Siempre que colocamos el signo + adelante convertimos a number

	>  +3
	<- 3

	>  -3
	<- -3


En este caso cuando colocamos el + antes va a convertir a number
	
	>  + "3"
	<- 3
.
**OTRAS OPERACIONES**

	>  6-3
	<- 3
	
	>  6-3
	<- 3
	
	>  3*2
	<- 6

	>  6/3
	<- 2

	negación
	>  ! true
	<- false

	>  Boolean(undefine)
	<- false
	
	>  ! Boolean(undefine)
	<- true
.

	&& corta siempre en el primer false y devuelve ese valor:

	>  true&&0&&true&&false
	<- false
	si ambas son false devuelve la última
	
	|| funciona igual que && pero corta en el primer true.


Igualdad

	diferencia entre == y ===
	>  true==1
	>  true
	convierte ambos al primer tipo

	>  true===1
	>  false
Diferencia

	diferencia entre !== 
	>  true!==0
	>  true
	


Resto

	Da el resto de una división
	>  10%2
	>  0

	>  10%3
	>  1
.
	>  var numero;
	   numero = prompt ("ingresa un numero");
	   numero = Number (numero)
	<- 3

	>  var numero;
	   numero = Number(prompt ("ingresa un numero"));
	<- 3
	
	>  var numero = Number(prompt ("ingresa un numero"));
	<- undefined
	por ser un statments

**STATMENTS if esle**

	if (expr){
		var myVar = 1;
		myOterVar = 2;
	}

	else{
		var myVar = 2;
		myOterVar = 3;
	}
.

	if (true){
		alert("es true");
	}
	abre el popup
	
	if (false){
		alert("es true");
	}
	NO abre el popup
.

	if (typeof lalala==="undefined"){
		alert("no existee!!");
	}
	abre un popup que dice "no existe!!"

	if (lalala){
		alert("no existee!!");
	}
	va a devolver undefined
**SWITCH**

	var color = "rojo";
	switch(color) {
 	case "rojo":
    console.log("El hexa de rojo es: #ff0000");
    break;
 	case "verde":
    console.log("El hexa de verde es: #01df01");
    break;
 	default:
    console.log("No tengo ni la mas palida idea del hexa de: " + color);
    break;
podría haccerse con if.

**OPERADOR TERNARIO**

	var numero = Number(prompt ("ingresa un número"));
	var parImparMensaje = numero % 2 === 0 ? "Par" : "Impar";
	
**BUCLES**

	while (expr) stmt;
	mientras while sea true se ejecuta stmt.
cualquier (expr) que se evalue a `true` se llama trutee, sino es falsee.
.

	var i=0;
	i = i+1;
	i += 1;  (es la verción reducida de la anterior)
	i ++;	(es la verción reducida cuando el valor de incremento sea igual a 1)
.
	>  i=0;
	   i++;
	<- 0
	>  i;
	<- 1
	>  i;
	<- 2
.

	>  i=0;
	   ++1;
	<- 1
	>  i;
	<- 2
	>  i;
	<- 3
	>  i;
	<- 4
**Cuidado con el bucle infinito!!**

    var i = 0;
    while (i<10){
    console.log(i);
    i++;  (en este punto nos aseguramos de que en algún momento se detenga)
	}
**Cuidado con el bucle infinito!!**

    var i = 0;
    do{
    console.log(i);
    i++;
	}
	 while (i<10)

**for**

	for([ini_stmt]; [cond_expre]; [post_expr]) stmt;  (todas sus partes son opcionales)

	ej:
	var = i;
	for(i = 0; i < 10; i++) console.log(i);
	o
	for(i = 0; i < 10; i++) {console.log(i); console.log(i*2)}
	que es igual a:
	for(i = 0; i < 10; i++) {
	console.log(i);
	console.log(i*2);
	}
esta bueno utilizarlo cuando esta asociado a algo que debe ser incrementado o decrementado. Hay que tratar de dejarlo lo más simple posible, si tiene más de una opción es recomendable utilizar un `while`
	
	for(i = 0; i < 10; i++) {
		if (i*2 === 10){
			break;
	}
de esta manera se sale abruptamente del `for` o de `while` o `do while` no es recomendable utilizarlo en estas opciones ya que se puede declarar dentro de estos donde cortar.

	while(i = 0; i < 10; i++) {
		if (i*2 === 10){
			continue;
		}
		console.log(i);
		i++;
	}
esto genera un loop infinito, *CUIDADOOOO!!*


**Funcionalidades**
	
	>  var myVar="este es mi string";
	>  myVar.indexOf("st")
	<- 1


	>  var myVar="este es mi string";
	>  myVar.lastIndexOf("st")
	<- 11

	>  myVar.toUperCase() te pasa todo a MAYUSCULA

	>  myVar.toLowerCase() te pasa todo a MAYUSCULA

	>  myVar.substring(11, 17) desde, hasta y si el 2° es menor invierte el orden.
	<- "string"

	>  myVar.substr(desde [, cuanto]) desde donde y cuantos caracteres.
	<- "string"	

	>  myVar.substr(-3, 2) 
	<- "in"


	

**Tipos de datos inimutables**

	string
	>  "uno"+"dos"+"ters"+"cuatro"
	<- "unodostrescuatro"

Hay datos que pueden cambiar parte del mismo.

Los tipos primitivos de js son todos imputables
Un `string` es una secuencia *ordenada* de caracteres por lo que si quero quedarme con un caracter específico debería indicarlo de la siguiente manera:

	>  myStr = "abc"
	<- "abc"
	>  myStr [1]= "-"
	<- "-"
	pero como son inimutables si colocamos:
	>  myStr
	<- "abc"
	en lugar de "a-b" porque no se puede cambiar el valor de un caracter

**ARRAY**

	>  Array("test","pepe")
	<- ['test','pepe']
	
	>  Array("test")
	<- ['test']

	>  Array(2)
	>- [ , ]
	
	>  Array("test","pepe")
	<- ['test','pepe']	

	>  var arr = ("test","pepe")
	<- ['test','pepe']

	>  var arr = (2)
	<- [2]
	>  arr.length
	<- [1]

	>  var arr = ("pepe")
	<- ['pepe']
	>  arr.length
	<- [4]

	>  arr.push("elem3")

van de 0 a 2 a la 32 ()

Puede modificarse el contenido:

	>  var arr = ['elem1','elem2','elem3']
	>  arr.push("nuevoElem") agrega un nuevo elemento

	>  arr[1]="elem2modif" modifica el valor de arr[1]
	>  arr
	<- ['elem1','elem2modif','elem3']

	>  arr.pop() saca el último elemento
	<- ['elem1','elem2']

	>  arr.shift() saca el primer elemento
	<- ['elem2']

	>  arr.unshift() crea un elemento en el primer lugar
	<- ['elem2','elem2']


	>  arr.indexOf("elem1")
	<- 0
pueden sumarse estos elmentos:

	>  arr.push(10)
	>  arr.push(true)
	>  arr.push(null)
	>  arr.push(undefined)

te devuelve false si el 1ero esta vacio:
	>  1 in arr
	<- true