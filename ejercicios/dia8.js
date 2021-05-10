/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */


//Ejercicio 24

let lista = [3,-1,-87,5]

const valNum=(lista=[])=>{
    if (lista==='') return console.log(`Debes introducir una lista`)
    if (!(Array.isArray(lista))) return console.log(`Debe ser una lista`)
    if (lista.length===0) return console.log('La lista no puede estar vacia')
    for (const i of lista) {if (typeof i!=='number') return console.log('Debe ser una lista de números')}
    return valido=()=>{if (typeof i!=='number') {return console.log('Debe ser una lista de números')}else {true} }
    }

const ascDesc=(lista=[])=>{
        if (valNum(lista)) { 
        return objt={
            asc:lista.sort(),
            des:lista.sort().reverse(),
        }}
    }

//console.log(ascDesc(lista));

//Ejercicio 25 
const lista2 = ["x", 10, "x", 2, "10", 10, true, true];

const eliminarRepetidos=(lista2)=>{
    if (lista==='') return console.log(`Debes introducir una lista`)
    if (!(Array.isArray(lista))) return console.log(`Debe ser una lista`)
    if (lista.length===0) return console.log('La lista no puede estar vacia')
    const myset= new Set([...lista2]);
    return console.log(myset)
}

//eliminarRepetidos(lista2)

// Ejercicio 26
lista3=[9,8,7,6,5,4,3,2,1,0]
const media=(lista3)=>{
    total=0
    if (valNum(lista3)) lista3.forEach(i =>total+=i)
    return (total/lista3.length)

}

console.log(media(lista3))




