//8. Realizar un código para ejecutar una función callback después 2 segundos.

function miFuncion(callback){
    setTimeout(function(){
        callback();
    }, 2000); 
}

miFuncion(function(){
  console.log("Hola soy Alvaro");
});
