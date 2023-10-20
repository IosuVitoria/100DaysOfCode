import java.util.Random;
import java.util.Scanner;

public class adivinaNumero {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        String nombre;

        System.out.print("Por favor, ingresa tu nombre: ");
        nombre = scanner.nextLine();

        boolean jugarDeNuevo = true;

        while (jugarDeNuevo) {
            int numeroAdivinar = random.nextInt(100) + 1;
            int intentos = 0;
            boolean adivinado = false;

            System.out.println("Hola, " + nombre + "! Bienvenido al juego de adivinar el número del 1 al 100.");
            System.out.println("Intenta adivinar el número.");

            while (!adivinado) {
                System.out.print("Ingresa tu suposición: ");
                int suposicion = scanner.nextInt();
                intentos++;

                if (suposicion == numeroAdivinar) {
                    System.out.println("¡Felicidades, " + nombre + "! Adivinaste el número en " + intentos + " intentos.");
                    adivinado = true;
                } else if (suposicion < numeroAdivinar) {
                    System.out.println("El número es mayor. Sigue intentando.");
                } else {
                    System.out.println("El número es menor. Sigue intentando.");
                }
            }

            System.out.print("¿Quieres jugar de nuevo? (Sí/No): ");
            String respuesta = scanner.next();

            if (respuesta.equalsIgnoreCase("No")) {
                jugarDeNuevo = false;
                System.out.println("Gracias por jugar, " + nombre + ". ¡Hasta luego!");
            }
        }

        scanner.close();
    }
}
