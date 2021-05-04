/*1) Programa una función que cuente el número de caracteres de una cadena de texto(solo texto), pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/


//----Punto 1---//

let palabra = 'Hola Mundo'

function cuentaLetras(palabra) {
    if (/[^a-z A-Z]/.test(palabra)===false) {
        console.log(palabra.length);
    } else {
        console.log('Tienen que ser caracteres')
    }
}

cuentaLetras(palabra)

//----Punto 2---//

function trozo(palabra2,numero) {
    if (/[^a-z A-Z]/.test(palabra2)===false) {
        if (typeof numero==='number'&& Number.isInteger(numero)) {
            console.log(palabra2.slice(0,numero));
        } else {
            console.log('el trozo debe ser un número entero')
        }
    } else {
        console.log('El texto no puede contener letras ni carcateres especiales');
    }
}

let palabra2='Hola Mundo'
let numero=4
trozo(palabra2,numero)

//----Punto 3---//

function separando(palabra3,separador) {
    if (/[^a-z A-Z]/.test(palabra3)===false) {
        console.log(palabra3.split([separador]))
    } else {
        console.log('El texto no puede contener letras ni carcateres especiales');
    }
}

separando('Hola que tal', ' ')

//---Punto 4---//

function repetir(palabra4,repeticion) {
    if (/[^a-z A-Z]/.test(palabra4)===false) {
        if (typeof repeticion==='number' && Number.isInteger(repeticion)) {
            console.log((palabra4 + ' ').repeat(repeticion));
        } else {
            console.log('El número de repeticiones debe ser un número entero')
        }
    } else {
        console.log('El texto no puede contener letras ni carcateres especiales');
    }
}

let palabra4='Hola Mundo'
let repeticion= 3
repetir(palabra4,repeticion)

//--fin--//


