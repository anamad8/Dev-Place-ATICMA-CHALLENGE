// capturo los valores de los input
let valor = document.getElementById('valor')
let horaXmes = document.getElementById('horaXmes')
let nombre =  document.getElementById('nombre')
let antiguedad = document.getElementById('antiguedad')

// Para guiarme: Si trabajo 8 horas X 5 días a la semana son 40 horas, 40 horas por 4 semanas son 160 horas al mes total: $8000

// Caluclar las horas trabajadas
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", respuesta);
    
function respuesta() {
    let multiplicar = valor.value * horaXmes.value;

    // si tengo menos de 10 años, no me va a sumar e la cantidad de años trabajados multiplicados por $30
    if (antiguedad.value <= 9 ) {
        console.log(multiplicar)
        document.getElementById("mostar").innerHTML= `Nombre:${nombre.value} <br> Antiguedad: ${antiguedad.value} años  <br> Total a cobrar: $${multiplicar}`;
    }else{
        let result = antiguedad.value * 30 
        let sumaTotal = result + multiplicar
        document.getElementById("mostar").innerHTML= `Nombre:${nombre.value} <br> Antiguedad: ${antiguedad.value} años <br> Total a cobrar: $${sumaTotal}`;
    }
    

}






