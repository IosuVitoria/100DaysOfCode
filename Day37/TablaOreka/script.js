const calcularDiferencia = () => {
    const diferencias = [];

    for (let i = 1; i <= 4; i++) {
        const arriba = parseFloat(document.getElementById(`a${i}`).value);
        const abajo = parseFloat(document.getElementById(`b${i}`).value);

        if (!isNaN(arriba) && !isNaN(abajo)) {
            diferencias.push(Math.abs(abajo - arriba));
        }
    }

    return diferencias.length > 0 ? Math.max(...diferencias) : 0;
}

const actualizarResultado = () => {
    const maxDif = calcularDiferencia();
    document.getElementById('maxDif1').innerText = `Mayor diferencia: ${maxDif}`;
}

const verificarDiferencia = () => {
    const maxDifElement = document.getElementById('maxDif1');
    const maxDif = parseFloat(maxDifElement.innerText.split(':')[1].trim());

    if (!isNaN(maxDif) && maxDif > 2) {
        alert('La diferencia máxima es mayor que 2. El valor es: ' + maxDif);
    } else {
        alert('La diferencia máxima es menor o igual a 2. El valor es: ' + maxDif);
    }
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', actualizarResultado);
});