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

		for (let i = 0; i < this.longitud; i++) {
			if (this.contraseña.charAt(i) >= 'A' && this.contraseña.charAt(i) <= 'Z')
				mayusculas++;
			if (this.contraseña.charAt(i) >= 'a' && this.contraseña.charAt(i) <= 'z')
				minusculas++;
			if (this.contraseña.charAt(i) >= '0' && this.contraseña.charAt(i) <= '9')
				numeros++;
		}
		return (mayusculas > 2 && minusculas > 1 && numeros > 3)
				? true : false;
	}   

    generarPassword(){
        let contraseña = "";
		for (let i = 0; i < this.longitud; i++) {

			switch ((int) (Math.random() * 3)) {
			case 0:
				contraseña += (char) (Math.random() * 26 + 'A');
				break;
			case 1:
				contraseña += (char) (Math.random() * 26 + 'a');
				break;
			case 2:
				contraseña += (char) (Math.random() * 10 + '0');
				break;
			}
		}

		return contraseña;
    }
 

}

let entrada = new Password(8, "ASDcv123");
let entrada1 = new Password(9, "ASDv1234");

// console.log(bul)

console.log(entrada._contraseña)
console.log(entrada._longitud)
console.log(entrada.setLongitud())
console.log(entrada.getLongitud())
console.log(entrada.getContraseña())
console.log(entrada.esFuerte())
console.log(entrada.generarPassword())


console.log(entrada1._contraseña)
console.log(entrada1._longitud)
console.log(entrada1.esFuerte())

// console.log(entrada.getContraseña())

  

