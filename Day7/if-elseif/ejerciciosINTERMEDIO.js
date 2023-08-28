//NIVEL INTERMEDIO:

// 1. Clasificar un triángulo en equilátero, isósceles o escaleno.

console.log("Ejercicio 1");

const triangle = (angle1, angle2, angle3) => {
    let checkCondition = angle1 + angle2 + angle3;
    if(checkCondition === 180){
        if(angle1 === angle2 && angle3 === angle2){
            console.log("Esto es un triángulo equilátero.");
        }else if(angle1 !== angle2 && angle1 !== angle3 && angle2!==angle3){
            console.log("Esto es un triangulo escaleno.");
        }else{
            console.log("Esto es un triángulo isósceles.")
        }
    }else{
        console.log("No has introducido los lados de un triángulo válido. Recuerda que la suma total de los grados de los ángulos debe ser igual a 180º");
    }
}

triangle(60, 60, 60);
triangle(55, 55, 70);
triangle(50, 60, 70);
triangle(45, 80, 75);

// 2. Calcular el salario semanal de un empleado considerando horas trabajadas y tarifa por hora. (Resuelto sin IF)

console.log("Ejercicio 2");

const remuneration = (hours, fare) => {
    return hours*fare;
}

console.log(`El salario de esta semana será ${remuneration(40, 15)}`);
console.log(`El salario de esta semana será ${remuneration(32, 25)}`);

// 3. Verificar si una cadena es un palíndromo (se lee igual al revés).

console.log("Ejercicio 3");

const palindromo = (word) => {
    let wordTransformed = word.toLowerCase();
    let separatedChar = wordTransformed.split("");
    let invertedChar = separatedChar.reverse();
    let reunitedChar = invertedChar.join("");
    if(word === reunitedChar){
        console.log("La palabra es un palíndromo");
    }else{
        console.log("La palabra no es un palíndromo");
    }
}

palindromo("ala");
palindromo("Pechunga");


// 4. Determinar el día de la semana a partir de un número (1 para lunes, 2 para martes, etc.).

console.log("Ejercicio 4");

const weekDay = (day) => {
    let dayChecked = day.toLowerCase();
    if(dayChecked === "lunes"){
        return 1;
    }else if(dayChecked === "martes"){
        return 2;
    }else if(dayChecked === "miercoles"){
        return 3;
    }else if(dayChecked === "jueves"){
        return 4;
    }else if(dayChecked === "viernes"){
        return 5;
    }else if(dayChecked === "sábado"){
        return 6;
    }else{
        return 7;
    }
}

console.log(`Al día lunes le corresponde el número ${weekDay("Lunes")}`);
console.log(`Al día jueves le corresponde el número ${weekDay("JueVes")}`);
console.log(`Al día domingo le corresponde el número ${weekDay("Domingo")}`);

// 5. Calcular el índice de masa corporal (IMC) y categorizarlo.

console.log("Ejercicio 5");

const imcChecker = (weight, height) => {
    const bmi = weight / (height * height);
    let category;
    if (bmi < 18.5) {
        category = "Bajo peso. Estás bajo de peso";
    }else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Peso normal. Sigue así";
    }else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Sobrepeso. Cuidado. Haz deporte y vigila la alimentación";
    }else {
        category = "Obesidad. Consulta con un médico para arreglar tu estado";
    }
    console.log(`Tu IMC es ${bmi.toFixed(2)}. Tu condición es:  ${category}.`);
}

imcChecker(75, 1.84);
imcChecker(55, 1.84);
imcChecker(135, 1.84);

// 6. Convertir una calificación numérica a su equivalente en letras (A, B, C, etc.).

console.log("Ejercicio 6");

const obtenerNotaLetra = (nota) => {
    if (nota >= 90 && nota <= 100) {
        return "A";
    } else if (nota >= 85 && nota < 90) {
        return "A-";
    } else if (nota >= 80 && nota < 85) {
        return "B+";
    } else if (nota >= 75 && nota < 80) {
        return "B";
    } else if (nota >= 70 && nota < 75) {
        return "B-";
    } else if (nota >= 65 && nota < 70) {
        return "C+";
    } else if (nota >= 60 && nota < 65) {
        return "C";
    } else if (nota >= 55 && nota < 60) {
        return "C-";
    } else if (nota >= 50 && nota < 55) {
        return "D";
    } else if (nota >= 0 && nota < 50) {
        return "F";
    } else {
        return "Nota no válida";
    }
}

const nota = 85; 
const notaLetra = obtenerNotaLetra(nota);
console.log(`Tu nota es: ${notaLetra}`);


// 7. Validar si un número ingresado está dentro de un rango específico.

console.log("Ejercicio 7")

const validation = (num, max, min) => {
    if(num>=min && num<=max){
        return "El número está dentro del intervalo."
    }else{
        return "El número no está dentro del intervalo."
    }
}

console.log(validation(25, 100, 20));
console.log(validation(25, 100, 30));

// 8. Realizar el cálculo del factorial de un número entero.

console.log("Ejercicio 8");

const factorial = (num) => {
    let resultado = 1;
    while(num>=1){
        resultado*=num;
        num--
    }
    return resultado;
}

console.log(factorial(6));
console.log(factorial(5));

console.log("Usando if para el control de errores.");

const factorial2 = (num) => {
    if (num < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    }
    let resultado = 1;
    for (let i = num; i >= 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(factorial2(6));
console.log(factorial2(5));
console.log(factorial2(-3));

// 9. Juego de Piedra, Papel o Tijera contra la computadora.
console.log("Ejercicio 9");

const game = (player) => {
    const election = ["piedra", "papel", "tijeras"];
    const index = Math.ceil((Math.random()*3)-1);
    const computer = election[index];
    console.log(`El ordenador elige ${computer}`);
    console.log(`El jugador elige ${player}`);
    if(computer === "piedra" && player === "tijera"){
        console.log("Ha ganado la máquina");
    }else if(computer === "tijera" && player === "papel"){
        console.log("Ha ganado la máquina");
    }else if(computer === "papel" && player === "piedra"){
        console.log("Ha ganado la máquina");
    }else if(computer === player){
        console.log("Hay empate");
    }else{
        console.log("Ha ganado el jugador.")
    }
}

game("tijeras");
game("piedra");
game("papel");
game("tijeras");

// 10. Implementar una calculadora básica (+, -, *, /).

console.log("Ejercicio 10");

const calculator = (num1, num2, symbol) => {
    if(symbol === "+"){
        return num1 + num2;
    }
    else if(symbol === "-"){
        return num1 - num2;
    }
    else if(symbol === "*"){
        return num1 * num2;
    }
    else if(symbol === "/"){
        if(num2 === 0){
            console.log("No se pueden dividir números entre 0.")
        }else{
            return num1/num2;
        }
    }
}

console.log(calculator(23, 45, "+"));
console.log(calculator(23, 45, "-"));
console.log(calculator(23, 45, "*"));
console.log(calculator(23, 45, "/"));
calculator(23, 0, "/");