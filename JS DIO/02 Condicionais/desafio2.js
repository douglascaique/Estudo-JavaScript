
// preços combustiveis
const precoEtanol = 3.80;
const precoGasolina = 4.70;

//info veículo
const rodaPorLitro = 10;
const tipoCombustivel = 'Gasolina';

//distancia percorrida
const km = 100;
// calculos 

const litrosConsumidos = km / rodaPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('Estamos usando Etanol na viagem com um valor total de ' + valorGasto);
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log('Estamos usando Gasolina na viagem com um valor total de ' + valorGasto);
}

//console.log(valorGasto.toFixed(2));