let ARRAY = ["lola", "perro", "diosa"]

function concatenar(array){
    let st = ""
    for(let i=0; i<array.length;i++){
        if (i!=array.length-1){
            st+=array[i]+" "
        }
        else{
            st+=array[i]
        }

    }
return(st)
}

console.log(concatenar(ARRAY))