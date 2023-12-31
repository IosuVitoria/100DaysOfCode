// 1. Conteo de Bases en ADN:
// Escribir una función que tome una cadena de ADN como entrada y cuente la frecuencia de cada base (A, T, C, G).

// 2. Transcripción de ADN a ARN:
// Crear una función que tome una cadena de ADN como entrada y devuelva la cadena de ARN correspondiente, reemplazando las bases T por U.

// 3. Traducción de ARN a Proteína:
// Escribir una función que tome una cadena de ARN como entrada y la traduzca en una secuencia de aminoácidos según el código genético.

// 4. Mutaciones:
// Desarrollar una función que compare dos cadenas de ADN y devuelva true si son similares o false si tienen más de una diferencia.

// 5. Longitud del Codón más Largo:
// Encontrar la longitud del codón más largo en una cadena de ADN.

// 6. Punto de Mutación:
// Identificar el punto de mutación en dos cadenas de ADN, es decir, el índice donde las cadenas difieren por primera vez.

// 7. GC Content:
// Calcular el contenido de guanina y citosina (GC content) en una cadena de ADN.

// 8. Generador de Secuencias Aleatorias:
// Crear una función que genere secuencias de ADN aleatorias de una longitud dada.

// 9. Palíndromo de ADN:
// Determinar si una cadena de ADN es un palíndromo (lee igual en ambas direcciones).

// 10. Búsqueda de Motivos:
// Desarrollar una función que encuentre todos los lugares donde un motivo específico aparece en una cadena de ADN.


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarBasesADN(adn) {
    const contador = { A: 0, T: 0, C: 0, G: 0 };
    for (let i = 0; i < adn.length; i++) {
        const base = adn[i].toUpperCase();
        if (contador.hasOwnProperty(base)) {
            contador[base]++;
        }
    }
    console.log('Conteo de bases en ADN:', contador);
}

function transcripcionADNARN(adn) {
    const arn = adn.replace(/T/g, 'U');
    console.log('Transcripción de ADN a ARN:', arn);
}


function traduccionARNaProteina(arn) {
    console.log("-------------------------------");
    console.log("TRADUCCIÓN DE ARN A PROTEÍNA");
    console.log("-------------------------------");
    const codones = {
        'UUU': 'Fenilalanina',
        'UUC': 'Fenilalanina',
        'UUA': 'Leucina',
        'UUG': 'Leucina',
        'CUU': 'Leucina',
        'CUC': 'Leucina',
        'CUA': 'Leucina',
        'CUG': 'Leucina',
        'AUU': 'Isoleucina',
        'AUC': 'Isoleucina',
        'AUA': 'Isoleucina',
        'AUG': 'Metionina (Inicio)',
        'GUU': 'Valina',
        'GUC': 'Valina',
        'GUA': 'Valina',
        'GUG': 'Valina',
        'UCU': 'Serina',
        'UCC': 'Serina',
        'UCA': 'Serina',
        'UCG': 'Serina',
        'CCU': 'Prolina',
        'CCC': 'Prolina',
        'CCA': 'Prolina',
        'CCG': 'Prolina',
        'ACU': 'Treonina',
        'ACC': 'Treonina',
        'ACA': 'Treonina',
        'ACG': 'Treonina',
        'GCU': 'Alanina',
        'GCC': 'Alanina',
        'GCA': 'Alanina',
        'GCG': 'Alanina',
        'UAU': 'Tirosina',
        'UAC': 'Tirosina',
        'UAA': 'Stop',
        'UAG': 'Stop',
        'CAU': 'Histidina',
        'CAC': 'Histidina',
        'CAA': 'Glutamina',
        'CAG': 'Glutamina',
        'AAU': 'Asparagina',
        'AAC': 'Asparagina',
        'AAA': 'Lisina',
        'AAG': 'Lisina',
        'GAU': 'Aspartato',
        'GAC': 'Aspartato',
        'GAA': 'Glutamato',
        'GAG': 'Glutamato',
        'UGU': 'Cisteína',
        'UGC': 'Cisteína',
        'UGA': 'Stop',
        'UGG': 'Triptófano',
        'CGU': 'Arginina',
        'CGC': 'Arginina',
        'CGA': 'Arginina',
        'CGG': 'Arginina',
        'AGU': 'Serina',
        'AGC': 'Serina',
        'AGA': 'Arginina',
        'AGG': 'Arginina',
        'GGU': 'Glicina',
        'GGC': 'Glicina',
        'GGA': 'Glicina',
        'GGG': 'Glicina',
    };

    let proteina = '';
    for (let i = 0; i < arn.length; i += 3) {
        const codon = arn.slice(i, i + 3);
        if (codones.hasOwnProperty(codon)) {
            const aminoacido = codones[codon];
            if (aminoacido === 'Stop') {
                break;
            }
            proteina += aminoacido + ' ';
        } else {
            console.log('Error: Codón no reconocido');
            return;
        }
    }

    console.log('Traducción de ARN a Proteína:', proteina.trim());
}

