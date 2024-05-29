function dobrarNumeros(lista) {
    var listaDobrada = lista.map(function(numero) {
        return numero * 2;
    });

    return listaDobrada;
}

var numeros = [1, 2, 3, 4, 5];

var numerosDobrados = dobrarNumeros(numeros);

console.log(numerosDobrados);
