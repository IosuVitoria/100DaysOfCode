// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

public class ejercicio1{

    // Método que toma un valor booleano y devuelve una cadena "Sí" para true o "No" para false.
    public static String boolToWord(boolean b) {
        // Usamos el operador ternario para simplificar la lógica.
        // Si 'b' es verdadero, devuelve "Sí"; de lo contrario, devuelve "No".
        return b ? "Sí" : "No";
    }

    public static void main(String[] args) {
        // Ejemplo de uso del método boolToWord.
        boolean valor = true; // Cambia el valor de 'valor' según tus necesidades.
        String resultado = boolToWord(valor); // Llamamos al método y almacenamos el resultado.
        System.out.println(resultado); // Imprimimos el resultado en la consola.
    }
}