function compararCadenasADN(cadena1, cadena2) {
    if (cadena1.length !== cadena2.length) {
        console.log('Las cadenas son de diferente longitud. No se pueden comparar.');
        return false;
    }

    let diferencias = 0;
    for (let i = 0; i < cadena1.length; i++) {
        if (cadena1[i] !== cadena2[i]) {
            diferencias++;
            if (diferencias > 1) {
                console.log('Las cadenas tienen más de una diferencia.');
                return false;
            }
        }
    }
    console.log('Las cadenas son similares.');
    return true;
}

function longitudCodonMasLargo(adn) {
    let codonActual = '';
    let longitudActual = 0;
    let longitudMaxima = 0;

    for (let i = 0; i < adn.length; i++) {
        if (adn[i] === 'A' || adn[i] === 'T' || adn[i] === 'C' || adn[i] === 'G') {
            codonActual += adn[i];
            longitudActual++;

            if (longitudActual > longitudMaxima) {
                longitudMaxima = longitudActual;
            }
        } else {
            codonActual = '';
            longitudActual = 0;
        }
    }

    console.log('Longitud del Codón más Largo:', longitudMaxima);
}

function puntoMutacion(cadena1, cadena2) {
    if (cadena1.length !== cadena2.length) {
        console.log('Las cadenas son de diferente longitud. No se puede identificar el punto de mutación.');
        return -1;
    }

    for (let i = 0; i < cadena1.length; i++) {
        if (cadena1[i] !== cadena2[i]) {
            console.log('Punto de Mutación en el índice:', i);
            return i;
        }
    }

    console.log('No hay diferencia entre las cadenas.');
    return -1;
}

function calcularGCContent(adn) {
    const totalBases = adn.length;
    const countGC = adn.replace(/[^GC]/g, '').length;
    const gcContent = (countGC / totalBases) * 100;

    console.log('Contenido GC en la cadena de ADN:', gcContent.toFixed(2) + '%');
}

function generarSecuenciaAleatoria(longitud) {
    const bases = ['A', 'T', 'C', 'G'];
    let secuencia = '';

    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * bases.length);
        secuencia += bases[indice];
    }

    console.log('Secuencia Aleatoria de ADN:', secuencia);
}

function esPalindromoADN(adn) {
    const reverseADN = adn.split('').reverse().join('');
    const esPalindromo = adn === reverseADN;

    if (esPalindromo) {
        console.log('La cadena de ADN es un palíndromo.');
    } else {
        console.log('La cadena de ADN no es un palíndromo.');
    }

    return esPalindromo;
}

function buscarMotivos(adn, motivo) {
    const coincidencias = [];
    let indice = adn.indexOf(motivo);

    while (indice !== -1) {
        coincidencias.push(indice);
        indice = adn.indexOf(motivo, indice + 1);
    }

    console.log('Posiciones donde el motivo aparece en la cadena de ADN:', coincidencias);
}

function procesarOpcion(opcion, adn) {
    switch (opcion) {
        case '1':
            contarBasesADN(adn);
            break;
        case '2':
            transcripcionADNARN(adn);
            break;
        case '3':
            traduccionARNaProteina(adn);
            break;
        case '4':
            compararCadenasADN(adn, rl.question('Ingresa la segunda cadena de ADN: ', () => {}));
            break;
        case '5':
            longitudCodonMasLargo(adn);
            break;
        case '6':
            puntoMutacion(adn, rl.question('Ingresa la segunda cadena de ADN: ', () => {}));
            break;
        case '7':
            calcularGCContent(adn);
            break;
        case '8':
            generarSecuenciaAleatoria(Number(rl.question('Ingresa la longitud de la secuencia aleatoria: ', () => {})));
            break;
        case '9':
            esPalindromoADN(adn);
            break;
        case '10':
            buscarMotivos(adn, rl.question('Ingresa el motivo a buscar: ', () => {}));
            break;
        default:
            console.log('Opción no válida');
            break;
    }
}

rl.question('Por favor, ingresa una opción (1-10): ', (opcion) => {
    rl.question('Ingresa la cadena de ADN: ', (adn) => {
        procesarOpcion(opcion, adn);
        rl.close();
    });
});
