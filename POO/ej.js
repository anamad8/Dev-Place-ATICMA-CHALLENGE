let mayusculas = 0;
let minusculas = 0;
let numeros = 0;
let longitud= 8;
let contraseña = "ASSSS121"

		for (let i = 0; i < longitud; i++) {
			if (contraseña.charAt(i) >= 'A' && contraseña.charAt(i) <= 'Z')
				mayusculas++;
			if (contraseña.charAt(i) >= 'a' && contraseña.charAt(i) <= 'z')
				minusculas++;
			if (contraseña.charAt(i) >= '0' && contraseña.charAt(i) <= '9')
				numeros++;
		}
		console.log((mayusculas >= 2 && minusculas >= 1 && numeros >= 3)
				? true : false)
