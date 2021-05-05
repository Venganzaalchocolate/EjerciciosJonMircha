/*1) Programa una función que cuente el número de caracteres de una cadena de texto(solo texto), pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/


//----Punto 1---//

let palabra = 'hola'

function cuentaLetras(palabra) {
    if (/[^a-z A-Z]/.test(palabra)===false) {
        console.log(palabra.length);
    } else {
        console.log('Tienen que ser caracteres')
    }
}

cuentaLetras(palabra)

const cuentaLetrasArrow = (palabra) => 
(/[^a-z A-Z]/.test(palabra)===false)
    ? console.info(`El texto tiene ${palabra.length} caracteres`)
    : console.warn('Tienen que ser caracteres');

cuentaLetrasArrow(palabra)

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

const separando = (palabra3='',separador=undefined) =>
    (/[^a-z A-Z]/.test(palabra3)===true)
        ? console.warn('El texto no puede contener letras ni caracteres especiales')
        : (separador===undefined)
            ? console.warn('No pusistes una longitud')
            : console.info(palabra3.split([separador]));

separando('Hola que tal', ' ')

//---Punto 4---//

/*function repetir(palabra4,repeticion) {
    if (/[^a-z A-Z]/.test(palabra4)===false) {
        if (typeof repeticion==='number' && Number.isInteger(repeticion)) {
            console.log((palabra4 + ' ').repeat(repeticion));
        } else {
            console.log('El número de repeticiones debe ser un número entero')
        }
    } else {
        console.log('El texto no puede contener letras ni carcateres especiales');
    }
}*/

let palabra4='Hola Mundo'
let repeticion= 6
//repetir(palabra4,repeticion)

const repetirArrow=(palabra4='', repeticion=undefined) => {
    if (/[^a-z A-Z]/.test(palabra4)===true) return console.warn('El texto no puede contener letras ni carcateres especiales');
    if (repeticion===undefined) return console.warn('No has puesto ningún número de repeticiones');
    if (repeticion===0) return console.error('Las repeticiones no pueden ser 0');
    if (Math.sign(repeticion)===-1) return console.error('El número no puede ser negativo');
    if (typeof repeticion==='number' && Number.isInteger(repeticion)) {
        console.log((palabra4 + ' ').repeat(repeticion));
    } else {
        console.log('El número de repeticiones debe ser un número entero')
    }
}

repetirArrow(palabra4,repeticion)
//--fin--//


