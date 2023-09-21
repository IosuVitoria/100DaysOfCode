const generarPassword = (longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) => {
    //Genero la tanda de caracteres con los que voy a trabajar. Genero también el hueco en memoria para la contraseña que mostrare.
    let caracteres = '';
    let password = '';
    
    //En un hipotético frontend selecciono los elementos que quiero incluir en la tanda de caracteres.
    if (incluirMayusculas) {
      caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    if (incluirNumeros) {
      caracteres += '0123456789';
    }
  
    if (incluirSimbolos) {
      caracteres += '!@#$%^&*()_+[]{}|;:,.<>?';
    }
  
    caracteres += 'abcdefghijklmnopqrstuvwxyz'; 
    
    //Recorro tantas veces como sea requerido por el usuario.
    for (let i = 0; i < longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      password += caracteres[randomIndex];
    }
  
    return password;
}
  

const longitud = 22;
const incluirMayusculas = true;
const incluirNumeros = true;
const incluirSimbolos = false;
  
const contraseniaGenerada = generarPassword(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos);
console.log('Contraseña generada:', contraseniaGenerada);



// Solución Xavi


// const generarContrasenia = (long, mayus, nums, symbol) => {
//     let letters = "abcdefghijklmnopqrstuvwxyz";
//     const lettersMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";
//     const symbols = "!?$%&()-¡¿";

//     let result = "";

//     if(mayus) {
//         letters = letters.concat(lettersMayus);
//     }
//     if(nums) {
//         letters = letters.concat(numbers);
//     }
//     if(symbol) {
//         letters = letters.concat(symbols);
//     }

//     for (let i = 0; i < long; i++) {
//         result += letters.charAt(Math.floor(Math.random().letters.length));
//     }

//     return result;
// }

// console.log(generarContrasenia(11, false, true, true));