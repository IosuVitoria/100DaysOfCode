import java.util.Scanner;

public class ejercicio2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introduce el nombre del alumno: ");
        String nombre = sc.nextLine();

        System.out.print("Introduce la cantidad de asignaturas: ");
        int cantidadAsignaturas = sc.nextInt();
        sc.nextLine(); 

        String[] nombresAsignaturas = new String[cantidadAsignaturas];
        double[][] notas = new double[cantidadAsignaturas][3];

   
        for (int i = 0; i < cantidadAsignaturas; i++) {
            System.out.print("Introduce el nombre de la asignatura " + (i + 1) + ": ");
            nombresAsignaturas[i] = sc.nextLine();
        }


        for (int trimestre = 0; trimestre < 3; trimestre++) {
            System.out.println("Trimestre " + (trimestre + 1) + ":");
            for (int i = 0; i < cantidadAsignaturas; i++) {
                double nota = -1;
                while (nota < 0 || nota > 10) {
                    try {
                        System.out.print("Introduce la nota para " + nombresAsignaturas[i] + ": ");
                        nota = sc.nextDouble();
                        if (nota < 0 || nota > 10) {
                            System.out.println("¡Error! La nota debe estar entre 0 y 10.");
                        }
                    } catch (java.util.InputMismatchException e) {
                        System.out.println("¡Error! Debes ingresar un número válido entre 0 y 10.");
                        sc.nextLine(); 
                        nota = -1;
                    }
                }
                notas[i][trimestre] = nota;
            }
        }

        
        System.out.println("\nPromedio de Notas para " + nombre + " por Asignatura:\n");
        System.out.println("Asignatura\tTrimestre 1\tTrimestre 2\tTrimestre 3\tPromedio");

        for (int i = 0; i < cantidadAsignaturas; i++) {
            double suma = 0;
            System.out.print(String.format("%-14s\t", nombresAsignaturas[i])); 
            for (int trimestre = 0; trimestre < 3; trimestre++) {
                System.out.print(String.format("%.2f\t\t", notas[i][trimestre])); 
                suma += notas[i][trimestre];
            }
            double promedio = suma / 3;
            System.out.println(String.format("%.2f", promedio)); 
        }
    }
}
