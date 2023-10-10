

// Función decodificarMensaje que toma un array de números y los convierte en un mensaje decodificado.
const decodificarMensaje = numeros => {
    let mensajeDecodificado = ''; // Inicializamos una cadena vacía para almacenar el mensaje decodificado.
    
    // Recorremos el array de números usando un bucle for...of.
    for (const numero of numeros) {
        // Usamos String.fromCharCode para convertir un número en su correspondiente carácter ASCII.
        // La fórmula 64 + numero se usa porque el carácter 'A' tiene un valor ASCII de 65,
        // y restamos 1 al número para que 1 se convierta en 'A', 2 en 'B', y así sucesivamente.
        const letra = String.fromCharCode(64 + numero);
        
        // Concatenamos cada letra al mensaje decodificado.
        mensajeDecodificado += letra;
    }
    
    // Devolvemos el mensaje decodificado.
    return mensajeDecodificado;
};

const numeros = [8, 15, 12, 1]; // Array de números que representan las letras.
const mensajeDecodificado = decodificarMensaje(numeros); // Llamamos a la función para decodificar el mensaje.

// Mostramos el mensaje decodificado en la consola.
console.log(mensajeDecodificado); // Debe imprimir "HOLA"


