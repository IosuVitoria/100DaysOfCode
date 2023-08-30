// NIVEL AVANZADO:

// 1. Resolver una ecuación de segundo grado (ax^2 + bx + c = 0).

console.log("Ejercicio 1")

const resolverEcuacionCuadratica = (a, b, c) => {
    const discriminante = b * b - 4 * a * c;
    if (discriminante < 0) {
        return "No existen raíces reales";
    }
    const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    return [raiz1, raiz2];
}

const a = 1;
const b = -3;
const c = 2;

const raices = resolverEcuacionCuadratica(a, b, c);

if (Array.isArray(raices)) {
    console.log(`Las raíces son: ${raices.join(", ")}`);
} else {
    console.log(raices);
}


// 2. Implementar un juego de adivinanza numérica con retroalimentación.

console.log("Ejercicio 2");

const juego = () => {
    let choice = Math.ceil(Math.random()*100)
    let num = parseInt(prompt("Introduce un número del 1 al 100"));
    let cont = 0;
    while(choice!==num){
        console.log("Lo siento, no has acertado.");
        if(num<choice){
            alert("Introduce un número mayor.")
            num = parseInt(prompt("Introduce un número del 1 al 100"));
            cont++
        }else{
            alert("Introduce un número menor.")
            num = parseInt(prompt("Introduce un número del 1 al 100"));
            cont++
        }
    }
    console.log(`Has acertado. El número elegido era ${num} y has tardado ${cont} intentos en adivinarlo.`)
}

// juego() Comentado para evitar inicio no deseado.

// 3. Crear un programa de registro de usuarios con validación de contraseña segura.

// 4. Simular un cajero automático con retiro y saldo disponible.

console.log("Ejercicio 4");

let num = 20000;

const cajero = () => {
    let choice = parseInt(prompt("¿Qué desea hacer? Marcar 1 para sacar dinero ó 2 para consultar saldo.Introduce la opción deseada:"));
    if(choice === 1){
        let retirada = parseInt(prompt("Indica la cantidad de dinero que desea retirar: "));
        if(retirada<num){
            alert("Puede retirar su efectivo, gracias. No olvide recoger la tarjeta.")
            num-=retirada;
            while(num>retirada){
                let opcionA = prompt("¿Desea realizar otra retirada o alguna opción extra?");
                if(opcionA === "Sí" || opcionA === "Si" || opcionA === "si" || opcionA === "sí"){
                    alert(`Su saldo actual es de ${num}`)
                    cajero()
                }else if(opcionA==="No" || opcionA ==="no"){
                    alert("Que tenga un buen día;");
                    break;
                }
            }
        }else{
            alert("Saldo insuficiente. Consulte sus movimientos de cuenta para asegurarse de que no haya retiradas no deseas.")
            let opcionB = prompt("Desea realizar una retirada inferior?");
            if(opcionB === "Sí" || opcionA === "Si" || opcionA === "si" || opcionA === "sí"){
                cajero();
            }else{
                alert("Que tenga un buen día gracias.");
            }
        }
    }
    else{
        saldo();
    }
}

const saldo = (num) => {
    console.log(typeof(num));
    alert(`El saldo disponible es ${num}.`)
    let opcionC = prompt("Desea hacer algo más?");
    if(opcionC === "Sí" || opcionC === "Si" || opcionC === "si" || opcionC === "sí"){
        alert("Será redirigido al menú principal.");
        cajero();
    }else{
        alert("Que tenga un buen día!")
    }
}

cajero();


// 5. Desarrollar un conversor de unidades (por ejemplo, Celsius a Fahrenheit).
// 6. Implementar un sistema de votación con múltiples candidatos.
// 7. Construir un juego de Laberinto donde el jugador debe tomar decisiones basadas en condiciones.
// 8. Crear una lista de tareas con opciones para agregar, completar y eliminar tareas.

// 9. Simular un juego de Blackjack simple entre el jugador y la computadora.
// 10. Programar un generador de series numéricas basado en reglas personalizadas.