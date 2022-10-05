/* Construir una función que sume los elementos de una lista de enteros recursivamente */

// Creo una funcion donde va a sumar los numeros que le pase de mi lista
function sumaArray(arrayNum) {
    
    // Si el tamaño de mi lista es igual a 1 va retornar ese valor, sino lo va ir sumando
    if (arrayNum.length == 1) {
        return arrayNum[0];
    } else {
        return arrayNum.pop(0) + sumaArray(arrayNum);
    }
    
}

let arrayNum = [1,2,3,4,5,6];

console.log(sumaArray(arrayNum))


