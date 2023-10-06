//Nivel fácil. 

//Ejercicio 1: Imprimir "Hola, mundo!" en la consola por medio de una función.

const saluda = () =>{
    console.log("Hola mundo!");
}

console.log("Ejercicio 1 - Nivel fácil");
saluda();

// Ejercicio 2:Calcular la suma de dos números.

const suma = (a, b) => {
    let resultado = a+b;
    return resultado;
}

console.log("Ejercicio 2 - Nivel fácil");
console.log(suma(3,4));

// Ejercicio 3: Calcular el producto de dos números.

const product = (a, b) => {
    return a*b;
}

console.log("Ejercicio 3 - Nivel fácil");
console.log(product(3,4));


// Ejercicio 4: Calcular el área de un triángulo.

const areaT = (b, h) => {
    return (b*h)/2
}

console.log("Ejercicio 4 - Nivel fácil");
console.log(areaT(3,4));


// Ejercicio 5: Calcular el área de un círculo.

const areaC = (r) => {
    return Math.PI * (r**2);
}

console.log("Ejercicio 5 - Nivel fácil");
console.log(areaC(4));

// Ejercicio 6: Convertir grados Celsius a Fahrenheit.

const gradeCToF = (t) => {
    return (t*1.8) + 32;
}

console.log("Ejercicio 6 - Nivel fácil");
console.log(gradeCToF(1));

// Ejercicio 7: Encontrar el mayor de dos números.

const higherNumb = (a, b) => {
    if(a>b){
        console.log(`El número ${a} es mayor que ${b}`);
    }
    else if(a<b){
        console.log(`El número ${b} es mayor que ${a}`);
    }
    else{
        console.log("Ambos son iguales");
    }
}


console.log("Ejercicio 7 - Nivel fácil");
higherNumb(3,5);
higherNumb(8,2);
higherNumb(2,2);

// Verificar si un número es par o impar.

const numbEven = (a) => {
    if(a%2 === 0){
        console.log("El número es par")
    }else{
        console.log("El número es impar.")
    }
}

console.log("Ejercicio 8 - Nivel fácil");
numbEven(8);
numbEven(9)

// Ejercicio 9: Imprimir los números del 1 al 10.

const firstTwenty = () => {
    for(let i = 1; i <=10; i++){
        console.log(i);
    }
}

console.log("Ejercicio 9 - Nivel fácil");
firstTwenty();


// Ejercicio 10: Imprimir los números pares del 1 al 20.

const firstEvenTwenty = () => {
    for(let i = 1; i <=20; i++){
        if(i%2===0){
            console.log(i);
        }
    }
}

console.log("Ejercicio 10 - Nivel fácil");
firstEvenTwenty();


// Nivel Intermedio:

// Ejercicio 1: Calcular el factorial de un número.

const factorial = (a) => {
    let result = 1;
    if(a===0){
        console.log(result);
    }else{
        for(let i = a; i>=1; i--){
            result*=i;
        }
        console.log(result)
    }
}

console.log("Ejercicio 1 - nivel Intermedio");
factorial(5);
factorial(100);
factorial(0);

// Calcular la suma de los primeros n números naturales.

function suma1(a){
    let result = 0;
    for(let i = a; i>=0; i--){
        result += i;
    }
    return result;
}

console.log("Ejercicio 2 - nivel Intermedio");
console.log(suma1(5));
console.log(suma1(100));
console.log(suma1(0));

// Ejercicio 3: Verificar si un número es primo.

const numPrim = (n) =>{
    let cont = 0;
    for(let i = 1; i <= n; i++){
        if(n%i === 0){
            cont++
        }
    }
    if(cont === 2){
        console.log("El número es primo")
    }else{
        console.log("El número no es primo.")
    }
}

console.log("Ejercicio 3 - nivel Intermedio");
numPrim(3)
numPrim(12)
numPrim(47)


// Ejercicio 4: Encontrar el máximo común divisor (MCD) de dos números.

const encontrarMCD = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return encontrarMCD(b, a % b);
    }
};

console.log("Ejercicio 4 - nivel Intermedio");

const num1 = 24;
const num2 = 36;
const mcd = encontrarMCD(num1, num2);
console.log(`El MCD de ${num1} y ${num2} es: ${mcd}`);
const num3 = 387;
const num4 = 489;
const mc1 = encontrarMCD(num3, num4);
console.log(`El MCD de ${num3} y ${num4} es: ${mc1}`);

// Ejercicio 5: Calcular la longitud de una cadena de texto.

const stringLength = (string) => {
    return string.length
}

console.log("Ejercicio 5 - nivel Intermedio");
console.log(stringLength("Hola"));
console.log(stringLength("Hola esto es una prueba de más caracteres"));


// Ejercicio 6: Invertir una cadena de texto.

const reverseString = (string) => {
    let mensaje = "";
    for (let i = string.length - 1; i >= 0; i--) {
        mensaje += string[i];
    }
    return mensaje;
};

console.log("Ejercicio 6 - nivel Intermedio");
console.log(reverseString("Hola"));


// Ejercicio 7: Contar la cantidad de vocales en una cadena de texto.

const vowelCount = (string) => {
    let count = 0;
    let string2 = string.toLowerCase();
    for(let i = 0; i < string2.length; i++){
        if(string2[i]==="a" || string2[i]==="e" || string2[i]==="i" || string2[i]==="o" || string2[i]==="u"){
            count+=1;
        }
    }
    return "Hay un total de: "+ count + " vocales."
}

console.log("Ejercicio 7 - nivel Intermedio");
console.log(vowelCount("Hola"));

// Ejercicio 8: Calcular la potencia de un número.

const potencia = (a,b) =>{
    return a**b;
}

console.log("Ejercicio 8 - nivel Intermedio");
console.log(potencia(2,3));
console.log(potencia(4,6));
console.log(potencia(5,3));
console.log(potencia(3,0));

// Ejercicio 9: Crear un array e imprimir sus elementos.

const arrayPrint = (array) => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

console.log("Ejercicio 9 - nivel Intermedio");
const array1 = [10, 'hola', true, {nombre: 'Juan', edad: 30}, [1, 2, 3]];
const array2 = ['manzana', 'banana', 'uva', 'pera'];

arrayPrint(array1);
arrayPrint(array2);

// Ejercicio 10: Sumar todos los elementos de un array.

const arraySum = (array) => {
    let result = 0;
    for(let i = 0; i<array.length; i++){
        result+=array[i];
    }
    return result;
}

console.log("Ejercicio 10 - nivel Intermedio");
const array3 = [1,2,3,4,5,6,7,8,9,0];
const array4 = [3,4,5,6,77,88,99];
console.log(arraySum(array3));
console.log(arraySum(array4));


