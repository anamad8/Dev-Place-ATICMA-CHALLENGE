// Funcion donde captura la contraseña
function guardar() {
    // let pass = document.querySelector('input').value
    let pass = document.getElementById('pass').value
    // console.log(pass)
    alert("Tu contraseña es: " + pass + " \n Recorda tu contraseña")   
    
    let ocultar = document.getElementById("oculmot").classList.add('mostrar')
    
}

function igualar() {
    let pass2 = document.getElementById('pass2').value
       
        if (pass.value === pass2){
            alert("Feliciraciones, recorda tu contraseña")
            location.reload()
        }

        if(pass.value != pass2){
            alert("Ingresa tu contraseña correcta")
             let ciclo = 0
            while (ciclo < 3) {
                if(pass.value === pass2){
                    ciclo = 3;
                    alert("Feliciraciones, recorda tu contraseña")
                    location.reload()
                }
                if(pass.value != pass2){
                    ciclo = 2
                    prompt("Intento " + ciclo + " : Ingresa tu contraseña correcta intemto ")
                    ciclo = 3
                    prompt("Intento " + ciclo + " : Ingresa tu contraseña correcta intemto ")
                    ciclo = 3
                    alert("Tenes que ejercitar tu memori") 
                    location.reload()
                }
                
            }

        }
    
    
    
}


