//ejemplo de hoisting

console.log(nombre);
var nombre = "Miguel";

//ejemplo de hoisting con funciones
saludar("Miguel");
function saludar(nombre) {
    console.log("Hola " + nombre);
}
