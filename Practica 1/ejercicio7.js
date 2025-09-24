//7. Almacenar el resto de los elementos de un arreglo 
//  sin tomar en cuenta los dos primeros elementos de un arreglo,
//  mediante desestructuración.

let array=[1,"hola",37,5];

let [a,b,...resto]=array;

console.log(resto);