function codificarPalabra(palabra) {
    const longitud = palabra.length;
    let palabraCodificada = '';
    let indiceInicio = 0;
    let indiceFinal = longitud - 1;

    while (indiceInicio <= indiceFinal) {
        palabraCodificada += palabra[indiceInicio++];
        if (indiceInicio <= indiceFinal) {
            palabraCodificada += palabra[indiceFinal--];
        }
    }

    return palabraCodificada;
}

const palabraOriginal = 'BoJ ,dnameB sodn'; // La palabra a codificar
const palabraCodificada = codificarPalabra(palabraOriginal);
console.log(palabraCodificada); // Debería imprimir 'BnodJo s, dBneam'