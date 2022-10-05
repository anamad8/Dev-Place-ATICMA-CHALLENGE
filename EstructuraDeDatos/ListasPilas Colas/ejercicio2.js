/*Escribir una función Reemplazar que tenga como argumentos una pila con tipo de elemento
    int y dos valores int: nuevo y viejo de forma que si el segundo valor aparece en algún lugar de
    la pila,sea reemplazado por el segundo.
*/
    // Creo una lista
    let colores = ["blanco", "negreo", "rojo", "verde"]
    console.log(colores)

    // Con este metodo remplazo el valor que deseo 
    colores.splice(colores.indexOf("rojo"), 1, "azul")
    console.log(colores)

