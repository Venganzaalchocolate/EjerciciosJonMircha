/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

// Ejercicio 9

const aleatorio=()=> {return console.log(Math.round(Math.random()*100+500))}
aleatorio()

// Ejercicio 10

const capicua=(numero=0)=>{
    if (numero===0) return console.warn('Debes introducir un número')
    if (typeof numero!=='number') return console.warn('Debes introducir un número, no está permitodo caracteres')
    if (Number.isInteger(numero)===false) return console.warn('Debes introducir un número entero')

    num=(`${numero}`)
    numCompara=num.split('').reverse().join('')
    if (num===numCompara) {
        console.log(`El número ${numero} es capicua`)
    } else {
        console.log(`El número ${numero} no es capicua`)} 
}

capicua(202)

// Ejercicio 11

const fcatorial=(numero=0)=>{
    if (numero<=0) return console.warn('Debes introducir un número entero mayor que 0')
    if (typeof numero!=='number') return console.warn('Debes introducir un número, no está permitodo caracteres')
    if (Number.isInteger(numero)===false) return console.warn('Debes introducir un número entero')

    resultado=numero
    
    while (numero!==1) {
        resultado= resultado * (numero-1)
        numero-=1
    }
    console.log(resultado)
}

fcatorial(5)
