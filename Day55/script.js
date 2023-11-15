let aciertos = 0;
let numDigitos = 1;
let preguntaActual = {};
let tiempoRestante = 60; 
let temporizador;

function generarOperacion(numDigitos) {
    const operandos = Array.from({ length: 2 }, () => Math.floor(Math.random() * Math.pow(10, numDigitos)));
    const operadores = ['+', '-', '*', '/'];
    const operador = operadores[Math.floor(Math.random() * operadores.length)];
    const operacion = `${operandos[0]} ${operador} ${operandos[1]}`;
    const resultado = eval(operacion);
    return { operacion, resultado };
}

function actualizarPregunta() {
    preguntaActual = generarOperacion(numDigitos);
    document.getElementById('question').innerText = `Pregunta ${aciertos + 1}: ${preguntaActual.operacion}`;
}

function verificarRespuesta() {
    const respuestaUsuario = parseInt(document.getElementById('answer').value, 10);

    if (!isNaN(respuestaUsuario)) {
        if (respuestaUsuario === preguntaActual.resultado) {
            document.getElementById('feedback').innerText = '¡Correcto!';
            aciertos++;
            tiempoRestante += 3; 
        } else {
            document.getElementById('feedback').innerText = `Incorrecto. La respuesta correcta era ${preguntaActual.resultado}.`;
        }

        document.getElementById('score').innerText = `Aciertos: ${aciertos}`;

        if (aciertos % 5 === 0 && aciertos !== 0) {
            numDigitos++;
            document.getElementById('feedback').innerText = `¡Subiste de nivel! Ahora hay ${numDigitos} dígitos en cada operando.`;
        }

        document.getElementById('answer').value = '';
        actualizarPregunta();
    } else {
        alert('Por favor, ingresa un número válido.');
    }
}

function iniciarTemporizador() {
    temporizador = setInterval(function() {
        tiempoRestante--;
        if (tiempoRestante <= 0) {
            mostrarModal();
            clearInterval(temporizador);
        } else {
            actualizarBarraDeProgreso();
        }
    }, 1000);
}

function actualizarBarraDeProgreso() {
    const progressFill = document.getElementById('progress-fill');
    const porcentaje = (tiempoRestante / 60) * 100; 
    progressFill.style.width = porcentaje + '%';
}

function mostrarModal() {
    const modal = document.getElementById('modal');
    const modalScore = document.getElementById('modalScore');
    modalScore.innerText = `Tu puntuación final es: ${aciertos}`;
    modal.style.display = 'flex';
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    reiniciarJuego();
}

function reiniciarJuego() {
    aciertos = 0;
    numDigitos = 1;
    tiempoRestante = 60;
    actualizarPregunta();
    document.getElementById('score').innerText = 'Aciertos: 0';
    document.getElementById('feedback').innerText = '';
    iniciarTemporizador();
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarTemporizador();
    actualizarPregunta();
});

