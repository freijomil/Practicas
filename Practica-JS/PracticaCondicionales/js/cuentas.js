let ingresaNumero1 = "Ingresa un numero"

let numero1 = prompt(ingresaNumero1)

let ingresaNumero2 = "Ingresa otro numero"

let numero2 =prompt(ingresaNumero2)

function multiplicar (numero1, numero2) {
    let resultado = numero1*numero2
    return `El resultado de multiplicar ${numero1} y ${numero2} es: ${resultado} `
}
console.log(multiplicar)