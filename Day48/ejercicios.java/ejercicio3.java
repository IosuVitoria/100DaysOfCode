// Un frutero necesita calcular los beneficios anuales que obtiene de la venta de manzanas y peras. Por este motivo es necesario diseñar una aplicación que solicite las ventas en kilos de cada trimestre para cada fruta. La aplicación mostrará el importe total. Permite además la introducción dinámica del precio cada trimestre.

import java.util.Scanner;

public class ejercicio3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int trimestres = 4; 
        double[] precioManzanas = new double[trimestres];
        double[] precioPeras = new double[trimestres];
        double[] ventasManzanas = new double[trimestres];
        double[] ventasPeras = new double[trimestres];
        
      
        for (int i = 0; i < trimestres; i++) {
            System.out.print("Precio de las manzanas en el trimestre " + (i + 1) + ": ");
            precioManzanas[i] = sc.nextDouble();
            System.out.print("Precio de las peras en el trimestre " + (i + 1) + ": ");
            precioPeras[i] = sc.nextDouble();
        }
        
      
        for (int i = 0; i < trimestres; i++) {
            System.out.print("Ventas en kilos de manzanas en el trimestre " + (i + 1) + ": ");
            ventasManzanas[i] = sc.nextDouble();
            System.out.print("Ventas en kilos de peras en el trimestre " + (i + 1) + ": ");
            ventasPeras[i] = sc.nextDouble();
        }
        
      
        double[] importeTotalTrimestre = new double[trimestres];
        for (int i = 0; i < trimestres; i++) {
            importeTotalTrimestre[i] = (precioManzanas[i] * ventasManzanas[i]) + (precioPeras[i] * ventasPeras[i]);
        }
        
       
        double beneficioAnual = 0;
        for (int i = 0; i < trimestres; i++) {
            beneficioAnual += importeTotalTrimestre[i];
        }

        System.out.println("Beneficio anual total: $" + beneficioAnual);
    }
}
