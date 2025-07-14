let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("3a. Mes 5:", meses[4], "Mes 11:", meses[10]);

let mesesOrdenados = [...meses].sort();
console.log("3b. Meses ordenados alfabéticamente:", mesesOrdenados);

meses.unshift("Inicio");
meses.push("Fin");
console.log("3c. Array con elemento al principio y al final:", meses);

meses.shift();
meses.pop();
console.log("3d. Array sin el primer y último elemento:", meses);

let mesesInvertidos = [...meses].reverse();
console.log("3e. Array invertido:", mesesInvertidos);

let mesesUnidos = meses.join("-");
console.log("3f. Meses unidos con guión:", mesesUnidos);

let mesesCopia = meses.slice(4, 11);
console.log("3g. Copia de Mayo a Noviembre:", mesesCopia);