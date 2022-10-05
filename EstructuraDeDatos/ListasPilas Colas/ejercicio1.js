/*1- Implementar una función que recibe una lista de enteros L y un número entero n de forma
     que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este
    valor
*/

    // creo la lista determinada
    let listaL = [1,55,2,6,7,22]
    
    //  creo otra variable que sirba para comaparar 
    let n = 6

    // creo un forEach para que compare las variable si cincide ve elminar el elemento del array 
    listaL.forEach((elem) => {
        if (elem == 2 ) {
            let filtrado = listaL.filter((item) => item !== n)
            console.log("Arreglo sin filtrar: " + listaL)
            console.log("Arreglo filtrado: " + filtrado)
        }
    });

  