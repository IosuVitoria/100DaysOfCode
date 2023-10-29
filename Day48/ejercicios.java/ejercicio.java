//Diseñar una aplicación que solicite al usuario que introduzca una cantidad de segundos. La aplicación debe mostrar la cantidad de horas, minutos y segundos que hay en esa cantidad.

import java.util.Scanner;

public class ejercicio {
    public static void main(String[] args) {
        int totalSegundos, segundos, minutos, horas;
        Scanner sc = new Scanner(System.in);

        System.out.print("Introduce los segundos que deseas convertir: ");
        totalSegundos = sc.nextInt();

        // Calcular las horas, minutos y segundos
        horas = totalSegundos / 3600;
        minutos = (totalSegundos % 3600) / 60;
        segundos = totalSegundos % 60;

        System.out.println("Horas: " + horas);
        System.out.println("Minutos: " + minutos);
        System.out.println("Segundos: " + segundos);
    }
}


// import java.util.Scanner; SEGUNDA VERSIÓN QUE EVITA ERRORES

// public class Ejercicio {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int totalSegundos, segundos, minutos, horas;

//         try {
//             System.out.print("Introduce los segundos que deseas convertir: ");
//             totalSegundos = sc.nextInt();

//             if (totalSegundos < 0) {
//                 System.out.println("¡Error! No se permiten números negativos.");
//             } else if (totalSegundos > 86400) { 
//                 System.out.println("¡Error! El número de segundos es demasiado grande.");
//             } else {
//                 horas = totalSegundos / 3600;
//                 minutos = (totalSegundos % 3600) / 60;
//                 segundos = totalSegundos % 60;

//                 System.out.println("Horas: " + horas);
//                 System.out.println("Minutos: " + minutos);
//                 System.out.println("Segundos: " + segundos);
//             }
//         } catch (java.util.InputMismatchException e) {
//             System.out.println("¡Error! Debes ingresar un número entero válido.");
//         }
//     }
// }
