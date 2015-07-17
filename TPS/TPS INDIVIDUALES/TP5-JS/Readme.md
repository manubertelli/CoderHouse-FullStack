#TP5 - JS funciones

Realizar una función que reciba una función operación e infinitos operandos, y que devuelva un
array con los resultados de haber aplicado la operación en todos los argumentos, operando
siempre con el argumento actual y el siguiente. Esta función también tiene que validar los
parámetros y lanzar un error en caso que estos no cumplan con las condiciones pedidas.
El ejercicio debe realizarse utilizando el método de array: reduce.

    Ejemplo:
    > obtenerResultados(multiplicar, 2, 5, 3, 3, 2, 4)
    < [10, 9, 8]

<strike>**En lugar de eso mi función obtenerResultados no aplica multiplicar a cada pareja, sino que lo hace elemento por elemento desde el 1ero a la izaquierda hacia el siguiente a la derecha.**

    Ejemplo:
    > obtenerResultados(multiplicar, 2, 5, 3, 3, 2, 4)
    < [10, 15, 9, 6, 8]
</strike>

**Problema resuelto!! Además le tiene la opcione de sumar, restar, dividir y multiplicar.**

    Ejemplo:
    > obtenerResultados(sumar, 2, 5, 3, 3, 2, 4)
    < [7, 6, 6]

	> obtenerResultados(restar, 6, 5, 3, 2, 7, 1)
    < [1, 1, 6]

	> obtenerResultados(multiplicar, 2, 5, 3, 3, 2, 4)
    < [10, 9, 8]

	> obtenerResultados(dividir, 8, 2, 3, 3, 4, 2)
    < [4, 1, 2]