/*
 * ¿Preparad@ para aprender o repasar el lenguaje de programación que tú quieras?
 * - Recuerda que todas las instrucciones de participación están en el
 *   repositorio de GitHub.
 *
 * Lo primero... ¿Ya has elegido un lenguaje?
 * - No todos son iguales, pero sus fundamentos suelen ser comunes.
 * - Este primer reto te servirá para familiarizarte con la forma de participar
 *   enviando tus propias soluciones.
 *
 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
 * debemos comenzar por el principio.
 */


// He elegido javascript. Al hacer desarrollo web centro mi esfuerzo en mejorar el lenguaje con el que he empezado.

// No conozco muy bien la página web "oficial" de javascript así que pondré una que me gustó y que considero de mis primeras fuentes de 
// consulta.

// https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics


// Los comentarios en Javascript pueden tener dos sintaxis:

// 1. La de una sola línea que se marca con "//".

// 2. La de varias líneas que presenta este aspecto: "/* */".


//  - Crea una variable (y una constante si el lenguaje lo soporta).

let num = 0; // Variable inicializada.
let num2;   // Variable no inicializada.

const num3 = 3.1416; // Constante



// * - Crea variables representando todos los tipos de datos primitivos
// *   del lenguaje (cadenas de texto, enteros, booleanos...).


// STRING. Cadenas de texto. 
const texto = "Hola, soy una cadena de texto.";
let text2 = "Yo soy otra cadena de texto.";

// INT. Integer. Número entero.
const entero = 42;
let entero2 = 25; 

// FLOAT. "Números con comas." 
const flotante = 3.14;
let float = 2.21

// BOOLEAN. Booleano. Valores true o false.
const booleano = true;
let bool = false;

// Null. Para valores nulos. 
let nulo = null;

// Undefined. Valores no definidos. Hay que controlarlos para evitar problemas a la hora de hacer peticiones de datos. 
const indefinido = undefined;

// Símbolo (introducido en ECMAScript 2015)
const simbolo = Symbol("descripción");

// A continuación se muestran algunos de los valores 
console.log("Cadena de texto:", texto);
console.log("Número entero:", entero);
console.log("Número de punto flotante:", flotante);
console.log("Booleano:", booleano);
console.log("Null:", nulo);
console.log("Undefined:", indefinido);
console.log("Símbolo:", simbolo);

// * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"

const lenguaje = "Javascript";

console.log(`¡Hola, ${lenguaje}!`);
