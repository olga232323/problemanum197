const x1 = 'BoJ ,dnameB sodn'; // Quitamos los corchetes y comas
let x = '';
let j = 0;
const caracteresCoincidentes = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

while (j < x1.length) { // Cambiamos x1.length
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

console.log(x); // Bond, James Bond
