// document.addEventListener('DOMContentLoaded', function () {
//     const calcularPrimeraParteBtn = document.getElementById('calcularPrimeraParte');
//     const calcularSegundaParteBtn = document.getElementById('calcularSegundaParte');

//     calcularPrimeraParteBtn.addEventListener('click', calcularPrimeraParte);
//     calcularSegundaParteBtn.addEventListener('click', calcularSegundaParte);
// });

// function calcularPrimeraParte() {
//     let montoPrestamo = parseFloat(document.getElementById('montoPrestamo').value);
//     let resultadoPrimeraParte = '';
//     console.log(montoPrestamo)

//     if (!isNaN(montoPrestamo)) {
//         resultadoPrimeraParte = 'Opciones de préstamo:\n\n';
//         let interes = 3.0; // Tasa de interés inicial
//         const plazoMin = 20;
//         const plazoMax = 25;
//         const incrementoInteres = 0.5;

//         while (interes <= 5.0) {
//             for (let plazo = plazoMin; plazo <= plazoMax; plazo++) {
//                 const cuotaAnual = calcularCuotaAnual(montoPrestamo, interes, plazo);
//                 resultadoPrimeraParte += `Plazo: ${plazo} años - Interés: ${interes.toFixed(2)}% - Cuota Anual: ${cuotaAnual.toFixed(2)}\n`;
//             }
//             interes += incrementoInteres;
//         }
//         console.log(resultadoPrimeraParte)
//     } else {
//         resultadoPrimeraParte = 'Por favor, ingresa un monto válido.';
//     }

//     const tabla1 = document.getElementById('tablaPrimeraParte')
//     tabla1.textContent = resultadoPrimeraParte;
// }

// function calcularCuotaAnual(prestamo, interes, duracion) {
//     const i = interes / 100;
//     return (prestamo * i) / (1 - Math.pow(1 + i, -duracion));
// }

// function calcularInteresesAnuales(prestamo, interes) {
//     return prestamo * (interes / 100);
// }

// function calcularSegundaParte() {
//     let montoPrestamo = parseFloat(document.getElementById('montoPrestamo2').value);
//     const tasaInteres = parseFloat(document.getElementById('tasaInteres').value);
//     const plazo = parseInt(document.getElementById('plazo').value);
//     let resultadoSegundaParte = '';

//     if (!isNaN(montoPrestamo) && !isNaN(tasaInteres) && !isNaN(plazo)) {
//         resultadoSegundaParte = 'SEGUNDO: Cálculos detallados del préstamo\n\n';
//         resultadoSegundaParte += 'Año\tCapital Pendiente\tCuota Anual\tIntereses\tAmortización\n';

//         for (let año = 1; año <= plazo; año++) {
//             const cuotaAnual = calcularCuotaAnual(montoPrestamo, tasaInteres, plazo);
//             const interesAnual = calcularInteresesAnuales(montoPrestamo, tasaInteres);
//             const amortizacionAnual = cuotaAnual - interesAnual;
//             resultadoSegundaParte += `${año}\t\t${montoPrestamo.toFixed(2)}\t${cuotaAnual.toFixed(2)}\t${interesAnual.toFixed(2)}\t\t${amortizacionAnual.toFixed(2)}\n`;
//             montoPrestamo -= amortizacionAnual;
//         }
//     } else {
//         resultadoSegundaParte = 'Por favor, ingresa valores válidos en todos los campos.';
//     }

//     document.getElementById('resultadoSegundaParte').textContent = resultadoSegundaParte;
// }

document.addEventListener('DOMContentLoaded', function () {
    const calcularPrimeraParteBtn = document.getElementById('calcularPrimeraParte');
    const calcularSegundaParteBtn = document.getElementById('calcularSegundaParte');

    calcularPrimeraParteBtn.addEventListener('click', calcularPrimeraParte);
    calcularSegundaParteBtn.addEventListener('click', calcularSegundaParte);
});

function calcularPrimeraParte() {
    let montoPrestamo = parseFloat(document.getElementById('montoPrestamo').value);
    let resultadoPrimeraParte = '';

    if (!isNaN(montoPrestamo)) {
        resultadoPrimeraParte = '<tr><th>Plazo</th><th>Interés</th><th>Cuota Anual</th></tr>';
        let interes = 3.0; // Tasa de interés inicial
        const plazoMin = 20;
        const plazoMax = 25;
        const incrementoInteres = 0.5;

        while (interes <= 5.0) {
            for (let plazo = plazoMin; plazo <= plazoMax; plazo++) {
                const cuotaAnual = calcularCuotaAnual(montoPrestamo, interes, plazo);
                resultadoPrimeraParte += `<tr><td>${plazo} años</td><td>${interes.toFixed(2)}%</td><td>${cuotaAnual.toFixed(2)}</td></tr>`;
            }
            interes += incrementoInteres;
        }

        document.getElementById('tablaPrimeraParte').innerHTML = resultadoPrimeraParte;
        document.getElementById('tablaPrimeraParte').style.display = 'table';
    }
}

function calcularCuotaAnual(prestamo, interes, duracion) {
    const i = interes / 100;
    return (prestamo * i) / (1 - Math.pow(1 + i, -duracion));
}

function calcularSegundaParte() {
    let montoPrestamo = parseFloat(document.getElementById('montoPrestamo2').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value);
    const plazo = parseInt(document.getElementById('plazo').value);
    let resultadoSegundaParte = '';

    if (!isNaN(montoPrestamo) && !isNaN(tasaInteres) && !isNaN(plazo)) {
        resultadoSegundaParte = '<tr><th>Año</th><th>Capital Pendiente</th><th>Cuota Anual</th><th>Intereses</th><th>Amortización</th></tr>';

        for (let año = 1; año <= plazo; año++) {
            const cuotaAnual = calcularCuotaAnual(montoPrestamo, tasaInteres, plazo);
            const interesAnual = calcularInteresesAnuales(montoPrestamo, tasaInteres);
            const amortizacionAnual = cuotaAnual - interesAnual;
            resultadoSegundaParte += `<tr><td>${año}</td><td>${montoPrestamo.toFixed(2)}</td><td>${cuotaAnual.toFixed(2)}</td><td>${interesAnual.toFixed(2)}</td><td>${amortizacionAnual.toFixed(2)}</td></tr>`;
            montoPrestamo -= amortizacionAnual;
        }

        document.getElementById('tablaSegundaParte').innerHTML = resultadoSegundaParte;
        document.getElementById('tablaSegundaParte').style.display = 'table';
    }
}

function calcularInteresesAnuales(prestamo, interes) {
    return prestamo * (interes / 100);
}
