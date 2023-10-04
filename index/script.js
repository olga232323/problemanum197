// descodificación x'
function descodificar_x1() {
    const inputElement = document.getElementById("desencriptarx1");
    const resultadoElement = document.getElementById("resultadox1");
    const x1 = inputElement.value;

    var x = '';
    var j = 0;
    var caracteresCoincidentes = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    while (j < x1.length) {
        if (!caracteresCoincidentes.includes(x1[j])) {
            let sucesion = '';
            while (j < x1.length && !caracteresCoincidentes.includes(x1[j])) {
                sucesion += x1[j];
                j++;
            }
            x += sucesion.split('').reverse().join('');
        } else {
            x += x1[j];
            j++;
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
    var posicionUltimoCaracter;

    if (x11.length % 2 === 0) {
        posicionUltimoCaracter = x11.length - 1;
    } else {
        posicionUltimoCaracter = x11.length - 2;
    }

    for (let i = 0; i < x11.length; i += 2) {
        x1 += x11[i];
    }

    for (let i = posicionUltimoCaracter; i >= 0; i -= 2) {
        x1 += x11[i];
    }

    resultadoElement.textContent = x1;
}