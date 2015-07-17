#TP5 - JS funciones

Realizar una función que reciba una función operación e infinitos operandos, y que devuelva un
array con los resultados de haber aplicado la operación en todos los argumentos, operando
siempre con el argumento actual y el siguiente. Esta función también tiene que validar los
parámetros y lanzar un error en caso que estos no cumplan con las condiciones pedidas.
El ejercicio debe realizarse utilizando el método de array: reduce.

    Ejemplo:
    > obtenerResultados(multiplicar, 2, 5, 3, 3, 2, 4)
    < [10, 9, 8]

**En lugar de eso mi función obtenerResultados no aplica multiplicar a cada pareja, sino que lo hace elemento por elemento desde el 1ero a la izaquierda hacia el siguiente a la derecha.**

    Ejemplo:
    > obtenerResultados(multiplicar, 2, 5, 3, 3, 2, 4)
    < [10, 15, 9, 6, 8]
