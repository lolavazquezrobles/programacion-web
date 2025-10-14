const factorial = function(n) {
    if (n === 0) {     
        return 1;                // caso base
    } else {
        return n * factorial(n - 1);  // 👈 aquí la función se llama a sí misma
    }
};

// se puede llamar a la funcion adentro de la mimsa , = llamada recursiva