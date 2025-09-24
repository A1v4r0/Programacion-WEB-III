/*5. Crear una función que determine si una cadena es palíndromo 
(se lee igual al derecho y al revés).

let band = miFuncion(“oruro”)
console.log(band) // true
let band = miFuncion(“hola”)
console.log(band) // false  */

function miFuncion(cadena){
    let longitud=cadena.length;
    let mitad;

    if(longitud%2==0){
        mitad=longitud/2;
    }else{
        mitad=(longitud - 1)/2;
    }

    for(let i=0;i<mitad;i++){
        if(cadena[i] !== cadena[longitud - 1 - i]){
            return false;
        }
    }
    return true;
}
console.log("'oruro' es palindromo?");
let band=miFuncion("oruro");
console.log(band); 
console.log("'hola' es palindromo?");
band=miFuncion("hola");
console.log(band); 

