let comparacion = function(hora){
    if (hora.slice(0,2)<12){
        return ("Buenos dias")
    }
    else if (hora.slice(0,2)>=12 && hora.slice(0,2)<=18){
        return ("Buenas tardes")
    }

    else {
        return ("Buenas noches")
    }

}

let hora="22:00"
console.log(comparacion(hora))