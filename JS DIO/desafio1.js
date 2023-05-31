

const precoCombustivel = 5.79;
const kmPorLitros = 12;
let km = 200;

const litrosConsumidos = km / kmPorLitros;

const valorGasto = litrosConsumidos * precoCombustivel;


console.log(valorGasto.toFixed(2));