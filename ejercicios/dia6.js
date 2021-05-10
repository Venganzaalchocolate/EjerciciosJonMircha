/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/


// Ejercicio 18 

const cuentaCaracteres=(frase='')=>{
    if (frase='') return console.log('El campo está vacio')
    if (typeof frase!=='string') return console.log('Debes ingresar caracteres')
    let vocales=0
    let consonantes=0
    let reV = new RegExp('[aeiouäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]','i');
    let reC = new RegExp('qwrtypdghjklñzxcvbnmç', 'i');


    frase.split('').forEach(element => {
        if (reV.test(element)===true) vocales+=1
        if (reV.test(element)===false && reC.test(element)===true) consonantes+=1
    })
    return console.log(`El texto tiene ${vocales} vocales y ${consonantes} consonantes`)
}
let frase=('HaA1 ó')
//cuentaCaracteres(frase)

// Ejercicio 19
const validaNombre=(palabra)=>
    typeof palabra==='string'
    ? true
    : console.log('No es una palabra valida')

//console.log(validaNombre('Eli'))

// Ejercicio 20

const validaMail=(email)=>{
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

//console.log(validaMail('bb@gg.com'))

//Ejercicio 19 y 20
let mailP = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
let nombreP = /[a-zZäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ\s]+$/g

const validarPatron=(cadena='',patron='')=>{
    if (cadena==='' || patron==='') return console.log('Debes rellenar todos los campos')
    if (typeof cadena!=='string') return console.log ('La cadena debe ser un string')
    if (!(patron instanceof RegExp)) return console.log('El patron debe ser una instancia de Expresión Regular')
    return valido=patron.test(cadena)

}

console.log(validarPatron('Pepe', nombreP))

