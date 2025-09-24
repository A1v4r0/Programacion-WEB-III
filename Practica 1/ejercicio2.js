/*2. Crear una función que invierta el orden de las palabras en una frase.

let cad = miFuncion(“abcd”)
console.log(obj) // dcba
*/

function miFuncion(cadena){
    let invertir="";
    for(let i=cadena.length-1;i>=0;i--){
        invertir=invertir+cadena[i];
    }
    return invertir;
}
console.log("cadena original: abcd");
const cad = miFuncion("abcd");

console.log(cad);