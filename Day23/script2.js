// Función decodificarMensaje que toma un array de números y los convierte en un mensaje decodificado.
const decodificarMensaje = numeros => {
    let mensajeDecodificado = '';
    for (const numero of numeros) {
        mensajeDecodificado += String.fromCharCode(64 + numero);
    }
    return mensajeDecodificado;
};

// Obtener elementos del DOM
const form = document.getElementById('decoder-form');
const numbersInput = document.getElementById('numbers-input');
const decodedMessage = document.getElementById('decoded-message');

// Manejar la presentación del mensaje decodificado cuando se envía el formulario
form.addEventListener('submit', event => {
    event.preventDefault();
    const inputNumbers = numbersInput.value
        .split(',')
        .map(num => parseInt(num.trim(), 10))
        .filter(num => !isNaN(num) && num >= 1 && num <= 26);
    const mensajeDecodificado = decodificarMensaje(inputNumbers);
    decodedMessage.textContent = mensajeDecodificado;
});
