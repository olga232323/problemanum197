// descodificación x'
function descodificar_x1() {
    const inputElement = document.getElementById("desencriptarx1");
    const resultadoElement = document.getElementById("resultadox1");
    const x1 = inputElement.value;

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
        } else {
            x += x1[j]; // el caracter (j) que esta leyendo es vocal
            j++; // suma el caracter j a la array x
        }
    }
    resultadoElement.textContent = x;
}

// descodificación x''
function descodificar_x11() {
    const inputElement = document.getElementById("desencriptarx11");
    const resultadoElement = document.getElementById("resultadox11");
    const x11 = inputElement.value;

    var x1 = '';

    if (x11.length % 2 === 0) { // verificar si la cadena de caracteres es impar o no, se recoje la posicion del ultimo caracter
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

    resultadoElement.textContent = x1;
}