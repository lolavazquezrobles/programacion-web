let grados = function(n){
    if (n<15){
        return ("Hace frio")
    }
    else if (15<=n && n<=25){
        return ("Templado")
    }
    else {
        return ("Hace calor")
    }
}

console.log(grados(130))