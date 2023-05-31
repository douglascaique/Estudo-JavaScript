

const precoCombustivel = 5.79;
const kmPorLitros = 10;
let km = 100;

const litrosConsumidos = km / kmPorLitros;

const valorGasto = litrosConsumidos * precoCombustivel;


console.log(valorGasto);