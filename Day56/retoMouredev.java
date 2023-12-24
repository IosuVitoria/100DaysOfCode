import java.util.Scanner;

public class retoMouredev {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        do {
            System.out.print("Ingrese una palabra (mayúscula): ");
            String palabraUsuario = scanner.nextLine().toUpperCase();

            int valorTotal = calcularValor(palabraUsuario);

            if (valorTotal < 100) {
                System.out.println("El valor de " + palabraUsuario + " no ha llegado a 100. Inténtelo de nuevo.");
            } else {
                System.out.println("Se ha llegado al valor requerido.");
                break;
            }
        } while (true);

        scanner.close();
    }

    private static int calcularValor(String palabra) {
        int valorTotal = 0;

        for (int i = 0; i < palabra.length(); i++) {
            char letra = palabra.charAt(i);
            int valorLetra = obtenerValorLetra(letra);
            valorTotal += valorLetra;
        }

        return valorTotal;
    }

    private static int obtenerValorLetra(char letra) {
        // Asumimos que las letras ingresadas son mayúsculas
        // Restamos el valor ASCII de 'A' para obtener la posición relativa en el
        // alfabeto
        return letra - 'A' + 1;
    }
}
