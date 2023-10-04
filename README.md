# problemanum197

_Activitat 4    Problema número 197_

## Realizado con

* VSCode
* JavaScript
* HTML
## Diagrama con pseint
Hemos decidido crear el diagrama de la desencriptación de x'' -> x' con pseint.
![Alt text](desencriptar_x11.png?raw=true "Title")

## Explicación x' -> x
Para demostrar que entendemos el funcionamiento del script de desencriptar x', explicaremos brevemente su funcionamiento.

Primero inicializa una cadena vacía llamada x y un contador j en cero.
Define un conjunto de caracteres llamado caracteresCoincidentes que contiene tanto vocales minúsculas como mayúsculas.
Utiliza un bucle para recorrer la cadena de entrada x1 carácter por carácter.
Cuando encuentra un carácter que no es una vocal (no está en caracteresCoincidentes), crea una secuencia de caracteres sucesión que consiste en los caracteres no vocales consecutivos.
En cada ejecución, invierte la secuencia sucesión y la agrega a la cadena x.
En el caso de que el carácter actual sea una vocal, simplemente lo agrega a la cadena x.
Continúa este proceso hasta que se haya recorrido toda la cadena de entrada x1.
Finalmente, la función devuelve la cadena x modificada.

En resumen, el script invierte las secuencias de caracteres que no son vocales en la cadena de entrada, mientras que las vocales permanecen en su lugar original.

## Autores ✒

* **Luca Lusuardi Masip** - *x'' -> x'*
* **Olga Clemente Molina** - *x' -> x*
