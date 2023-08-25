//NIVEL PRINCIPIANTE

//Ejercicio 1: Imprimir un mensaje en la consola: Escribe un programa que imprima "¡Hola, mundo!" en la consola del navegador.

// console.log("Primer ejercicio:");
// console.log("Hola, mundo!");

//Ejercicio 2: Suma de dos números: Pide al usuario que ingrese dos números y muestra la suma de los mismos.

// console.log("Segundo ejercicio:");
// let num1 = parseInt(prompt("Introduce el primer número: "));
// let num2 = parseInt(prompt("Introduce el segundo número: "));

// const suma = () => {
//     let resultado = num1+num2;
//     alert(resultado);
// }

// suma();

//Ejercicio 3: Contador de números pares: Utiliza un bucle for para imprimir todos los números pares del 1 al 50 en la consola.

// console.log("Tercer ejercicio");

// function showNumbers(){
//     for(let i = 1; i<=50; i++){
//         if(i%2 === 0){
//             console.log(i);
//         }
//     }
// }

// showNumbers();

//Ejercicio 4: Tabla de multiplicar: Solicita al usuario un número y muestra su tabla de multiplicar del 1 al 10.

// console.log("Ejercicio cuatro");
// const reqNumber = parseInt(prompt("Introduce el número del que desees la tabla de multiplicar"));

// document.write(`<h5>Tabla de multiplicar del ${reqNumber} </h5>`)
// for(let i = 0; i<=10; i++){
//     let resultado = i*reqNumber;
//     document.write(`<p>${i} x ${reqNumber} = ${resultado}</p>`);
// }

//Ejercicio 5: Conversor de ºC a ºF.

// console.log("Ejercicio cinco");

// const conversor = () => {
//     let result = 0;
//     let celsTemperature = parseInt(prompt("Introduce los grados celsius que quieras convertir a Farenheit"));
//     console.log(celsTemperature);
//     result = (celsTemperature * 1.8) + 32; 
//     alert("La temperatura era = " + result.toFixed(2)); 
// }

// conversor();

//NIVEL INTERMEDIO

//Ejercicio 1: Validación de contraseña: Pide al usuario una contraseña y verifica si cumple con ciertos criterios de seguridad (longitud, caracteres especiales, etc.).
// console.log("Cambio a NIVEL INTERMEDIO")

// let password = "AstDiD123!."
// let password2 = "AstDiD."

// const verification = (password) => {
//     const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numbers = '0123456789';
//     const symbols = ' .?¿\'¡+-.,!·$%&/(|@#~€¬][{}';
//     let letCheck = false;
//     let numCheck = false;
//     let sumbCheck = false;
    
//     for (const char of password) {
//         if (letters.includes(char)) {
//             letCheck = true;
//         } else if (numbers.includes(char)) {
//             numCheck = true;
//         } else if (symbols.includes(char)) {
//             sumbCheck = true;
//         }
//     }
    
//     if (letCheck && numCheck && sumbCheck) {
//         console.log("Contraseña segura.");
//     } else {
//         console.log("La contraseña no contiene letras números y símbolos. Revisa y incluye una contraseña que sí los tenga.");
//     }
// }

// console.log("Ejercicio 1");
// verification(password);
// verification(password2);

//Ejercicio 2: Números primos: Escribe una función que determine si un número es primo o no.

// let number1 = 11;
// let number2 = 33;

// const primo = (number) =>{
//     let cont = 0;
//     for(let i = 1; i<=number; i++){
//         if(number%i===0){
//             cont+=1;
//         }
//     }
//     if(cont === 2){
//         console.log(`El número ${number} es primo.`);
//     }
//     else{
//         console.log(`El número ${number} no es primo.`);
//     }
// }

// console.log("Ejercicio 2");
// primo(number1);
// primo(number2);

//Ejercicio 3: Conteo de letras: Crea un programa que cuente cuántas veces aparece una letra específica en una cadena dada.

// function counterLetters(char, string){
//     let count = 0;
//     for(let i = 0; i<string.length; i++){
//         if(char===string[i]){
//             count+=1;
//         }
//     }
//     console.log(`El caracter ${char} está repetido ${count} veces en la palabra ${string}`);
// }

// console.log("Ejercicio 3");
// counterLetters("a","amalgama");

//Ejercicio 4: Contar vocales y consonantes: Pide al usuario una cadena y muestra la cantidad de vocales y consonantes en ella.

// const contarVocalesConsonantes = () => {
//     const cadena = prompt("Introduce una cadena:");
//     const cadenaLower = cadena.toLowerCase(); //Así evitamos que el programa se salte las mayúsculas.
//     const vocales = "aeiouáéíóú";
//     const consonantes = "bcdfghjklmnpqrstvwxyz";

//     let numVocales = 0;
//     let numConsonantes = 0;

//     for (const char of cadenaLower) {
//         if (vocales.includes(char)) {
//             numVocales++;
//         } else if (consonantes.includes(char)) {
//             numConsonantes++;
//         }
//     }

//     console.log(`Cantidad de vocales: ${numVocales}`);
//     console.log(`Cantidad de consonantes: ${numConsonantes}`);
// }

// console.log("Ejercicio 4");
// contarVocalesConsonantes();

//Ejercicio 5: Buscador de palabras: Crea una función que busque una palabra específica en un array de palabras y devuelva su posición.

function searcher(word, array){
    let position = 0;
    let wordTransformed = word.toLowerCase();
    for(let i = 0; i < array.length; i++){
        if(wordTransformed === array[i]){
            position = i;
        }
    }
    console.log(`La posición de la palabra en el array es: ${position}`);
}

console.log("Ejercicio 5");
searcher("pera", ["pera", "limón", "melón", "manzana", "albaricoque"]);
searcher("pEra", ["pera", "limón", "melón", "manzana", "albaricoque"]);
searcher("manzana", ["pera", "limón", "melón", "manzana", "albaricoque"]);