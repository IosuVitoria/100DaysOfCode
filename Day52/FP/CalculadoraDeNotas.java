package Day52.FP;

import java.util.Scanner;

public class CalculadoraDeNotas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("¡Bienvenido a la Calculadora de Notas!");

        // Obtener la nota parcial y los puntos extra
        double notaParcial = obtenerNota("parcial", scanner);
        int puntosExtraParcial = obtenerPuntosExtra("parcial", scanner);

        // Calcular la nota final del parcial
        double notaFinalParcial = calcularNotaFinal(notaParcial, puntosExtraParcial);

        // Obtener la nota del examen final y los puntos extra
        double notaExamenFinal = obtenerNota("examen final", scanner);
        int puntosExtraExamenFinal = obtenerPuntosExtra("examen final", scanner);

        // Calcular la nota final del examen final
        double notaFinalExamenFinal = calcularNotaFinal(notaExamenFinal, puntosExtraExamenFinal);

        // Obtener la información de las Unidades Didácticas
        double totalUDs = obtenerNotasUDs(scanner);

        // Calcular la nota final ponderada
        double notaFinalPonderada = calcularNotaFinalPonderada(notaFinalParcial, notaFinalExamenFinal, totalUDs);

        // Calcular la nota final total
        double notaFinalTotal = calcularNotaFinalTotal(notaFinalPonderada);

        // Mostrar la nota en la escala de 0 a 4 y un mensaje correspondiente
        mostrarNotaEnEscalaYMensaje(notaFinalTotal);

        scanner.close();
    }

    public static double obtenerNota(String tipo, Scanner scanner) {
        System.out.print("Ingrese la nota del " + tipo + " (sobre 100): ");
        return scanner.nextDouble();
    }

    public static int obtenerPuntosExtra(String tipo, Scanner scanner) {
        System.out.print("¿Tiene puntos extra en el " + tipo + "? (0 si no, otro número si sí): ");
        return scanner.nextInt();
    }

    public static double calcularNotaFinal(double nota, int puntosExtra) {
        nota = Math.min(100, nota + puntosExtra); // Limitar la nota a 100
        return (nota / 100) * 100; // Calcular la nota final
    }

    public static double obtenerNotasUDs(Scanner scanner) {
        System.out.print("¿Cuántas Unidades Didácticas ha realizado el estudiante? ");
        int numUDs = scanner.nextInt();
        double totalNotasUDs = 0;
        for (int i = 1; i <= numUDs; i++) {
            System.out.print("Ingrese la calificación de la UD #" + i + ": ");
            double calificacionUD = scanner.nextDouble();
            System.out.print("Ingrese el peso de la UD #" + i + " (sobre 100): ");
            double pesoUD = scanner.nextDouble();
            totalNotasUDs += (calificacionUD * pesoUD / 100);
        }
        return totalNotasUDs;
    }

    public static double calcularNotaFinalPonderada(double notaParcial, double notaExamenFinal, double totalNotasUDs) {
        return 0.4 * notaParcial + 0.6 * notaExamenFinal + totalNotasUDs;
    }

    public static double calcularNotaFinalTotal(double notaFinalPonderada) {
        return notaFinalPonderada;
    }

    public static void mostrarNotaEnEscalaYMensaje(double notaFinalTotal) {
        System.out.printf("La nota final es: %.1f\n", notaFinalTotal);
        double notaEscala = (notaFinalTotal / 100) * 4.0;

        if (notaFinalTotal == 100) {
            System.out.println("Excelente trabajo");
        } else if (notaEscala >= 3.5) {
            System.out.println("Muy buen trabajo");
        } else if (notaEscala >= 3.0) {
            System.out.println("Buen trabajo");
        } else if (notaEscala >= 2.25) {
            System.out.println("Todavía tienes trabajo por hacer");
        } else {
            System.out.println("Otra vez será");
        }
    }
}
