Realizar un simulador de hipoteca usando funcionalidades de las clases Math y Scanner. 

La introducción al programa será la siguiente:

Este es un simulador de hipoteca

PRIMERO

Solicita el monto del préstamo (euros) e imprime una tabla con difrentes opciones según el tipo de interés y plazo.

SEGUNDO

Solicita el monto del préstamo (euros), la tasa de interés anual a pagar (%) y el plazp (años). Calcula para cada año, el capital pendiente y la cuota a pagar, interés y amortización.


CONDICIONES PRIMERA PARTE:  Los cálculos se realizarán para plazos entre 20 y 25 años y los intereses irán desde un 3.0% a un 5.0%, incrementándose un 0,5% cada vez .

Todos los números deberán aparecer SIEMPRE con dos decimales y para ello podemos utilizar estas líneas de código:

DecimalFormat = new DecimalFormat("0.00");

String resultado = decimalFormat(numero);

se puede utilizar usando la siguiente importación:

import java.text.DecimalFormat;


PARA EL SEGUNDO PUNTO: Por último, pedirá la tasa de interés (%) que se va a pagar por el préstamo y su duración (años), y calculará el capital pendiente, la cuota anual, los intereses a pagar y el capital amortizado para cada año del préstamo.


Para realizar todos estos cálculos las fórmulas que hay que utilizar son:

Cuota Anual = (Préstamo*i ) / [1-(1+i)-duración]
Esta será la cuota que se pagará cada año. Todos los años será la misma y para calcularla el interés estará en tanto por uno. Es decir, i = interés / 100.
El capital pendiente al principio será el total del préstamo pero cada año se reducirá en el valor de la amortización de ese año hasta llegar a 0.
Los intereses de cada año serán igual al capital pendiente de ese año por el interés en tanto por uno, es decir, interés / 100.
La amortización de cada año será igual a la cuota anual menos los intereses pagados ese año. Los primeros años, los intereses serán mayores y la amortización será menor y con el paso del tiempo, los intereses se irán reduciendo y la amortización aumentará.