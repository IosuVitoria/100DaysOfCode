package Day52.FP;

//Enlace de video de youtube a la valoración final: https://www.youtube.com/watch?v=DVw3-3-jrvc

import java.util.Scanner;

public class NotaMedia {
    
    public static void main (String[] args){

        //Iniciación del programa.
        System.out.println("Este programa lee las calificaciones de exámenes (parcial y final) y Unidades Didácticas ");
        System.out.println("para calcular la nota final del módulo.");
        System.out.println("También podría hacerlo para 2 estudiantes y comparar sus notas. Funcionaría sin problemas.");
        System.out.println(" ");

        //Declaración de variables por secciones y scanner de lectura.

        //Sección 1. NOTA EXAMEN PARCIAL.
        int check, extraPoints;
        double notaParcial,calculus, notaParcialFinal;

        //Sección 2. NOTA EXAMEN FINAL.
        int finalNota;
        double finalNotaCalculada;

        //Sección 3. NOTA FINAL DE EXÁMENES. Ambas sumadas.
        double sumaFinal;

        //Sección 4. CÁLCULO DE NOTA POR UNIDADES.
        double puntuacionFinal, pesoUnidad, pesoUnidadCalculo;
        int unidades, notaUnidad;

        //Sección 5. VALORACIÓN FINAL.
        double finalAsignatura, asignacionMec;

        //Herramienta de lectura de introducción de datos por parte de usuario.
        Scanner scanner = new Scanner(System.in);


        //Sección 1. Cálculo de la nota parcial.
        System.out.println("PARCIAL:");
        System.out.print("Introduce la calificación del examen (0-100): ");
        notaParcial = scanner.nextInt();
        System.out.print("¿Has obtenido puntos extra (1=Sí, 2=No)? ");
        check = scanner.nextInt();
        
        //Control de flujo para introducción de puntos extra en caso de entrada 1 por parte de usuario.
        if(check == 1){
            System.out.print("Introduce el total de puntos extra: ");
            extraPoints = scanner.nextInt();
            notaParcial = extraPoints + notaParcial;
        }

        //Controlar que los puntos extra no hagan que la nota supere los 100 puntos.
        if(notaParcial>100){
            notaParcial = 100;
        }

        System.out.println("Nota final = "+notaParcial+" / 100");
        //Con el 0.4 se ajusta el peso relativo del examen parcial.
        notaParcialFinal = notaParcial * 0.4;
        calculus = 100.0 * 0.4;
        System.out.println("Nota final ponderada = "+notaParcialFinal+" / "+calculus);
        System.out.println(" ");
        

        //Sección 2. Cálculo de nota del examen final.
        System.out.println("FINAL:");
        System.out.print("Introduce la calificación del examen (0-100): ");
        finalNota = scanner.nextInt();
        System.out.print("¿Has obtenido puntos extra (1=Sí, 2=No)? ");
        check = scanner.nextInt();
        
        //Control de flujo para introducción de puntos extra en caso de entrada 1 por parte de usuario.
        if(check == 1){
            System.out.print("Introduce el total de puntos extra: ");
            extraPoints = scanner.nextInt();
            finalNota = extraPoints + finalNota;
        }
        //Controlar que los puntos extra no hagan que la nota supere los 100 puntos.
        if(finalNota>100){
            finalNota = 100;
        }

        System.out.println("Nota final = "+finalNota+" / 100");

        //Con el 0.6 se ajusta el peso relativo del examen.
        finalNotaCalculada = finalNota * 0.6;
        calculus = 100.0 * 0.6;
        System.out.println("Nota final ponderada = "+finalNotaCalculada+" / "+calculus);
        System.out.println(" ");
        

        //Sección 3. Cálculo de la nota final atribuible a los exámenes de la asignatura. Es una suma sencilla.
        System.out.println("TOTAL EXAMENES");
        sumaFinal = finalNotaCalculada + notaParcialFinal;
        System.out.println("Nota final ponderada de los exámenes (sobre 100): "+sumaFinal);
        System.out.println(" ");
        
        
        //Sección 4. Cáculo de notas por unidades. 
        //Generación de introducción de datos dinámica en función de las unidades introducidas por el usuario.
        puntuacionFinal = 0;
        System.out.println("UNIDADES");
        System.out.print("Introduce el número de unidades: ");
        unidades = scanner.nextInt();
        for(int i = 1; i<=unidades ; i +=1){
            System.out.println("UD "+i);
            System.out.print("Introduce el peso de la UD: (0-100): ");
            pesoUnidad = scanner.nextDouble();
            pesoUnidadCalculo = pesoUnidad/100;
            System.out.print("Introduce la puntuación obtenida: (0-100): ");
            notaUnidad = scanner.nextInt();
            puntuacionFinal += notaUnidad*pesoUnidadCalculo;
        }

        System.out.println(" ");
        System.out.println("Total UDs");
        System.out.println("Nota final ponderada de las UDs (sobre 100): "+puntuacionFinal);
        System.out.println(" ");
        
        //Sección 5. Valoración final y asignación de comentario final de docente además de nota MEC. En este apartado se controla la muestra de 
        // decimales mediante el uso del formateo de strings con la siguiente sintaxis: System.out.printf("TOTAL FINAL: %.1f.\n", finalAsignatura);

        finalAsignatura = (puntuacionFinal*0.5) + (sumaFinal*0.5);

        //Mensaje final condicionado a la nota final de la asignatura.
        if ( finalAsignatura == 100){
            asignacionMec = 4.0;
            System.out.printf("TOTAL FINAL: %.1f.\n", finalAsignatura);
            System.out.println("La nota final en la escala del 0 al 4 es al menos: "+asignacionMec);
            System.out.println("Excelente trabajo");
        }
        else if ( finalAsignatura >= 85 ){
            asignacionMec = 3.0;
            System.out.printf("TOTAL FINAL: %.1f.\n", finalAsignatura);
            System.out.println("La nota final en la escala del 0 al 4 es al menos: "+asignacionMec);
            System.out.println("Muy buen trabajo");
        }
        else if ( finalAsignatura >= 75 && finalAsignatura <=84.99){
            asignacionMec = 2.0;
            System.out.printf("TOTAL FINAL: %.1f.\n", finalAsignatura);
            System.out.println("La nota final en la escala del 0 al 4 es al menos: "+asignacionMec);
            System.out.println("Buen trabajo");
        }
        else if ( finalAsignatura >= 60 && finalAsignatura <=74.99){
            asignacionMec = 1.5;
            System.out.printf("TOTAL FINAL: %.1f.\n", finalAsignatura);
            System.out.println("La nota final en la escala del 0 al 4 es al menos: "+asignacionMec);
            System.out.println("Todavía tienes trabajo por hacer");
        }
        else if ( finalAsignatura <60){
            asignacionMec = 0.0;
            System.out.printf("TOTAL FINAL: %.1f.\n", finalAsignatura);
            System.out.println("La nota final en la escala del 0 al 4 es al menos: "+asignacionMec);
            System.out.println("Otra vez será");
        }

        //Cerrar el escáner.Evitamos fuga de recursos.
        scanner.close(); 
    }
}