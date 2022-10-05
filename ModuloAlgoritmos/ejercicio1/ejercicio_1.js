
// Realizo una función si el numero que se ingresa es primo o no
const esPrimo = numero => {
	// Regla para dividir
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

// Con esta funcion puede leer el input y mostrarlo por un alerta
function btn() {

	let num = document.querySelector('input').value;
	alert("El numero " + num + " es primo: " + esPrimo(num))
	
}
