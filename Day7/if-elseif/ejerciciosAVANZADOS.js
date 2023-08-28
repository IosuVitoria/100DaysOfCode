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


// 3. Crear un programa de registro de usuarios con validación de contraseña segura.
// 4. Simular un cajero automático con retiro y saldo disponible.
// 5. Desarrollar un conversor de unidades (por ejemplo, Celsius a Fahrenheit).
// 6. Implementar un sistema de votación con múltiples candidatos.
// 7. Construir un juego de Laberinto donde el jugador debe tomar decisiones basadas en condiciones.
// 8. Crear una lista de tareas con opciones para agregar, completar y eliminar tareas.
// 9. Simular un juego de Blackjack simple entre el jugador y la computadora.
// 10. Programar un generador de series numéricas basado en reglas personalizadas.