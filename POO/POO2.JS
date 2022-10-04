// class Persona {

//     constructor(nombre, edad){
//         this._nombre = nombre;
//         this._edad = edad
//     }

//     saludar(){
//         console.log("Hola soy " + this._nombre + " tengo " + this._edad + " años");
//     }
// }

// let objetoPersona =new Persona ("anabel" , 29);

// objetoPersona.saludar();

// // ----------------------------------------------------------

// class Password {

//     constructor(longitud, contraseña){
//         this._longitud = longitud;
//         this._contraseña = contraseña;
//     }

//     constructor(){
//         this._longitud = 8

//     }

//     setLongitud(longitud) {

// 		this.longitud = longitud;

// 	}

//     setContraseña(contraseña){

//         this.contraseña = contraseña;
//     }

//     getLongitud(){

//         return this.longitud
//     }

//     getCotraseña(){

//         return this.contraseña
//     }

//     // esFuerte(): devuelve un booleano si es fuerte o no, para que sea
//     // fuerte debe tener más de 2 mayúsculas, más de 1 minúscula y más de
//     // 3 números.

//     esFuerte(){

//          for (let i = 0; i < this.contraseña.length; i++) {
            
            
//          }

//     }
// }

// let entrada = new Password (8,"123Abc48");

let contraseña = "123ASDbn";
		for (let i = 0; i < this.longitud; i++) {

            switch (Math.random() * 3) {
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
            
			// switch ((int) (Math.random() * 3)) {
			// case 0:
			// 	contraseña += (char) (Math.random() * 26 + 'A');
			// 	break;
			// case 1:
			// 	contraseña += (char) (Math.random() * 26 + 'a');
			// 	break;
			// case 2:
			// 	contraseña += (char) (Math.random() * 10 + '0');
			// 	break;
			// }
        }
        console.log(Math.random() * 3)