function descodificar_x11(x11) {
    var x1 = '';
  
    if(x11.length %2 == 0){ // verificar si la cadena de caracteres es impar o no, se recoje la posicion del ultimo caracter
        var posicionUltimoCaracter = x11.length -1;
    }else{
        var posicionUltimoCaracter = x11.length -2;
    }
    var x1='';
    for (let i = 0; i < x11.length; i+=2) {
        x1+=x11[i];
    }
    for (let i = posicionUltimoCaracter; i >= 0; i-=2) {
        x1+=x11[i];
    }
    return x1;
}
const x11 = 'BnodJo s, dBneam'; // No se deben poner [] porque sino x1 se trata como un solo elemento.
const x1 = descodificar_x11(x11);
console.log(x1); // BoJ ,dnameB sodn