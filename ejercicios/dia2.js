/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

// Ejercicio 5

const invertir = (palabra) => {
    (/[^a-z A-Z]/.test(palabra)===false) 
    ? console.info(palabra.split('').reverse().join(''))
    : console.warn('El texto no puede contener numeros ni caracteres especiales')
    
}

invertir('Hola Mundo')

// Ejercicio 6

let frase='Hola que tal que tal Mundo pero Mundo Mundo '.split(' ')
const repeticion = (frase='') => {
    if (frase==='') return console.warn('No has pueso una frase')
    let index=[]
    frase.forEach(palabra => {
        let existe=index.indexOf(palabra)
        if ( existe != -1) {
            index[existe+1]+=1
        } else {
            index.push(palabra, 1 )
        }
    });
    console.log('Las palabras repetidas son:')
    for (let i = 0; i < index.length; i++) {
        const element = index[i];
        if (element>1){
            console.log(`La palabra '${index[i-1]}' se repite ${element} veces`)
        }
    }
}
repeticion(frase)


// Ejercicio 7

const palindromo=(palabra) => {
    ((palabra.split('').reverse().join('')===palabra))
        ? console.log('Es un palindromo')
        : console.log('No es un palindromo')
}; 

palindromo('Salas')

// Ejercicio 8
palabra='xyz1, xyz2, xyz3, xyz4 y xyz5'
porcion='xyz'
const extrae=(palabra='', porcion='')=> {
    if (palabra==='') return console.warn('No has puesto una frase');
    if (porcion==='') return console.warn('No has puesto un fragmento');
    if (typeof palabra==='number') return console.error('La frase no puede ser un numero')
    if (typeof palabra==='string') return console.log(palabra.replace(new RegExp(porcion, 'ig'),''))

}

extrae(palabra,porcion)