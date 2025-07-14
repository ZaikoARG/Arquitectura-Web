function suma(a, b) {
    return a + b;
}
let resultadoSuma = suma(10, 20);
console.log("6a. Resultado de la suma:", resultadoSuma);

function sumaValidada(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("6b. Uno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}
console.log("6b. Suma validada:", sumaValidada(10, "20"));

function validateInteger(num) {
    return Number.isInteger(num);
}
console.log("6c. Es entero (5):", validateInteger(5));
console.log("6c. Es entero (5.5):", validateInteger(5.5));

function sumaConEnteros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("6d. Uno de los parámetros no es un número");
        return NaN;
    }
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("6d. Uno de los parámetros no es entero, se redondeará");
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}
console.log("6d. Suma con validación de enteros:", sumaConEnteros(10.5, 20));

function validateIntegerSeparate(num) {
    return Number.isInteger(num);
}

function sumaConValidacionSeparada(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("6e. Uno de los parámetros no es un número");
        return NaN;
    }
    if (!validateIntegerSeparate(a) || !validateIntegerSeparate(b)) {
        alert("6e. Uno de los parámetros no es entero, se redondeará");
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}
console.log("6e. Suma con validación separada:", sumaConValidacionSeparada(10.5, 20));