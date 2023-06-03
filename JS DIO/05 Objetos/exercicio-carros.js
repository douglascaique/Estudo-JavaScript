/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.

Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class carro {
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

    calcularGastoDePercurso(distancia, precoCombustivel) {

        return distancia * (precoCombustivel * this.litroPorKm);
    }
}


const uno = new carro('Fiat', 'Amarelo', 1 / 15);
const palio = new carro('Fiat', 'Preto', 1 / 10)

console.log(uno.calcularGastoDePercurso(70, 5));
console.log(palio.calcularGastoDePercurso(70, 5))
