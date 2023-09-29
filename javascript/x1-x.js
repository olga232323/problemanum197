const x1 = ['BoJ ,dnameB sodn'];
var x = '';
var j = 0;
var caracteresCoincidentes = ['aeiouAEIOU'];

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
console.log(x);