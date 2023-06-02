/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.

Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class carros {
    marca;
    cor;
    litroPorKm;

    constructor(marca, cor, litroPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.litroPorKm = litroPorKm;
    }

    descrever() {
        console.log(`O carro da ${this.marca} da cor ${this.cor}, roda ${this.litroPorKm}L por Km`)
    }
}

function valorPorKm(km, precoCombustivel) {
    valorPorKm = precoCombustivel * km
}

const km = 100;
const precoCombustivel = 3.80;