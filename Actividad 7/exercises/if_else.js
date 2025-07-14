let numeroAleatorio = Math.random();
if (numeroAleatorio >= 0.5) {
    alert("4a. Greater than 0.5");
} else {
    alert("4a. Lower than 0.5");
}
console.log("4a. Número aleatorio:", numeroAleatorio);

let Age = 25;
if (Age < 2) {
    alert("4b. Bebe");
} else if (Age >= 2 && Age <= 12) {
    alert("4b. Niño");
} else if (Age >= 13 && Age <= 19) {
    alert("4b. Adolescente");
} else if (Age >= 20 && Age <= 30) {
    alert("4b. Joven");
} else if (Age >= 31 && Age <= 60) {
    alert("4b. Adulto");
} else if (Age >= 61 && Age <= 75) {
    alert("4b. Adulto mayor");
} else {
    alert("4b. Anciano");
}
console.log("4b. Edad:", Age);