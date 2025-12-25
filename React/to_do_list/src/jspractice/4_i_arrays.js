// Desestructura los valores x1, y1, x2 y y2 en variables individuales.
const coordenadas = [
  [10, 20],
  [30, 40],
];

const [[x1, y1], [x2, y2]] = coordenadas;

console.log(x1, y1);
console.log(x2, y2);
