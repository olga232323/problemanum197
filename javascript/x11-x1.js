function codificarFrase(frase) {
    let caracteres = frase.split('');
    let longitud = caracteres.length;
    let codificado = new Array(longitud);

    for (let i = 0; i < longitud; i++) {
        if (i % 2 === 0) {
            codificado[i] = caracteres.shift();
        } else {
            codificado[i] = caracteres.pop();
        }
    }

    return codificado.join('');
}

// Solicitar al usuario que ingrese una frase
const fraseOriginal = prompt("Por favor, ingresa una frase:");
const fraseCodificada = codificarFrase(fraseOriginal);

// Mostrar la frase codificada
console.log("Frase original: " + fraseOriginal);
console.log("Frase codificada: " + fraseCodificada);