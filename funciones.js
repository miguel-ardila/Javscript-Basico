// hay 2 tipos de fucniones en JS Declarativas y de Expresión

// Declarativas
function miFuncion() {
    return 3;
}
miFuncion(); //llamado de la funcion

//ejemplo de funcion declarativa
function saludar (nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("amy"); //llamado de la funcion


// Expresión
var miFuncion = function(a, b) { //(a, b) son los parametros que recibe la funcion
    return a + b;
}
miFuncion(); //llamado de la funcion

//ejemplo de funcion expresiva
var nombre = function(nombre) {
    console.log(`Hola ${nombre}`);
}
nombre("amy"); //llamado de la funcion

//Diferencias: A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
//Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
