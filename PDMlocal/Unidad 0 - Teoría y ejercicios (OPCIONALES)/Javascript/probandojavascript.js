var global1 = "Variable Global 1";

function mostrarMensaje() {
    var local1 = "Variable local 1";
    global1 = "Variable Global 2";
    console.log( global1 );  // mostrará "Variable Global 1"
}
mostrarMensaje();
//console.log(local1);  // error, no existe la variable "local1"
console.log(global1); // mostrará "Variable Global 2"