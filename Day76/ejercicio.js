//Primer ejercicio Mouredev.

const recursivo = (n) =>{
    if(n<=0){
        return;
    }else{
        console.log(n);
        recursivo(n-1);
    }
    
}

recursivo(100);


//Segundo ejercicio. Calcular el factorial de un número.

const factorial = (n) => {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); 


//Tercer ejercicio. Fibonacci y posicion.

const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6));