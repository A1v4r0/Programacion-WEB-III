//11. Proporcione un ejemplo concreto de encadenamiento de promesas.

function primeraPromesa(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(5);
        },2000);
    });
}
function segundaPromesa(a){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(a*3);
        },2000);
    });
}

//encadenamiento de promesas
primeraPromesa().then(resultado=>{
    console.log("Primera promesa:",resultado); 
    return segundaPromesa(resultado);
}).then(resultadoFinal=>{
    console.log("Segunda promesa:",resultadoFinal); 
}).catch(error=>{
    console.log("Error:",error);
});
