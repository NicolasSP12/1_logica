var arreglo = [2, 5, 19, 20, 33, 44, 4, 6, 9, 19, 35]

console.log("For ==>")
for ( var a = 0 ; a < arreglo.length ; a++){
    var numero = arreglo[a]
    if (numero % 2 === 0){
        console.log("Pares: ", arreglo[a])
    }
}
console.log("While ==>")
var b = 0
while(b < arreglo.length){
    var numero2 = arreglo[b]
    if(numero2 % 2 !== 0){
        console.log("Impar: ", arreglo[b])
    }
    b++
}