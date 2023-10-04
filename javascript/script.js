// descodificación x'

function descodificar_x1(x1) {


    var x = '';
    var j = 0;
    var caracteresCoincidentes = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    while (j < x1.length) {
        if (!caracteresCoincidentes.includes(x1[j])) { //el caracter (j) que esta leyendo no es vocal (no esta en caracteresCoincidentes)
            let sucesion = '';
            while (j < x1.length && !caracteresCoincidentes.includes(x1[j])) {
                sucesion += x1[j]; // crea la cadena sucesion sumando el caracter que no es vocal
                j++;
            }
            x += sucesion.split('').reverse().join(''); // Invertir la sucesión split separa los caracteres, reverse les da la vuelta en espejo y join los vuelve a juntar.
        } else { // el caracter (j) que esta leyendo es vocal
            x += x1[j]; // suma el caracter j a la array x
            j++;
        }

    }
    return x;
}
const resultadox1 = descodificar_x1(x1);
console.log(resultadox1);

// descodificación x''

function descodificar_x11(x11) {
    var x1 = '';

    if (x11.length % 2 == 0) { // verificar si la cadena de caracteres es impar o no, se recoje la posicion del ultimo caracter
        var posicionUltimoCaracter = x11.length - 1;
    } else {
        var posicionUltimoCaracter = x11.length - 2;
    }
    var x1 = '';
    for (let i = 0; i < x11.length; i += 2) {
        x1 += x11[i];
    }
    for (let i = posicionUltimoCaracter; i >= 0; i -= 2) {
        x1 += x11[i];
    }
    return x1;
}
const resultadox11 = descodificar_x11(x11);
console.log(resultadox11); // BoJ ,dnameB sodn