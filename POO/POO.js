class Password {
    
    constructor(longitud, contraseña){
        this._longitud = longitud;
        this._contraseña = contraseña;
        
    }

    Password() {
		this.longitud = 8;
		this.contraseña = generarPassword();
	}

    setLongitud(longitud) {

		this.longitud = longitud;

	}

    getLongitud() {
		return this.longitud;

	}

    getContraseña() {
		return this.contraseña;
	}


    esFuerte() {
		let mayusculas = 0;
        let minusculas = 0;
        let numeros = 0;

		// console.log(this._longitud)

		for (let i = 0; i < this._longitud; i++) {
				mayusculas++;
			if (this._contraseña.charAt(i) >= 'a' && this._contraseña.charAt(i) <= 'z')
				minusculas++;
			if (this._contraseña.charAt(i) >= '0' && this._contraseña.charAt(i) <= '9')
				numeros++;
		}
		return (mayusculas >= 2 && minusculas >= 1 && numeros >= 3)
				? true : false;
	}   

    generarPassword(){
        let caracteres = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM123456789"
		let tam = 8;
		let pass = "";

		for (let i = 0; i <tam; i++){
			let ramd = Math.floor(Math.random()*caracteres.length);
			pass += caracteres.substring(ramd, ramd +1);
		}

		return pass;
	}	
 

}

let entrada = new Password(8, "ASDcv123");
let entrada2 = new Password(6, "123456");


console.log("Tu contraseña es: " + entrada._contraseña + " es fuerte: "+ entrada.esFuerte())
console.log("Tu contraseña es: " + entrada2._contraseña + " es fuerte: "+ entrada2.esFuerte())




  

