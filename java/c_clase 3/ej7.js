let lola = {
    nombre:"lola",
    edad: 19,
    ciudad:"CABA"
}

let mora = {
    nombre:"mora",
    edad: 16,
    ciudad:"CABA"
}

let trini = {
    nombre:"trinidad",
    edad: 49,
    ciudad:"CABA"
}

let PERSONAS = [lola, mora, trini]

let ARRAY = PERSONAS.map(function(objeto){
    return objeto.nombre
})

console.log(ARRAY)