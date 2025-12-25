// Desestructura tamaño y color en variables, asignando "azul" como valor por defecto a color.

const opciones = { tamaño: "M" };

const {tamaño, color="Azul"} = opciones;

console.log(tamaño);
console.log(color);