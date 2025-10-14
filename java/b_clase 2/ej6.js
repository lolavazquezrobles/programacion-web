let bo = function(bool1,bool2,bool3,bool4){
    if ((bool1 == true || bool2 == true) && (bool3 == false || bool4== false)){
        return True
    }
    else{
        return False
    }
}

// oooo

let bo2 = function(bool1,bool2,bool3,bool4){
    if ((bool1 || bool2 ) && (!bool3 || !bool4)){
        return True
    }
    else{
        return False
    }
}