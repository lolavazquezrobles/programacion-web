let ARRAY = [2, 25, 3, 5, 22, 5, 9]

ARRAY.forEach(function(num, indice, array){
    if (num%2==0){
        console.log("par")
    }
    else{
        console.log("impar")
    }
})

let resultado= ARRAY.find(function(num){
    if (num>20){
        return num
    }

})

console.log(resultado)

let mayor= ARRAY.some(function(num){
    return num>=18
})

console.log(mayor)