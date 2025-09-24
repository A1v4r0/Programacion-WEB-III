//14. Proporcione un ejemplo para convertir una promesa en un callback.

//funcion con promesa
function obtenerDato(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Dato recibido");
        },2000);
    });
}
//convirtiendo promesa a callback
function obtenerDatoConCallback(callback){
    obtenerDato().then((resultado)=>{
        callback(null,resultado);
    }).catch((error)=>{
        callback(error);
    });
}

//uso del callback
obtenerDatoConCallback(function(exito,error){
    if(error){
        console.error("Error: ",error);
    }else{
        console.log("Exito: ",exito);
    }
});
