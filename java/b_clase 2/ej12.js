let contraseña = function(contraseña){
    if (contraseña.lenght<8){
        return false
    }
    
    mayuscula = false
    numero = false

    for(let i=0; i<contraseña.length; i++ ){
        if ("A"<=contraseña[i] && contraseña[i]<="Z"){
            mayuscula = true
        }
        if ("0"<=contraseña[i] && contraseña[i]<="9"){
            numero = true
        }
    }

    return(mayuscula&&numero? true : false)
}

let contraseña_lola="Lola98755678"
console.log(contraseña(contraseña_lola))