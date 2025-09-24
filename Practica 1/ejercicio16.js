//16. Proporcione un ejemplo para migrar una función con promesas a async/await.

//funcion con promesa
function obtenerNumero(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(42);
        },2000);
    });
}

obtenerNumero().then((numero)=>{
    console.log("Con then:",numero);
});

//misma funcion con async y await
async function mostrarNumero(){
    const numero=await obtenerNumero();
    console.log("Con async y await:",numero);
}

mostrarNumero();
