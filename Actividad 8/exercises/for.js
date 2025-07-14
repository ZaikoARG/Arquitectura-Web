let palabras = ["sol", "luna", "estrella", "cielo", "nube"];
for (let i = 0; i < palabras.length; i++) {
    alert("5a. Palabra: " + palabras[i]);
}

for (let i = 0; i < palabras.length; i++) {
    let palabraModificada = palabras[i].substring(0, 1).toUpperCase() + palabras[i].substring(1);
    alert("5b. Palabra modificada: " + palabraModificada);
}

let sentence = "";
for (let i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert("5c. Frase completa: " + sentence.trim());

let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log("5d. Array con números del 0 al 9:", numeros);