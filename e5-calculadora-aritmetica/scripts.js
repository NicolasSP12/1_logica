var resultado = 0
var numero1 = parseInt(prompt("Ingrese el primer numero"))
var numero2 = parseInt(prompt("Ingrese el segundo numero"))
var operacion = prompt("Ingrese el signo que quiere aplicar")

// if( operacion == "+") {
//     resultado = numero1 + numero2
// } else if ( operacion == "-"){
//     resultado = numero1 - numero2
// } else if( operacion == "*"){
//     resultado = numero1 * numero2
// } else if( operacion == "/"){
//     resultado = numero1 / numero2
// } else{
//     console.log("Ingrese un numero valido")
// }

switch(operacion){
    case "+":
        resultado = numero1 + numero2;
    break;
    case "-":
        resultado = numero1 - numero2;
    break;
    case "*":
        resultado = numero1 * numero2;
    break;
    case "/":
        resultado = numero1 / numero2;
    break;
    default:
        console.log("Ingreso algo incorrecto");
    break;
}

console.log("resultado = ", resultado)