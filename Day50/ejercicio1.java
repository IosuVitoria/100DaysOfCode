package Day50;

// 1) Declara dos variables numéricas (con el valor que desees), muestra por consola la suma, resta, multiplicación, división y módulo (resto de la división).

import java.util.Scanner;

public class ejercicio1 {
    
    public static void main(String[] args){

            int a, b, suma, resta, multiplicacion;
            double division, resto;
            Scanner sc = new Scanner(System.in);

            System.out.println("Introduce el valor del primer elemento: ");
            a = sc.nextInt();
            System.out.println("Introduce el valor del segundo elemento: ");
            b = sc.nextInt();

            suma = a+b;
            resta = a-b;
            multiplicacion = a*b;
            division = a/b;
            resto = a%b;

            System.out.println("El resultado de la suma de " + a + " y " + b + "es "+ suma);
            System.out.println("El resultado de la resta de " + a + " y " + b + " es "+ resta);
            System.out.println("El resultado de la multiplicacion de " + a + " y " + b + " es "+ multiplicacion);
            System.out.println("El resultado de la division de " + a + " y " + b + " es "+ division);
            System.out.println("El resultado de calcular el resto de " + a + " entre " + b + " es "+ resto);




    }


    
}
