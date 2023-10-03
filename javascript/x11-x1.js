function decodificarPalabra(palabraCodificada) {
    const longitud = palabraCodificada.length;
    let palabraOriginal = '';
    let indiceInicio = 0;
    let indiceFinal = longitud - 1;

    while (indiceInicio <= indiceFinal) {
        palabraOriginal += palabraCodificada[indiceInicio++];
        if (indiceInicio <= indiceFinal) {
            palabraOriginal += palabraCodificada[indiceFinal--];
        }
    }

    return palabraOriginal;
}

const palabraCodificada = 'BoJ ,dnameB sodn'; // La palabra a decodificar
const palabraOriginal = decodificarPalabra(palabraCodificada);
console.log(palabraOriginal); // Debería imprimir 'BoJ ,dnameB sodn'