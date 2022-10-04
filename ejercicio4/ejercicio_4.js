// creo la variables entre el 1 y 1000
let inicio = 1;
let fin = 1000;

// genero números enteros entre ese rango
let enteroAleatoria = inicio * Math.floor(Math.random() * fin);

// que se visualice el numero asi el usuario tiene pistas del número
function btnAleatoria() {
    console.log(enteroAleatoria)
    document.getElementById("num").innerHTML =  enteroAleatoria

    //Para borar el numero aleatorio
     let tiempo = 1;
     let espera = function() {
        tiempo++;
        console.log(tiempo)
        
        if (tiempo === 3) {
            clearInterval(intervalo);
            document.getElementById("num").innerHTML=  ""
        }
        
    }

    let intervalo =  setInterval(espera, 1000)
    
    
}


let  numUser = document.getElementById("adivinar")

//  va a mostar si el número es mayor o menor, o si adivina el número, va a volver a comenzar 
function comparar() {
    let pasarNum = parseInt(numUser.value)
    while (enteroAleatoria != pasarNum) {
        if (enteroAleatoria < pasarNum) {
            console.log("menor")
            document.getElementById("mayorMenor").innerHTML = "Menor"
            break;
        }
        if (enteroAleatoria > pasarNum) {
            console.log("mayor")
            document.getElementById("mayorMenor").innerHTML = "Mayor"
            break;
        }
       
    }
    if (enteroAleatoria === pasarNum) {
        console.log("adivinaste")
        alert("Adivinaste!!! el número era " + enteroAleatoria )
        location.reload()
        
    }
    
}

