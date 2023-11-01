package Day50;

// 4) Haz una aplicación que calcule el área de un círculo(pi*R2). El radio se pedirá por teclado (recuerda pasar de String a double con Double.parseDouble). Usa la constante PI y el método pow de Math.

import java.util.Scanner;
import java.lang.Math;

public class ejercicio4 {
    
    public static void main (String[] args){
        int R;
        double area;

        Scanner sc = new Scanner(System.in);

        System.out.print("Introduce el valor del radio del cículo: ");
        R = sc.nextInt();
        area = Math.PI * Math.pow(R, 2);

        System.out.println("El área del cículo final es: " + area);

    }
}
