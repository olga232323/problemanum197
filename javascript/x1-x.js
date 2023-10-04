function desencriptar_x1(x1) {
    var x = '';
    var j = 0;
    var caracteresCoincidentes = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    while (j < x1.length){
        if (!caracteresCoincidentes.includes(x1[j])){ //el caracter (j) que esta leyendo no es vocal (no esta en caracteresCoincidentes)
            let sucesion = '';
            while (j < x1.length && !caracteresCoincidentes.includes(x1[j])) {
                sucesion += x1[j]; // crea la cadena sucesion sumando el caracter que no es vocal
                j++;
            }
            x += sucesion.split('').reverse().join(''); // Invertir la sucesión split separa los caracteres, reverse les da la vuelta en espejo y join los vuelve a juntar.
        }else{ // el caracter (j) que esta leyendo es vocal
            x += x1[j]; // suma el caracter j a la array x
            j++;
        }

    }
    return x;
}
const x1 = 'BoJ ,dnameB sodn'; // No se deben poner [] porque sino x1 se trata como un solo elemento.
const x = desencriptar_x1(x1);
console.log(x);