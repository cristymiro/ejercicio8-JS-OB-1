/*
1. En este ejercicio tienes que crear varias funciones. Las funciones tienen que representar las operaciones básicas de una calculadora: sumar, restar, multiplicar y dividir.

En la función de dividir, tendréis que realizar una comprobación para verificar que el segundo número no sea un 0, en el caso de que sea un 0 tendréis que mostrar el mensaje “No se puede dividir por cero”.

Tienes que mostrar los resultados por consola.

*/


function sumar(){
    let num1 = parseInt(prompt('Introduce un número para sumar'))
    let num2 = parseInt(prompt('Introduce otro número para sumar'))
    let resultado = num1 + num2
    console.log(`La suma del número ${num1} + ${num2} es igual a ${resultado}`)
}

sumar();

function restar(){
    let num1 = parseInt(prompt('Introduce un número para restar'))
    let num2 = parseInt(prompt('Introduce otro número para restar'))
    let resultado = num1 - num2
    console.log(`La resta del número ${num1}  - ${num2} es igual a ${resultado}`)
}

restar();

function multiplicar(){
    let num1 = parseInt(prompt('Introduce un número para multiplicar'))
    let num2 = parseInt(prompt('Introduce otro número para multiplicar'))
    let resultado = num1 * num2
    console.log(`La multiplicación del número ${num1} x ${num2} es igual a ${resultado}`)
}

multiplicar();

function dividir(){
    let num1 = parseInt(prompt('Introduce un número para dividir'))
    let num2 = parseInt(prompt('Introduce otro número para dividir'))
    let resultado = num1 / num2
    console.log(`La división del número ${num1} / ${num2} es igual a ${resultado}`)
    if(num2===0){
        console.log('No podemos dividir entre 0')
    }
}

dividir();
