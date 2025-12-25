// Desestructura el primer y tercer color en variables separadas, ignorando el segundo.
const colores = ["rojo", "verde", "azul"];
const [first, , third] = colores;

console.log(first);
console.log(third);
