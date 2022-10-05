let num = document.getElementById("num");

let arrayNum = []


function ingresar() {
    
    let numeros = parseInt(num.value);
    // Agrego los numeros al array
    arrayNum.push(numeros);

    console.log(arrayNum);
    
    // busco el mayor
    let numeroMayor = Math.max(...arrayNum);

    // busco el menor
    let numSin1 = (arrayNum.length-1);
    let numeroMenor = Math.min(numSin1);

     // Sumo todos los números
     
     let subtotal =  arrayNum.reduce((a, b) => a + b, 0);
    let total = subtotal + 1;

    // sumo la cantidad
    let cantidad = (arrayNum.length-1);

    while (numeros == "-1") {
        // if (numeroMenor) {
            
        // }
        document.getElementById("mostar").innerHTML = `
        mayor número introducido: ${numeroMayor} <br>
        menor número introducido: ${numeroMenor} <br>
        suma de todos los números: ${total} <br>
        suma de los números: ${cantidad} `
        break;

    }
}
