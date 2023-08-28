// Comprobar si un número es positivo o negativo.

console.log("Ejercicio 1")

const comprobarNumero = (num) => {
    if(num>0){
        console.log("El número es positivo");
    }else if(num === 0){
        console.log("El número no es ni negativo ni positivo.")
    }else{
        console.log("El número es negativo")
    }
}

comprobarNumero(12);
comprobarNumero(0);
comprobarNumero(-12);


// Determinar si un número es par o impar.

console.log("Ejercicio 2")

const comprobarParImpar = (num) =>{
    if(num%2 === 0){
        console.log("Es un numero par.");
    }else{
        console.log("El número es impar.");
    }
}

comprobarParImpar(12);
comprobarParImpar(31);

// Calcular si un estudiante aprobó un examen (nota mayor o igual a 60).

console.log("Ejercicio 3");

const nota = (num) => {
    if(num>=60){
        console.log("Enhorabuena! Has aprobado!");
    }else{
        console.log("Lo siento. Has suspendido.");
    }
}

nota(68);
nota(33);

// Verificar si un número es igual a 0.

console.log("Ejercicio 4");

const verify = (num) => {
    if(num === 0){
        console.log("El número es igual a 0");
    }else{
        console.log("El número no es igual a 0");
    }
}

verify(0);
verify(12);

// Comparar dos números y mostrar el mayor y el menor de ellos.

console.log("Ejercicio 5");

const checker = (num1, num2) => {
    if(num1>num2){
        console.log(`El ${num1} es mayor que ${num2}.`);
    }else if(num2>num1){
        console.log(`El ${num2} es mayor que ${num1}.`);
    }else{
        console.log("Ambos numeros son iguales.")
    }
}

checker(12, 34);
checker(-12, -34);
checker(12, 12);

// Comprobar si un número es múltiplo de 5.

console.log("Ejercicio 6");

const multiFive = (num) => {
    if(num%5 === 0){
        console.log("Es múltiplo de 5.")
    }else{
        console.log("No es múltiplo de 5.")
    }
}

multiFive(225);
multiFive(48);

// Determinar si una persona es mayor de edad (mayor o igual a 18 años) y tiene coche. Si es así puede conducir sino no.

console.log("Ejercicio 7");

const conducir = (num, coche) => {
    if(num>=18 && coche === true){
        console.log("Puedes conducir");
    }else{
        console.log("No puedes conducir");
    }
}

conducir(18, true);
conducir(23, false);
conducir(17, true);

// Calcular el costo total de una compra con descuento (si el monto es mayor a X, aplicar descuento).

console.log("Ejercicio 8")

const discount = (bought, discount, limit) => {
    let total = bought;
    let discCheck = 1 - discount;
    if(bought>limit){
        total = total * discCheck;
        return total;
    }else{
        return total;
    }
}

console.log(discount(3000, 0.15, 2000));
console.log(discount(1000, 0.15, 2000));

// Comprobar si una cadena de texto está vacía.

console.log("Ejercicio 9"); 

const string = (characters) => {
    if(characters === ""){
        console.log("La cadena está vacía");
    }else{
        console.log("La cadena no está vacía.");
    }
}

string("");
string("Hola caracola");

// Determinar si un año es bisiesto.

console.log("Ejercicio 10");

const bisiesto = (year) => {
    if(year%4 === 0){
        console.log("El año es bisiesto.");
    }else{
        console.log("El año no es bisiesto.")
    }
}

bisiesto(2000);
bisiesto(1997);