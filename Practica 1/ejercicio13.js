//13. Proporcione un ejemplo concreto donde el anidamiento de promesas 
// se puede reescribir mejor con async/await haciendo el 
// código más limpio y mantenible.

function promesa1(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("promesa1 completada");
            resolve(4);
        },2000);
    });
}

function promesa2(x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("promesa2 completada",x);
            resolve(x+1);
        },2000);
    });
}

function promesa3(x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("promesa3 completada",x);
            resolve(x+2);
        },2000);
    });
}
//anidando promesas
/*
promesa1().then((res1) => {
    return promesa2(res1).then((res2) => {
        return promesa3(res2).then((res3) => {
        console.log("Todas las promesa con valor final:", res3);
        });
    });
  });
*/

//usando async/await
async function ejecutarPromesas(x){
    const res1=await promesa1();
    const res2=await promesa2(res1);
    const res3=await promesa3(res2);
    console.log("Todas las promesas con valor final:",res3);
}

ejecutarPromesas();
