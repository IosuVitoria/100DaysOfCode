// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const valoresAlfabeto = {
//     'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5,
//     'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10,
//     'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15,
//     'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20,
//     'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25,
//     'Z': 26
// };

// let valorTotal = 0;

// const ingresarPalabra = () => {
//     rl.question('Ingrese una palabra (mayúscula): ', (palabraUsuario) => {
//         palabraUsuario = palabraUsuario.toUpperCase();

//         for (let i = 0; i < palabraUsuario.length; i++) {
//             const valorLetra = valoresAlfabeto[palabraUsuario[i]];
//             valorTotal += valorLetra;
//         }

//         if (valorTotal < 100) {
//             console.log(`El valor de ${palabraUsuario} no ha llegado a 100. Se repite el bucle.`);
//             ingresarPalabra(); 
//         } else {
//             console.log("Se ha llegado al valor requerido.");
//             rl.close();
//         }
//     });
// }


// ingresarPalabra();


const valoresAlfabeto = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5,
    'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10,
    'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15,
    'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20,
    'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25,
    'Z': 26
};

const calcularValor = () => {
    const palabraInput = document.getElementById('palabraInput').value.toUpperCase();
    let valortotal = 0;

    for (let i = 0; i < palabraInput.length; i++) {
        const valorLetra = valoresAlfabeto[palabraInput[i]];
        valortotal += valorLetra;
    }

    const resultadoElement = document.getElementById('resultado');
    if (valortotal < 100) {
        resultadoElement.textContent = `El valor de ${palabraInput} no ha llegado a 100. Inténtelo de nuevo.`;
    } else {
        resultadoElement.textContent = `El valor de ${palabraInput} ha llegado a ${valortotal}. Se ha llegado al valor requerido.`;
    }
}
