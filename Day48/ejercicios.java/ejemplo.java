//Pedir al usuario su edad y mostrar la que tendrá el próximo año.

import java.util.Scanner;

public class ejemplo {

    public static void main(String[] args){
        int edad;
        Scanner sc = new Scanner(System.in);

        System.out.println("Introduce tu edad: ");
        edad = sc.nextInt();
        edad = edad  +1;

        System.out.println("El próximo año tu edad sera de "+ edad+ " años.");

    }
    
}
