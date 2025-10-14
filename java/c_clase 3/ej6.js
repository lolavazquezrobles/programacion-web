let ARRAY_NUMEROS = [1,23,4,6,5,4,3,,6,54,3]

//a
let numero_par = ARRAY_NUMEROS.find(function(num){
    return num%2==0
})

console.log(numero_par)


//b 
let mayor = ARRAY_NUMEROS.some(function(num){
    return num>20
})

console.log(mayor)


// c
let palabras = ARRAY_NUMEROS.every(function(num){
    return typeof(num)=== "string"
})

console.log(palabras)