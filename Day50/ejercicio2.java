package Day50;

// 2) Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que funciona.


import java.util.Scanner;

public class ejercicio2 {
    
    public static void main(String[] args){
            int a, b;
            Scanner sc = new Scanner(System.in);

            System.out.print("Introduce el valor del primer elemento: ");
            a = sc.nextInt();
            System.out.print("Introduce el valor del segundo elemento: ");
            b = sc.nextInt();

            if(a>b){
                System.out.println("De los dos números el mayor es: "+a);
            }else if(a<b){
                System.out.println("De los dos números el mayor es: "+b);
            }else{
                System.out.println("Ambos números son iguales.");
            }
          
    }


    
}
