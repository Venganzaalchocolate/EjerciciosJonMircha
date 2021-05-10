/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

let lista = [4,-1,-87,5]

const valNum=(lista=[])=>{
    if (lista==='') return console.log(`La lista no puede estar vacia`)
    if (!(Array.isArray(lista))) return console.log(`Debe ser una lista`)
    if (lista.length===0) return console.log('La lista no puede estar vacia')
    for (const i of lista) {if (typeof i!=='number') return console.log('Debe ser una lista de números')}
    return valido=()=>{if (typeof i!=='number') {return console.log('Debe ser una lista de números')}else {true} }
    }


//Ejercicio 21
const cuadrado=(lista=[])=>{
    if(valNum(lista)){
        let cuadrado=lista.map(i=>{return i*i})
        return console.log(cuadrado)
    }

}

//cuadrado(lista)

// Ejercicio 22
const altoBajo=(lista=[])=>{
    if (valNum(lista)) { 
    return console.log(`El número más bajo es ${lista.sort()[0]} y el número más alto ${lista.sort().reverse()[0]}`)}
}

//altoBajo(lista)

//Ejercicio 23

const paresImpares=(lista=[])=>{
    if (valNum(lista)) {
        let objt={
            pares: lista.filter(pares=>pares%2===0),
            impares:lista.filter(impares=>impares%2!==0),
        } 
        return objt
    }}

    console.log(paresImpares(lista))

