/*

javascript es un lenguaje de programacion que maneja diferentes paradigmas de programacion
entre ellos tenemos:

POO
P Orientada Funciones (programacion funcional)

P Orientada a Eventos 

P Orientada a Componentes

POO

Se maneja el DOM (la interfaz del documento) nos va a servir para manipular 
toda la interfaz de la pagina web, cambiando su comportamiento, estilos, eventos, 
funciones, etc para la navegacion o la operacion del usuario 

PF

Maneja el DOM para la creacion de funciones especificas a traves de promesas, 
callbacks [son funciones de programacion que mandan a llamar a otras funciones ], rollback [
    funciones recursivas dentro de funciones] todas las funciones nos deben de regresar algun valor.

Cada funcion va a realizar una operacion del dom o dentro del dom, y esto facilita 
dentro de la programacion ya que se crean metodos especificos para especializar operaciones.

Los tipos de valores que se pueden retornar son: variables, cadenas, funciones, booleanos, entre otros
]


P O E (android, ionic creacion de apps moviles)

Se manejan componentes a partir de secuencias o eventos, (pueden ser pantallas tactiles, botones,
    apis,  cualquier otro tipo de llamada) las cuales nos van a ayudar a distinguir el tipo
    de proceso, respuesta, tiempo de operacion, y otros detalles que se encuentran en la app
    o navegador o dispositivo que realizo la peticion, mezcla los paradigmas POO y PF

POC

Utiliza componentes que sirven para la estandalizacion y reutilizacion de codigo, establece, 
reglas, comportamiento, funciones, las operaciones, metodos, para realizar una funcion especifica.


*/ 

//POO

function validar(formulario){

    //function nombre_funcion(argumentos)
    // se pueden utilizar, sentencias de control, bucles, condionales, herencia, polimorfismo,
    //sobrecarga, encapsulamiento, etc

    if(formulario.nombre.value.length < 5){

        alert("Escriba por lo menos 5 caracteres en el campo nombre");
        //posicionar el puntero donde ocurrio el error
        formulario.nombre.focus();
        return false;
    }

    /*
    vamos a crear el fragmento de codigo para verificar que dentro del campo
    de nombre solo se ingresen letras
    */

    var checkStr = formulario.nombre.value; //obtener el valor de nombre

    //definir lo que es correcto para esta validacion

    var checkOK = "qwertyuiopasdfghjklñzxcvbnm"+ "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    
    //variable para devolver si es v o f el valor
    var allValid = true;

    for(i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escriba solo letras en el campo nombre");
        formulario.nombre.value;
        return false;
    }
    

    /*
    funcion para validar unicamente numeros en el campo edad
    */

   var checkStr = formulario.edad.value; //obtener el valor de edad

   //definir lo que es correcto para esta validacion

   var checkOK = "1234567890";
   
   //variable para devolver si es v o f el valor
   var allValid = true;

   for(i = 0; i < checkStr.length; i++){
       var ch = checkStr.charAt(i);
       for(j = 0; j < checkOK.length; j++)
       if(ch == checkOK.charAt(j))
           break;
       if(j == checkOK.length){
           allValid = false;
           break;
       }
   }

   if(!allValid){
       alert("Escriba solo numeros en el campo de edad");
       formulario.edad.value;
       return false;
   }


   /*
   una funcion que se encargue de validar el correo electronico a
   traves de una expresion regular
   xxxxx@xxxx.xxx     xxxx.xxxx@xxxxx.xxxx.xxx
   formato de cadena ya sea de salida o de entrada
   */

   var txt = formulario.email.value;

   var b =  /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

   alert("Email "+ (b.test(txt)?"":"no")+ "valido");

   return b.test(txt);
}