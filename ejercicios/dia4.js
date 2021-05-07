/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/

// Ejercicio 12

const primo=(numero=0)=>{
    if (numero<=0) return console.warn('Debes introducir un número entero mayor que 0')
    if (typeof numero!=='number') return console.warn('Debes introducir un número, no está permitodo caracteres')
    if (Number.isInteger(numero)===false) return console.warn('Debes introducir un número entero')

    primos=numero-1
    while ((numero % (primos))!== 0 || numero===2) {
        primos-=1
        if (primos === 1 || numero===2) return console.log(`Este número ${numero} es primo`)
    }
    console.log(`Este número ${numero} no es primo`)
}

primo(586)

// Ejercicio 13 

const parImpar=(numero=0)=>{
    if (numero<=0) return console.warn('Debes introducir un número entero mayor que 0')
    if (typeof numero!=='number') return console.warn('Debes introducir un número, no está permitodo caracteres')
    if (Number.isInteger(numero)===false) return console.warn('Debes introducir un número entero')

    if (numero%2===0) return (console.log(`El número ${numero} es par`))
}

//Ejercicio 14

const farCel=(numero,simbolo)=>{
    if (numero<=0) return console.warn('Debes introducir un número entero mayor que 0')
    if (typeof numero!=='number') return console.warn('Debes introducir un número, no está permitodo caracteres')
    if (Number.isInteger(numero)===false) return console.warn('Debes introducir un número entero')
    if (simbolo!=='f' || simbolo!=='c'|| simbolo!=='F'|| simbolo!=='C') return console.warn('Debes introducir una F o f para fahrenheit y una C o c para Celsius')

    if (simbolo==='f' || simbolo==='F') return console.log(((numero-32)* 5 / 9));
    if (simbolo==='c' || simbolo==='C') return console.log(((numero* 9 / 5) + 32))
}
simbolo='f'
farCel(25,simbolo)


