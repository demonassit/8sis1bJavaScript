/*
vamos a crear una funcion para validar la entrada de solo numeros
apartir de una expresion regular con el uso de un evento de teclado

*/


function validarn(e) {
    
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9]\d ./;

    var tec = String.fromCharCode(teclado);

    return patron.test(tec);
}

//funcion del calculo de interes

function interes() {
    
    var valor = document.formulario.cantidad.value;
    //hay que parsear, todo viene como cadena
    var cantidad = parseInt(valor);

    var interes = cantidad*0.02;

    var total = cantidad+interes;

    //imprimos en el html

    document.formulario.sueldoti.value="$"+total;
}

//funcion borrar

function borrar() {
    
    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";
}