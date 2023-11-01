package Day50.TareaFP;

import java.text.DecimalFormat;
import java.util.Scanner;

public class tarea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DecimalFormat decimalFormat = new DecimalFormat("0.00");

        System.out.println("Este es un simulador de hipoteca\n");

        // PRIMERO: Simulación de diferentes opciones de interés y plazo. Condiciones de 20 a 25 años y un interés inicial al 3%.
        System.out.print("Introduce el monto del préstamo (euros): ");
        double prestamo = scanner.nextDouble();
        double interes = 3.0; // Tasa de interés inicial
        int plazoMin = 20;
        int plazoMax = 25;
        double incrementoInteres = 0.5;

        System.out.println("\nOpciones de préstamo:");

        while (interes <= 5.0) {
            for (int plazo = plazoMin; plazo <= plazoMax; plazo++) {
                double cuotaAnual = calcularCuotaAnual(prestamo, interes, plazo);
                System.out.println("Plazo: " + plazo + " años - Interés: " + decimalFormat.format(interes) + "% - Cuota Anual: " + decimalFormat.format(cuotaAnual));
            }
            interes += incrementoInteres;
        }

        // SEGUNDO: Cálculos detallados del préstamo. SIMULACIÓN DE DATOS COMO EN UNA FEIN BANCARIA USANDO FÓRMULA APUNTES. 
        
        System.out.println("\nSEGUNDO: Cálculos detallados del préstamo");

        System.out.print("Introduce el monto del préstamo (euros): ");
        prestamo = scanner.nextDouble();
        System.out.print("Introduce la tasa de interés anual a pagar (%): ");
        double tasaInteres = scanner.nextDouble();
        System.out.print("Introduce el plazo del préstamo (años): ");
        int duracion = scanner.nextInt();

        System.out.println("\nAño\tCapital Pendiente\tCuota Anual\tIntereses\tAmortización");

        for (int año = 1; año <= duracion; año++) {
            double cuotaAnual = calcularCuotaAnual(prestamo, tasaInteres, duracion);
            double interesAnual = calcularInteresesAnuales(prestamo, tasaInteres);
            double amortizacionAnual = cuotaAnual - interesAnual;
            System.out.println(año + "\t\t" + decimalFormat.format(prestamo) + "\t" + decimalFormat.format(cuotaAnual) + "\t" +decimalFormat.format(interesAnual) + "\t\t" + decimalFormat.format(amortizacionAnual));
            prestamo -= amortizacionAnual;
        }
    }

    public static double calcularCuotaAnual(double prestamo, double interes, int duracion) {
        double i = interes / 100;
        return (prestamo * i) / (1 - Math.pow(1 + i, -duracion));
    }

    public static double calcularInteresesAnuales(double prestamo, double interes) {
        return prestamo * (interes / 100);
    }
}
