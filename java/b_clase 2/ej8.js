let saludar= function(nombre){
    if (nombre!=""){
        return "hola "+nombre
    }
    else{
        return "hola invitado"
    }
}

nombre=""
console.log(saludar(nombre))