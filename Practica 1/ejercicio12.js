//12. Proporcione un ejemplo concreto donde el anidamiento de callbacks 
// se puede reescribir mejor con async/await 
// haciendo el código más limpio y mantenible.

function callback1(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("callback1 completada");
            resolve();
        },2000);
    });
}
function callback2(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("callback2 completada");
            resolve();
        },2000);
    });
}

function callback3(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("callback3 completada");
            resolve();
        },2000);
    });
}


//anidamiento de callbacks
/*
callback1(() => {
  callback2(() => {
    callback3(() => {
      console.log("Todos los callbacks completados");
    });
  });
});*/

//usando async/await
async function ejecutarCallbacks(){
    await callback1();
    await callback2();
    await callback3();
    console.log("Todos los callbacks completados");
}

ejecutarCallbacks();
