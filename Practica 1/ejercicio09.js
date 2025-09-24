//9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.

const Promesa=new Promise((resolve)=>{

    setTimeout(()=>{
      resolve("Hola, se cumplio la promesa en 3 segundos");
    },3000);
})

const flecha=async()=>{
    try{
        const exito=await Promesa;
        console.log(exito);
    }catch(error){
        console.log(error)
    }
}
flecha();
