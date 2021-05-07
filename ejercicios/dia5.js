/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

// Ejercicio 15

var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const convBinDec = (numero, simbolo) => {
    if (typeof numero!='number') return console.error('Debes introducir un número')
    if (Number.isInteger(numero)===false) return console.warn('Debe ser un número entero')
    if (Math.sign(numero)!==1) return console.warn('Debe ser un número positivo mayor que 0')
    if (simbolo!=='d' && simbolo!=='b') return console.warn('Debes introducir una "d" para convertirlo en decimal decimal o una "b" para convertirlo en binario')
    if (simbolo==='b' && /(1|0)/.test(simbolo)===true) return console.warn('No es un numero binario')

    numeroO=numero

    if (simbolo==='b') {
        let binario=[]
        for (let index = 0; index < 1; index) {
        binario.push(Math.floor(numero%2))
        numero=numero/2
        if (numero<1) {
            binario=binario.reverse().join('')
            console.info(`El número ${numeroO} es ${binario} en binario`)
            break
        }}
    }
    
    
    
}
simbolo='b'
//convBinDec(2,simbolo);


// Ejercicio 16

const descuento=(precio='', desc='')=>{
    if (precio==='' || desc==='') return console.warn('No has rellenado todos los campos')
    if (typeof precio!=='number' || typeof desc!=='number') return console.error('No puedes introducir caracteres en los campos, debes introducir numeros')
    if (Math.sign(precio)!==1 || Math.sign(desc)!==1) return console.error('No puedes introducir números negativos, debes introducir un número positivo mayor que 0')

    if (desc>=precio) {
        return console.info('El precio final es 0') }
        else {console.info(`El precio final es ${precio-desc} `) }

}

let precio=10
let desc=25
//descuento(precio,desc)

// Ejercicio 17

const tiempo=(fecha)=>{
    if (dayjs(fecha).isValid()===false) return console.log('Debes poner un formato valido')
    let fecha1=dayjs()
    let fecha2=dayjs(fecha)
    console.log(`Han pasado ${fecha1.diff(fecha2, 'years')} años`)

}

tiempo('1989')