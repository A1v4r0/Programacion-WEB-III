//15. Proporcione un ejemplo para convertir un callback en una promesa.

//funcion que usa callback 
function sumar(a,b,callback){
    setTimeout(()=>{
        if(typeof a!=="number" || typeof b!=="number"){
            callback("Error: ambos parámetros deben ser numeros");
        }else{
            callback(null,a+b);
        }
    },2000);
}

//convierte el callback a promesa
function sumarPromesa(a,b){
    return new Promise((resolve,reject)=>{
        sumar(a,b,(error,resultado)=>{
            if(error){
                reject(error);
            } else{
                resolve(resultado);
            }
        });
    });
}

//uso con promesa
sumarPromesa(5,3).then((resultado)=>{
    console.log("Resultado: ",resultado);
}).catch((error)=>{
    console.error("Error:",error);
});
