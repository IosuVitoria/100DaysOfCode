package Day50;

// 3) Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida por consola. Por ejemplo: si introduzco «Fernando», me aparezca «Bienvenido Fernando».

import java.util.Scanner;

public class ejercicio3 {

    public static void main (String[] args){
        
        String name;

        Scanner sc = new Scanner(System.in);

        System.out.println("Ha llegado al programa más curioso de todos.");
        System.out.print("Pero antes dígame su nombre para poder saludarlo: ");
        name = sc.nextLine();

        System.out.println("Bienvenido "+name);

    }
    
}
