// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.


public class ejercicio3 {
    public static String abbrevName(String name) {
        // Dividimos el nombre en dos partes usando el espacio como separador
        String[] intermediate = name.split(" ");

        // Verificamos si hay al menos dos partes (nombre y apellido)
        if (intermediate.length >= 2) {
            // Tomamos el primer carácter de cada parte y los convertimos a mayúsculas
            char firstInitial = intermediate[0].charAt(0);
            char secondInitial = intermediate[1].charAt(0);

            // Creamos las iniciales separadas por un punto
            String conversion = Character.toUpperCase(firstInitial) + "." + Character.toUpperCase(secondInitial);

            return conversion;
        } else {
            // En caso de que no se cumpla el formato esperado, puedes manejarlo según tus necesidades.
            return "Formato incorrecto";
        }
    }

    public static void main(String[] args) {
        String fullName = "John Doe";
        String initials = abbrevName(fullName);
        System.out.println("Iniciales: " + initials);
    }
}