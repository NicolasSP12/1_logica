var matriz1 = [
    [1, 2, 4],
    [5, 2, 5],
    [8, 4, 3]
];

var matriz2 = [
    [4, 9, 0],
    [2, 7, 1],
    [1, 4, 1]
];

var resultado = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

//Sumar
for (var a = 0; a < matriz1.length; a++){
    for( var b = 0; b < matriz1.length; b++){
        resultado[a][b] = matriz1[a][b] + matriz2[a][b]
    }
}

console.log("Matriz 1:")
for( var c = 0; c < matriz1.length; c++){
    console.log(matriz1[c])
}

console.log("Matriz 2:")
for( var d = 0; d < matriz2.length; d++){
    console.log(matriz2[d])
}

console.log("Resultado:")
for( var f = 0; f < resultado.length; f++){
    console.log(resultado[f])
}
