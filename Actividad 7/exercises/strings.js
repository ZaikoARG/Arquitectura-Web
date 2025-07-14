let textoLargo = "Programación";
let textoMayusculas = textoLargo.toUpperCase();
console.log("2a. Texto en mayúsculas:", textoMayusculas);

let primerosCinco = textoLargo.substring(0, 5);
console.log("2b. Primeros 5 caracteres:", primerosCinco);

let ultimosTres = textoLargo.substring(textoLargo.length - 3);
console.log("2c. Últimos 3 caracteres:", ultimosTres);

let primeraMayuscula = textoLargo.substring(0, 1).toUpperCase() + textoLargo.substring(1).toLowerCase();
console.log("2d. Primera letra en mayúscula:", primeraMayuscula);

let textoConEspacio = "JavaScript es genial";
let posicionEspacio = textoConEspacio.indexOf(" ");
console.log("2e. Posición del primer espacio:", posicionEspacio);

let dosPalabras = "Programación JavaScript";
let espacio = dosPalabras.indexOf(" ");
let palabra1 = dosPalabras.substring(0, espacio);
let palabra2 = dosPalabras.substring(espacio + 1);
let resultado = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase() + " " +
                palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();
console.log("2f. Ambas palabras con primera letra en mayúscula:", resultado);