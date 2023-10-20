// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

public class ejercicio1{

    public static String boolToWord(boolean b) {
        return b ? "Sí" : "No";
    }

    public static void main(String[] args) {
        boolean valor = true; 
        String resultado = boolToWord(valor); 
        System.out.println(resultado); 
    }
}