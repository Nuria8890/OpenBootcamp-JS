//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let i = 1
let max = 10
let factorial = 1
while (i<=max) {
    console.log(factorial);
    i++;
    factorial = factorial * i;
    if (factorial > 40500){
        break;
    }
}